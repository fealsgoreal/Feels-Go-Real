import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { zones } from '@/lib/zones';
import { loadProgressHistory } from '@/lib/storage';
import { ZoneType } from '@/types/zone';

const ProgressChart = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(1);
  const progressHistory = loadProgressHistory();

  const zoneColors: Record<string, string> = {
    'Anger': '#f70c0c',
    'Jealousy': '#f7b40cff',
    'Pride': '#f7f30cff',
    'Anxiety': '#8911daff',
    'Fear': '#196004ff'
  };

  const chartData = useMemo(() => {
    const now = new Date();
    const startDate = new Date(now);
    startDate.setMonth(startDate.getMonth() - selectedMonths);

    // Filter entries by date range
    const filteredEntries = progressHistory.entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= now;
    });

    // Group by zone
    const groupedByZone: Record<ZoneType, number> = {
      anger: 0,
      jealousy: 0,
      pride: 0,
      anxiety: 0,
      fear: 0
    };

    filteredEntries.forEach(entry => {
      groupedByZone[entry.zoneId] += entry.points;
    });

    // Convert to array format for chart
    return zones.map(zone => ({
      emotion: zone.name,
      points: Math.min(groupedByZone[zone.id], 10), // Cap at 10
      icon: zone.icon,
      color: zoneColors[zone.name] || '#3b82f6'
    }));
  }, [progressHistory, selectedMonths]);

  const monthOptions = [
    { value: 1, label: '1 Month' },
    { value: 3, label: '3 Months' },
    { value: 6, label: '6 Months' },
    { value: 12, label: '1 Year' }
  ];

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

      {/* Chart */}
      <div className="h-[400px] w-full">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="emotion" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                domain={[0, 100]}
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                label={{ value: 'Points', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />

              {/* Gradient Definitions */}
              <defs>
                {chartData.map(entry => {
                  const id = `gradient-${entry.emotion.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                    <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={entry.color} stopOpacity={0.95} />
                      <stop offset="100%" stopColor={entry.color} stopOpacity={0.45} />
                    </linearGradient>
                  );
                })}
              </defs>

              {/* Bars with Gradient + Animation */}
              <Bar 
                dataKey="points"
                radius={[8, 8, 0, 0]}
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={1000}
                animationEasing="ease-in-out"
              >
                {chartData.map((entry, index) => {
                  const id = `gradient-${entry.emotion.toLowerCase().replace(/\s+/g, '-')}`;
                  return <Cell key={`cell-${index}`} fill={`url(#${id})`} />;
                })}
              </Bar>
            </BarChart>
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
