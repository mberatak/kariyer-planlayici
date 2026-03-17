export interface Area {
  id: string;
  slug: string;
  emoji: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  color: string; // tailwind color name
  gradient: string; // tailwind bg gradient class
  glowClass: string;
  hardSkills: string[];
  softSkills: string[];
  salaryTR: {
    junior: string;
    mid: string;
    senior: string;
  };
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  jobMarket: 'Çok İyi' | 'İyi' | 'Orta' | 'Zor';
  careerPath: string[];
  courses: {
    name: string;
    url: string;
    platform: string;
    free: boolean;
  }[];
  projectIdeas: string[];
  books: string[];
  successStories: {
    name: string;
    title: string;
    story: string;
  }[];
  popularCompanies: string[];
  tags: string[];
}

export interface Question {
  id: number;
  text: string;
  category: 'technical' | 'social' | 'hobby' | 'motivation' | 'learning';
  options: {
    label: string;
    text: string;
    weights: Record<string, number>; // areaId -> score (-2 to +2)
  }[];
}

export interface TestResult {
  testType: 'quick' | 'detailed';
  answers: { questionId: number; optionLabel: string }[];
  scores: Record<string, number>; // areaId -> 0-100 score
  rankedAreas: RankedArea[];
  completedAt: string;
}

export interface RankedArea {
  areaId: string;
  score: number; // 0-100
  rank: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
  emoji: string;
}
