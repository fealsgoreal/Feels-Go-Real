import { Question, ZoneType } from '@/types/zone';

export const zoneQuestions: Record<ZoneType, Question[]> = {
  anger: [
    {
      id: 'anger-1',
      text: 'What made you mad recently?',
    },
    {
      id: 'anger-2',
      text: 'What exactly did you want?',
    },
    {
      id: 'anger-3',
      text: 'Why did you want that?',
    },
        {
      id: 'anger-4',
      text: 'Did getting mad get you what you wanted?',
    },
    {
      id: 'anger-5',
      text: 'Is there a better way for you to get the thing you wanted?',
    },
  ],
  jealousy: [
    {
      id: 'jealousy-1',
      text: 'What is something/someone you have had jealousy towards recently?',
    },
    {
      id: 'jealousy-2',
      text: 'What do they have and why do you want it?',
    },
    {
      id: 'jealousy-3',
      text: 'Is that a need, a desire, or both?',
    },
    {
      id: 'jealousy-4',
      text: 'Could you obtain what they have under the perfect circumstances?',
    },
    {
      id: 'jealousy-5',
      text: 'What is something you have that you do not think they have?',
    },
  ],
  pride: [
    {
      id: 'pride-1',
      text: 'What is something where your pride got between you and a goal or opportunity recently?',
    },
    {
      id: 'pride-2',
      text: 'What were you prideful about?',
    },
    {
      id: 'pride-3',
      text: 'What is the goal or opportunity and why do you want it?',
    },
    {
      id: 'pride-4',
      text: 'Is that a need, a desire, or both?',
    },
    {
      id: 'pride-5',
      text: 'Is there something you could get out of the goal or opportunity that would give you more to be prideful about in the future?',
    },
  ],
  anxiety: [
    {
      id: 'anxiety-1',
      text: 'What is something you have been anxious about recently?',
    },
    {
      id: 'anxiety-2',
      text: 'What outcome do you want and why?',
    },
    {
      id: 'anxiety-3',
      text: 'What outcome do you expect and why?',
    },
    {
      id: 'anxiety-4',
      text: 'What are the consequences of that?',
    },
    {
      id: 'anxiety-5',
      text: 'Would the consequences teach you or show you anything that will be helpful in the future?',
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
