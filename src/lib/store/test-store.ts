'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TestResult, RankedArea } from '@/types';

interface TestStore {
  testType: 'quick' | 'detailed' | null;
  currentQuestion: number;
  answers: { questionId: number; optionLabel: string }[];
  result: TestResult | null;

  startTest: (type: 'quick' | 'detailed') => void;
  setAnswer: (questionId: number, optionLabel: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  setResult: (result: TestResult) => void;
  resetTest: () => void;
}

export const useTestStore = create<TestStore>()(
  persist(
    (set) => ({
      testType: null,
      currentQuestion: 0,
      answers: [],
      result: null,

      startTest: (type) =>
        set({ testType: type, currentQuestion: 0, answers: [], result: null }),

      setAnswer: (questionId, optionLabel) =>
        set((state) => {
          const existing = state.answers.findIndex((a) => a.questionId === questionId);
          if (existing >= 0) {
            const updated = [...state.answers];
            updated[existing] = { questionId, optionLabel };
            return { answers: updated };
          }
          return { answers: [...state.answers, { questionId, optionLabel }] };
        }),

      nextQuestion: () =>
        set((state) => ({ currentQuestion: state.currentQuestion + 1 })),

      prevQuestion: () =>
        set((state) => ({
          currentQuestion: Math.max(0, state.currentQuestion - 1),
        })),

      setResult: (result) => set({ result }),

      resetTest: () =>
        set({ testType: null, currentQuestion: 0, answers: [], result: null }),
    }),
    {
      name: 'kariyer-test-store',
    }
  )
);
