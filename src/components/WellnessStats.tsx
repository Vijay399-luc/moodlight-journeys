import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calendar, Target, Star } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    title: "Check-in Streak",
    value: "7",
    unit: "days",
    description: "Keep it up!",
    color: "text-wellness-sage",
    bgColor: "bg-gradient-to-br from-wellness-sage-light to-wellness-ocean-light",
  },
  {
    icon: TrendingUp,
    title: "Mood Improvement",
    value: "+15%",
    unit: "",
    description: "vs last week",
    color: "text-wellness-ocean",
    bgColor: "bg-gradient-to-br from-wellness-ocean-light to-wellness-warm",
  },
  {
    icon: Target,
    title: "Wellness Goals",
    value: "3",
    unit: "/ 5",
    description: "completed",
    color: "text-wellness-sage",
    bgColor: "bg-gradient-to-br from-wellness-warm to-wellness-sage-light",
  },
  {
    icon: Star,
    title: "Mindfulness",
    value: "45",
    unit: "min",
    description: "this week",
    color: "text-wellness-ocean",
    bgColor: "bg-gradient-to-br from-wellness-calm to-wellness-ocean-light",
  },
];

export const WellnessStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className="shadow-[var(--shadow-wellness)] border-wellness-sage-light/30 hover:scale-105 transition-all duration-300"
        >
          <CardContent className="p-0">
            <div className={`${stat.bgColor} p-4 rounded-t-lg`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-6 w-6 text-foreground/70" />
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground/90">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm text-foreground/60">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground/90 mb-1">{stat.title}</h3>
              <p className="text-xs text-foreground/60">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};