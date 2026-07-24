import { expect, test } from "@playwright/test";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:8787/";

function trackRuntimeFailures(page) {
  const consoleErrors = [];
  const failedRequests = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.method()} ${request.url()} — ${request.failure()?.errorText || "unknown error"}`);
  });

  return { consoleErrors, failedRequests };
}

test("the interactive demo loads and the digest flow works", async ({ page }) => {
  const runtime = trackRuntimeFailures(page);

  const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/AI Trust Receipt — Interactive Demo/);
  await expect(page.getByRole("heading", { level: 1, name: "AI Trust Receipt" })).toBeVisible();

  const presets = page.getByRole("group", { name: "Demo gate presets" }).getByRole("button");
  await expect(presets).toHaveCount(6);

  await page.getByRole("button", { name: "Verify receipt" }).click();
  await expect(page.locator(".boundary-note").filter({ hasText: "Digest matches." })).toBeVisible();

  await page.getByRole("button", { name: "Tamper with a field" }).click();
  await page.getByRole("button", { name: "Verify receipt" }).click();
  await expect(page.locator(".boundary-note").filter({ hasText: "Digest mismatch." })).toBeVisible();

  await page.getByRole("button", { name: "Human-readable disclosure" }).click();
  await expect(page.getByLabel("Human-readable disclosure")).toBeVisible();

  expect(runtime.consoleErrors, `Console errors:\n${runtime.consoleErrors.join("\n")}`).toEqual([]);
  expect(runtime.failedRequests, `Failed requests:\n${runtime.failedRequests.join("\n")}`).toEqual([]);
});

test("the demo remains usable at a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "AI Trust Receipt" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Verify receipt" })).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
});

test("primary controls are keyboard reachable", async ({ page }) => {
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const verifyButton = page.getByRole("button", { name: "Verify receipt" });
  await verifyButton.focus();
  await expect(verifyButton).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator(".boundary-note").filter({ hasText: "Digest matches." })).toBeVisible();
});
