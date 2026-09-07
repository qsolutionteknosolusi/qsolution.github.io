/**
 * ApiClient.js
 *
 * Purpose:
 * Provides the optional Google Apps Script transport boundary.
 */
const apiUrl = import.meta.env.VITE_APPS_SCRIPT_URL || "";

export async function postToAppsScript(payload) {
  if (!apiUrl) {
    return { configured: false };
  }

  const response = await fetch(apiUrl, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Apps Script request failed with status ${response.status}`);
  }

  return { configured: true, data: await response.json() };
}
