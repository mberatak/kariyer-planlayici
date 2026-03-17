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

  // Normalize: find min/max and scale to 0-100
  const values = Object.values(rawScores);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;

  const normalized: Record<string, number> = {};
  for (const [areaId, score] of Object.entries(rawScores)) {
    if (range === 0) {
      normalized[areaId] = 50;
    } else {
      const pct = ((score - min) / range) * 100;
      // Apply a mild boost: compress scaling so top areas are clearly differentiated
      normalized[areaId] = Math.round(Math.max(5, Math.min(100, pct)));
    }
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
