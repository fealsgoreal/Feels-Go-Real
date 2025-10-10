import { Question, ZoneType } from '@/types/zone';

export const zoneQuestions: Record<ZoneType, Question[]> = {
  anger: [
    {
      id: 'anger-1',
      text: 'What triggers your anger most frequently?',
    },
    {
      id: 'anger-2',
      text: 'How do you express anger in healthy ways?',
    },
    {
      id: 'anger-3',
      text: 'What have you learned from your anger?',
    },
  ],
  jealousy: [
    {
      id: 'jealousy-1',
      text: 'When do you feel most envious of others?',
    },
    {
      id: 'jealousy-2',
      text: 'How does comparison affect your self-worth?',
    },
    {
      id: 'jealousy-3',
      text: 'What would happen if you stopped comparing yourself?',
    },
  ],
  pride: [
    {
      id: 'pride-1',
      text: 'What are you most proud of about yourself?',
    },
    {
      id: 'pride-2',
      text: 'When does pride become a barrier for you?',
    },
    {
      id: 'pride-3',
      text: 'How do you balance confidence with humility?',
    },
  ],
  anxiety: [
    {
      id: 'anxiety-1',
      text: 'What worries keep you up at night?',
    },
    {
      id: 'anxiety-2',
      text: 'How do you calm yourself when anxious?',
    },
    {
      id: 'anxiety-3',
      text: 'What would life look like without constant worry?',
    },
  ],
  fear: [
    {
      id: 'fear-1',
      text: 'What is your deepest fear?',
    },
    {
      id: 'fear-2',
      text: 'How has fear held you back?',
    },
    {
      id: 'fear-3',
      text: 'What would you do if you had no fear?',
    },
  ],
};

export const getQuestionsForZone = (zoneId: ZoneType): Question[] => {
  return zoneQuestions[zoneId] || [];
};
