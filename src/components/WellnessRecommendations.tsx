import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Sunrise, Activity, BookOpen, Coffee, Music } from "lucide-react";

const recommendations = [
  {
    icon: Sunrise,
    title: "Morning Meditation",
    description: "Start your day with 10 minutes of mindfulness",
    category: "Mindfulness",
    duration: "10 min",
    color: "bg-gradient-to-br from-wellness-warm to-wellness-sage-light",
  },
  {
    icon: Activity,
    title: "Gentle Movement",
    description: "Take a short walk or do some light stretching",
    category: "Physical",
    duration: "15 min",
    color: "bg-gradient-to-br from-wellness-sage-light to-wellness-ocean-light",
  },
  {
    icon: BookOpen,
    title: "Gratitude Journal",
    description: "Write down three things you're grateful for today",
    category: "Reflection",
    duration: "5 min",
    color: "bg-gradient-to-br from-wellness-ocean-light to-wellness-calm",
  },
  {
    icon: Coffee,
    title: "Mindful Break",
    description: "Take a few deep breaths and enjoy the present moment",
    category: "Breathing",
    duration: "3 min",
    color: "bg-gradient-to-br from-wellness-calm to-wellness-warm",
  },
  {
    icon: Music,
    title: "Calming Sounds",
    description: "Listen to nature sounds or peaceful music",
    category: "Audio",
    duration: "20 min",
    color: "bg-gradient-to-br from-wellness-sage to-wellness-ocean",
  },
];

export const WellnessRecommendations = () => {
  return (
    <Card className="shadow-[var(--shadow-wellness)] border-wellness-sage-light/30">
      <CardHeader>
        <CardTitle className="text-wellness-sage flex items-center gap-2">
          <Heart className="h-5 w-5 text-wellness-ocean" />
          Personalized Recommendations
        </CardTitle>
        <CardDescription>
          Activities tailored to support your wellbeing today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`
                relative p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] 
                hover:shadow-[var(--shadow-wellness)] cursor-pointer group
                ${rec.color}
              `}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <rec.icon className="h-5 w-5 text-foreground/80" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground/90">{rec.title}</h3>
                    <Badge variant="secondary" className="text-xs bg-white/30 text-foreground/70">
                      {rec.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs border-white/30 text-foreground/60">
                      {rec.category}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-xs bg-white/20 hover:bg-white/30 text-foreground/80 h-7"
                    >
                      Start
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};