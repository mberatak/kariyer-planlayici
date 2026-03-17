import { Question, RankedArea, TestResult } from '@/types';
import { areas } from './data/areas';

export function calculateScores(
  questions: Question[],
  answers: { questionId: number; optionLabel: string }[]
): Record<string, number> {
  // Initialize all area scores to 0
  const rawScores: Record<string, number> = {};
  const areaIds = areas.map((a) => a.id);
  for (const id of areaIds) rawScores[id] = 0;

  // Accumulate weighted scores
  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const option = question.options.find((o) => o.label === answer.optionLabel);
    if (!option) continue;

    for (const [areaId, weight] of Object.entries(option.weights)) {
      if (rawScores[areaId] !== undefined) {
        rawScores[areaId] += weight;
      }
    }
  }

  // Normalize using z-score (mean-centered) instead of min-max
  // This prevents inflating scores for everyone
  const values = Object.values(rawScores);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);

  const normalized: Record<string, number> = {};
  
  for (const [areaId, score] of Object.entries(rawScores)) {
    let normalized_score: number;
    
    if (stdDev === 0) {
      // All scores are equal
      normalized_score = 50;
    } else {
      // Calculate z-score: (score - mean) / stdDev
      const zscore = (score - mean) / stdDev;
      
      // Convert z-score to 0-100 range using sigmoid-like transformation
      // This centers around 50, with more spread for differentiation
      // Formula: 50 + (20 * zscore) gives roughly 10-90 range for +/- 2 std deviations
      let pct = 50 + (16 * zscore);
      
      // Apply a mild power curve for extra differentiation at extremes
      const relative = (pct - 10) / 80; // normalize to 0-1 range (keeping 10-90 bounds)
      if (relative > 0) {
        pct = 10 + 80 * Math.pow(relative, 1.8);
      }
      
      normalized_score = pct;
    }
    
    // Ensure reasonable bounds: 5-95 (not 0-100, to avoid false certainty)
    normalized[areaId] = Math.round(Math.max(5, Math.min(95, normalized_score)));
  }

  return normalized;
}

export function rankAreas(scores: Record<string, number>): RankedArea[] {
  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([areaId, score], index) => ({
      areaId,
      score,
      rank: index + 1,
    }));
}

export function buildTestResult(
  testType: 'quick' | 'detailed',
  questions: Question[],
  answers: { questionId: number; optionLabel: string }[]
): TestResult {
  const scores = calculateScores(questions, answers);
  const rankedAreas = rankAreas(scores);

  return {
    testType,
    answers,
    scores,
    rankedAreas,
    completedAt: new Date().toISOString(),
  };
}
