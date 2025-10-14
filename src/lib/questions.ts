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
    {
      id: 'anger-4',
      text: 'When was the last time anger helped you set a boundary?',
    },
    {
      id: 'anger-5',
      text: 'How can you transform your anger into positive action?',
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
    {
      id: 'jealousy-4',
      text: 'What does your jealousy reveal about your deepest desires?',
    },
    {
      id: 'jealousy-5',
      text: 'How can you celebrate others while honoring your own journey?',
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
    {
      id: 'pride-4',
      text: 'When has asking for help made you stronger, not weaker?',
    },
    {
      id: 'pride-5',
      text: 'What would change if you let go of needing to be right?',
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
    {
      id: 'anxiety-4',
      text: 'Which of your worries have actually come true?',
    },
    {
      id: 'anxiety-5',
      text: 'What small step can you take today despite the anxiety?',
    },
  ],
  fear: [
    {
      id: 'fear-1',
      text: 'What is a fear that got between you and a goal recently?',
    },
    {
      id: 'fear-2',
      text: 'What is the goal and why do you want it?',
    },
    {
      id: 'fear-3',
      text: 'Why did you get scared?',
    },
    {
      id: 'fear-4',
      text: 'What are the consequences of that?',
    },
    {
      id: 'fear-5',
      text: 'Would the consequences teach you or show you anything that could be helpful in the future?',
    },
  ],
};

export const getQuestionsForZone = (zoneId: ZoneType): Question[] => {
  return zoneQuestions[zoneId] || [];
};
