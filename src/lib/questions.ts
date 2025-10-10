import { Question, ZoneType } from '@/types/zone';

export const zoneQuestions: Record<ZoneType, Question[]> = {
  fire: [
    {
      id: 'fire-1',
      text: 'What fuels your inner fire and keeps you motivated?',
    },
    {
      id: 'fire-2',
      text: 'Describe a challenge you overcame through determination.',
    },
    {
      id: 'fire-3',
      text: 'What does passion mean to you?',
    },
  ],
  ocean: [
    {
      id: 'ocean-1',
      text: 'How do you find calm in turbulent times?',
    },
    {
      id: 'ocean-2',
      text: 'What depths of wisdom have you discovered in your journey?',
    },
    {
      id: 'ocean-3',
      text: 'Describe a moment when you went with the flow.',
    },
  ],
  forest: [
    {
      id: 'forest-1',
      text: 'What new skills or knowledge are you currently growing?',
    },
    {
      id: 'forest-2',
      text: 'How do you nurture your personal development?',
    },
    {
      id: 'forest-3',
      text: 'Describe a lesson you learned from nature or observation.',
    },
  ],
  mystic: [
    {
      id: 'mystic-1',
      text: 'What mysteries or unknowns fascinate you the most?',
    },
    {
      id: 'mystic-2',
      text: 'Describe an intuition or insight that proved valuable.',
    },
    {
      id: 'mystic-3',
      text: 'What hidden potential do you believe you possess?',
    },
  ],
  solar: [
    {
      id: 'solar-1',
      text: 'What brings light and clarity to your life?',
    },
    {
      id: 'solar-2',
      text: 'How do you illuminate the path for others?',
    },
    {
      id: 'solar-3',
      text: 'Describe a moment when everything became clear to you.',
    },
  ],
};

export const getQuestionsForZone = (zoneId: ZoneType): Question[] => {
  return zoneQuestions[zoneId] || [];
};
