/**
 * ScoringService.js
 *
 * Purpose:
 * Converts assessment answers into scores, categories, and ranked insights.
 */
export function getScoreCategory(score) {
  if (score <= 40) return "Awal";
  if (score <= 70) return "Berkembang";
  if (score <= 90) return "Maju";
  return "Digital Leader";
}

export function calculateScore(answers, questionCount) {
  const values = Object.values(answers).map(Number);
  if (!values.length || !questionCount) return 0;
  return Math.round((values.reduce((total, value) => total + value, 0) / (questionCount * 2)) * 100);
}

export function getAssessmentInsights(answers, questions) {
  const ranked = questions
    .map((question) => ({ label: question.label, value: Number(answers[question.id] ?? 0) }))
    .sort((a, b) => b.value - a.value);

  return {
    strengths: ranked.slice(0, 3).map(({ label }) => label),
    improvements: ranked.slice(-3).reverse().map(({ label }) => label),
  };
}
