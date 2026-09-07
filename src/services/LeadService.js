import { postToAppsScript } from "./ApiClient";

export async function submitAssessmentLead(payload) {
  return postToAppsScript({
    action: "submitAssessmentLead",
    ...payload,
  });
}
