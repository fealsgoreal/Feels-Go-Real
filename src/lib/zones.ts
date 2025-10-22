import { Zone, ZoneType } from '@/types/zone';

export const zones: Zone[] = [
  {
    id: 'anger',
    name: 'Anger',
    color: 'zone-anger',
    gradient: 'gradient-anger',
    icon: '😡',
    description: 'Transform rage into power'
  },
  {
    id: 'jealousy',
    name: 'Jealousy',
    color: 'zone-jealousy',
    gradient: 'gradient-jealousy',
    icon: '😒',
    description: 'Confront envy and comparison'
  },
  {
    id: 'pride',
    name: 'Pride',
    color: 'zone-pride',
    gradient: 'gradient-pride',
    icon: '👑',
    description: 'Balance ego and self-worth'
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    color: 'zone-anxiety',
    gradient: 'gradient-anxiety',
    icon: '😰',
    description: 'Navigate worry and uncertainty'
  },
  {
    id: 'fear',
    name: 'Fear',
    color: 'zone-fear',
    gradient: 'gradient-fear',
    icon: '😨',
    description: 'Face your deepest concerns'
  }
];

export const getZone = (id: ZoneType): Zone | undefined => {
  return zones.find(zone => zone.id === id);
};
