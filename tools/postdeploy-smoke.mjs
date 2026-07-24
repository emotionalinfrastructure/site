const deploymentUrl = new URL(
  process.env.DEPLOYMENT_URL || "https://demo.emotionalinfrastructure.org/",
);
const expectedHost = process.env.EXPECTED_HOST || deploymentUrl.hostname;
const attempts = Number.parseInt(process.env.SMOKE_ATTEMPTS || "3", 10);
const timeoutMs = Number.parseInt(process.env.SMOKE_TIMEOUT_MS || "15000", 10);

const requiredHeaders = new Map([
  ["content-security-policy", null],
  ["strict-transport-security", null],
  ["x-content-type-options", "nosniff"],
  ["x-frame-options", "DENY"],
  ["referrer-policy", null],
  ["permissions-policy", null],
  ["cross-origin-opener-policy", "same-origin"],
  ["cross-origin-resource-policy", "same-origin"],
]);

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function timedFetch(url, init = {}) {
  const started = performance.now();
  const response = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      "User-Agent": "Emotional-Infrastructure-Deployment-Smoke/1.0",
      ...(init.headers || {}),
    },
  });
  return { response, elapsedMs: Math.round((performance.now() - started) * 100) / 100 };
}

async function verifyHttpsAttempt(attempt) {
  const { response, elapsedMs } = await timedFetch(deploymentUrl, { redirect: "follow" });
  const body = await response.text();
  const finalUrl = new URL(response.url);

  invariant(response.status === 200, `Attempt ${attempt}: expected 200, received ${response.status}`);
  invariant(finalUrl.protocol === "https:", `Attempt ${attempt}: final protocol was ${finalUrl.protocol}`);
  invariant(finalUrl.hostname === expectedHost, `Attempt ${attempt}: final host was ${finalUrl.hostname}`);

  const contentType = response.headers.get("content-type") || "";
  invariant(
    /^text\/html\s*;\s*charset=utf-8/i.test(contentType),
    `Attempt ${attempt}: invalid HTML Content-Type: ${contentType || "missing"}`,
  );

  invariant(body.includes("AI Trust Receipt"), `Attempt ${attempt}: expected page identity was absent`);
  invariant(body.includes("Six gate presets"), `Attempt ${attempt}: interactive demo content was absent`);

  for (const [name, expectedValue] of requiredHeaders) {
    const actual = response.headers.get(name);
    invariant(actual, `Attempt ${attempt}: required header ${name} was absent`);
    if (expectedValue !== null) {
      invariant(
        actual.toLowerCase() === expectedValue.toLowerCase(),
        `Attempt ${attempt}: ${name} was ${actual}; expected ${expectedValue}`,
      );
    }
  }

  return {
    attempt,
    status: response.status,
    finalUrl: response.url,
    elapsedMs,
    contentType,
    cfRay: response.headers.get("cf-ray"),
  };
}

async function verifyHttpRedirect() {
  const httpUrl = new URL(deploymentUrl);
  httpUrl.protocol = "http:";

  const { response, elapsedMs } = await timedFetch(httpUrl, { redirect: "manual" });
  const location = response.headers.get("location");

  invariant(
    [301, 302, 307, 308].includes(response.status),
    `HTTP endpoint returned ${response.status}; expected an HTTPS redirect`,
  );
  invariant(location, "HTTP redirect did not include a Location header");

  const redirectUrl = new URL(location, httpUrl);
  invariant(redirectUrl.protocol === "https:", `HTTP redirect used ${redirectUrl.protocol}`);
  invariant(redirectUrl.hostname === expectedHost, `HTTP redirect changed host to ${redirectUrl.hostname}`);

  return {
    status: response.status,
    location: redirectUrl.toString(),
    elapsedMs,
  };
}

const httpsResults = [];
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  httpsResults.push(await verifyHttpsAttempt(attempt));
}

const httpRedirect = await verifyHttpRedirect();

console.log(
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      deploymentUrl: deploymentUrl.toString(),
      expectedHost,
      httpsResults,
      httpRedirect,
    },
    null,
    2,
  ),
);
