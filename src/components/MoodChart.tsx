import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for the last 7 days
const moodData = [
  { day: "Mon", mood: 4, date: "Dec 9" },
  { day: "Tue", mood: 3, date: "Dec 10" },
  { day: "Wed", mood: 5, date: "Dec 11" },
  { day: "Thu", mood: 3, date: "Dec 12" },
  { day: "Fri", mood: 4, date: "Dec 13" },
  { day: "Sat", mood: 5, date: "Dec 14" },
  { day: "Sun", mood: 4, date: "Dec 15" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const moodValue = payload[0].value;
    const moodLabels = ["", "Very Low", "Low", "Okay", "Good", "Great"];
    const moodEmojis = ["", "😔", "😟", "😐", "🙂", "😊"];
    
    return (
      <div className="bg-card border border-wellness-sage-light/30 rounded-lg p-3 shadow-[var(--shadow-card)]">
        <p className="font-medium">{label}</p>
        <p className="text-wellness-sage flex items-center gap-2">
          <span>{moodEmojis[moodValue]}</span>
          {moodLabels[moodValue]}
        </p>
      </div>
    );
  }
  return null;
};

export const MoodChart = () => {
  const averageMood = moodData.reduce((sum, data) => sum + data.mood, 0) / moodData.length;
  
  return (
    <Card className="shadow-[var(--shadow-wellness)] border-wellness-sage-light/30">
      <CardHeader>
        <CardTitle className="text-wellness-sage">Mood Trends</CardTitle>
        <CardDescription>
          Your emotional journey over the past week
          <span className="block mt-1 text-wellness-ocean">
            Average mood: {averageMood.toFixed(1)}/5
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--wellness-sage-light))" opacity={0.3} />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                domain={[1, 5]} 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => {
                  const labels = ["", "😔", "😟", "😐", "🙂", "😊"];
                  return labels[value] || "";
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--wellness-sage))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-sage))", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: "hsl(var(--wellness-ocean))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};