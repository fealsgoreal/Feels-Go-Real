import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { zones } from '@/lib/zones';
import { loadProgressHistory } from '@/lib/storage';
import { ZoneType } from '@/types/zone';

const ProgressChart = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(1);

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
      color: zone.color
    }));
  }, [progressHistory, selectedMonths]);

  const monthOptions = [
    { value: 1, label: '1 Month' },
    { value: 3, label: '3 Months' },
    { value: 6, label: '6 Months' },
    { value: 12, label: '1 Year' }
  ];

  const zoneColors: Record<string, string> = {
    'Anger': '#ef4444',
    'Jealousy': '#10b981',
    'Pride': '#8b5cf6',
    'Anxiety': '#f59e0b',
    'Fear': '#3b82f6'
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
                domain={[0, 10]}
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
              <Bar 
                dataKey="points" 
                radius={[8, 8, 0, 0]}
                fill="#8884d8"
              >
                {chartData.map((entry, index) => (
                  <rect 
                    key={`cell-${index}`}
                    fill={zoneColors[entry.emotion]}
                  />
                ))}
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
