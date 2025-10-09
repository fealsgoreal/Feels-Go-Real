import { Question, ZoneType } from '@/types/zone';

export const zoneQuestions: Record<ZoneType, Question[]> = {
  anger: [
    {
      id: 'anger-1',
      text: 'What triggers your anger the most?',
    },
    {
      id: 'anger-2',
      text: 'Describe a time when you expressed anger constructively.',
    },
    {
      id: 'anger-3',
      text: 'How do you calm yourself when you feel angry?',
    },
  ],
  jealousy: [
    {
      id: 'jealousy-1',
      text: 'When do you feel jealous and why?',
    },
    {
      id: 'jealousy-2',
      text: 'What does jealousy teach you about your desires?',
    },
    {
      id: 'jealousy-3',
      text: 'How can you transform jealousy into motivation?',
    },
  ],
  pride: [
    {
      id: 'pride-1',
      text: 'What accomplishment are you most proud of?',
    },
    {
      id: 'pride-2',
      text: 'How does pride affect your relationships?',
    },
    {
      id: 'pride-3',
      text: 'When has pride held you back from growth?',
    },
  ],
  anxiety: [
    {
      id: 'anxiety-1',
      text: 'What situations make you feel anxious?',
    },
    {
      id: 'anxiety-2',
      text: 'Describe your go-to coping strategies for anxiety.',
    },
    {
      id: 'anxiety-3',
      text: 'What would you say to comfort your anxious self?',
    },
  ],
  fear: [
    {
      id: 'fear-1',
      text: 'What is your biggest fear and why?',
    },
    {
      id: 'fear-2',
      text: 'Describe a fear you overcame and how you did it.',
    },
    {
      id: 'fear-3',
      text: 'How does fear protect or limit you?',
    },
  ],
};

export const getQuestionsForZone = (zoneId: ZoneType): Question[] => {
  return zoneQuestions[zoneId] || [];
};
