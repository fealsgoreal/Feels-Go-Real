import { Zone, ZoneType } from '@/types/zone';

export const zones: Zone[] = [
  {
    id: 'anger',
    name: 'Anger Zone',
    color: 'zone-anger',
    gradient: 'gradient-anger',
    icon: '😠',
    description: 'Understand and process your anger'
  },
  {
    id: 'jealousy',
    name: 'Jealousy Zone',
    color: 'zone-jealousy',
    gradient: 'gradient-jealousy',
    icon: '😒',
    description: 'Explore feelings of jealousy'
  },
  {
    id: 'pride',
    name: 'Pride Zone',
    color: 'zone-pride',
    gradient: 'gradient-pride',
    icon: '😌',
    description: 'Reflect on pride and self-worth'
  },
  {
    id: 'anxiety',
    name: 'Anxiety Zone',
    color: 'zone-anxiety',
    gradient: 'gradient-anxiety',
    icon: '😰',
    description: 'Navigate through anxiety'
  },
  {
    id: 'fear',
    name: 'Fear Zone',
    color: 'zone-fear',
    gradient: 'gradient-fear',
    icon: '😨',
    description: 'Face your fears head-on'
  }
];

export const getZone = (id: ZoneType): Zone | undefined => {
  return zones.find(zone => zone.id === id);
};
