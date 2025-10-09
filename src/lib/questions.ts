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
    {
      id: 'anger-4',
      text: 'What would you tell someone struggling with anger?',
    },
    {
      id: 'anger-5',
      text: 'How has understanding your anger helped you grow?',
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
    {
      id: 'jealousy-4',
      text: 'Describe a time when jealousy led to positive change.',
    },
    {
      id: 'jealousy-5',
      text: 'What have you learned about yourself through jealousy?',
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
    {
      id: 'pride-4',
      text: 'How do you balance healthy pride with humility?',
    },
    {
      id: 'pride-5',
      text: 'What role does pride play in your self-esteem?',
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
    {
      id: 'anxiety-4',
      text: 'When has anxiety actually helped protect you?',
    },
    {
      id: 'anxiety-5',
      text: 'How has your relationship with anxiety changed over time?',
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
    {
      id: 'fear-4',
      text: 'What small step can you take to face a current fear?',
    },
    {
      id: 'fear-5',
      text: 'What have your fears taught you about courage?',
    },
  ],
};

export const getQuestionsForZone = (zoneId: ZoneType): Question[] => {
  return zoneQuestions[zoneId] || [];
};
