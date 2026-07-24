const DEMO_PATH = "/trust-receipt/";

const SECURITY_HEADERS = Object.freeze({
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "connect-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "img-src 'self' data:",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "upgrade-insecure-requests",
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
});

function secureResponse(response, pathname) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  const contentType = headers.get("Content-Type") || "";
  if (
    contentType.toLowerCase().startsWith("text/html") &&
    !contentType.toLowerCase().includes("charset=")
  ) {
    headers.set("Content-Type", "text/html; charset=utf-8");
  }

  if (pathname.startsWith("/schemas/")) {
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
    headers.set("Cross-Origin-Resource-Policy", "cross-origin");
  } else {
    headers.set("Cross-Origin-Resource-Policy", "same-origin");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function redirectToHttps(request) {
  const secureUrl = new URL(request.url);
  secureUrl.protocol = "https:";

  return secureResponse(
    new Response(null, {
      status: 308,
      headers: { Location: secureUrl.toString() },
    }),
    secureUrl.pathname,
  );
}

export default {
  async fetch(request, env) {
    const incomingUrl = new URL(request.url);

    if (incomingUrl.protocol === "http:") {
      return redirectToHttps(request);
    }

    if (!new Set(["GET", "HEAD"]).has(request.method)) {
      return secureResponse(
        new Response("Method Not Allowed", {
          status: 405,
          headers: { Allow: "GET, HEAD" },
        }),
        incomingUrl.pathname,
      );
    }

    const assetUrl = new URL(incomingUrl);
    if (assetUrl.pathname === "/") {
      assetUrl.pathname = DEMO_PATH;
    }

    const response = await env.ASSETS.fetch(new Request(assetUrl, request));
    return secureResponse(response, assetUrl.pathname);
  },
};
