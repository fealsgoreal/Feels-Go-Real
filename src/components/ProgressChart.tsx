import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { zones } from '@/lib/zones';
import { loadProgressHistory } from '@/lib/storage';
import { ZoneType } from '@/types/zone';

const ProgressChart = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(1);
  const [selectedZones, setSelectedZones] = useState<Set<ZoneType>>(
    new Set(['anger', 'jealousy', 'pride', 'anxiety', 'fear'])
  );

  const progressHistory = loadProgressHistory();

  const chartData = useMemo(() => {
    const now = new Date();
    const startDate = new Date(now);
    startDate.setMonth(startDate.getMonth() - selectedMonths);

    // Filter entries by date range
    const filteredEntries = progressHistory.entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= now;
    });

    // Group by date and zone
    const groupedByDate = new Map<string, Record<ZoneType, number>>();

    filteredEntries.forEach(entry => {
      const dateKey = entry.date.split('T')[0]; // Get just the date part
      if (!groupedByDate.has(dateKey)) {
        groupedByDate.set(dateKey, {
          anger: 0,
          jealousy: 0,
          pride: 0,
          anxiety: 0,
          fear: 0
        });
      }
      const dayData = groupedByDate.get(dateKey)!;
      dayData[entry.zoneId] += entry.points;
    });

    // Convert to array and sort by date
    return Array.from(groupedByDate.entries())
      .map(([date, zoneData]) => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        ...zoneData
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [progressHistory, selectedMonths]);

  const toggleZone = (zoneId: ZoneType) => {
    setSelectedZones(prev => {
      const newSet = new Set(prev);
      if (newSet.has(zoneId)) {
        newSet.delete(zoneId);
      } else {
        newSet.add(zoneId);
      }
      return newSet;
    });
  };

  const monthOptions = [
    { value: 1, label: '1 Month' },
    { value: 3, label: '3 Months' },
    { value: 6, label: '6 Months' },
    { value: 12, label: '1 Year' }
  ];

  const zoneColors: Record<ZoneType, string> = {
    anger: '#ef4444',
    jealousy: '#10b981',
    pride: '#8b5cf6',
    anxiety: '#f59e0b',
    fear: '#3b82f6'
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Progress Tracker</h2>
        </div>
      </div>

      {/* Time Filter */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Time Range</p>
        <div className="flex gap-2 flex-wrap">
          {monthOptions.map(option => (
            <Button
              key={option.value}
              variant={selectedMonths === option.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedMonths(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Zone Filter */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Filter by Emotion</p>
        <div className="flex gap-2 flex-wrap">
          {zones.map(zone => (
            <Button
              key={zone.id}
              variant={selectedZones.has(zone.id) ? 'default' : 'outline'}
              size="sm"
              onClick={() => toggleZone(zone.id)}
              className="gap-2"
            >
              <span>{zone.icon}</span>
              {zone.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="date" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              {zones.map(zone => (
                selectedZones.has(zone.id) && (
                  <Line
                    key={zone.id}
                    type="monotone"
                    dataKey={zone.id}
                    name={zone.name}
                    stroke={zoneColors[zone.id]}
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            <p>No progress data available for the selected time range</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProgressChart;
