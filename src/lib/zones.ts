import { Zone, ZoneType } from '@/types/zone';

export const zones: Zone[] = [
  {
    id: 'fire',
    name: 'Fire Zone',
    color: 'zone-fire',
    gradient: 'gradient-fire',
    icon: '🔥',
    description: 'Master the flames of knowledge'
  },
  {
    id: 'ocean',
    name: 'Ocean Zone',
    color: 'zone-ocean',
    gradient: 'gradient-ocean',
    icon: '🌊',
    description: 'Dive deep into wisdom'
  },
  {
    id: 'forest',
    name: 'Forest Zone',
    color: 'zone-forest',
    gradient: 'gradient-forest',
    icon: '🌲',
    description: 'Grow your understanding'
  },
  {
    id: 'mystic',
    name: 'Mystic Zone',
    color: 'zone-mystic',
    gradient: 'gradient-mystic',
    icon: '✨',
    description: 'Unlock mystical secrets'
  },
  {
    id: 'solar',
    name: 'Solar Zone',
    color: 'zone-solar',
    gradient: 'gradient-solar',
    icon: '☀️',
    description: 'Illuminate your path'
  }
];

export const getZone = (id: ZoneType): Zone | undefined => {
  return zones.find(zone => zone.id === id);
};
