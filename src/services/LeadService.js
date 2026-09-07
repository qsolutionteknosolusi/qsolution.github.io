/**
 * LeadService.js
 *
 * Purpose:
 * Coordinates assessment lead submission through the API abstraction.
 */
import { postToAppsScript } from "./ApiClient";

export async function submitAssessmentLead(payload) {
  return postToAppsScript({
    action: "submitAssessmentLead",
    ...payload,
  });
}
