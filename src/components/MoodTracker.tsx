import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const moodOptions = [
  { emoji: "😊", label: "Great", value: 5, color: "bg-gradient-to-br from-wellness-warm to-wellness-sage-light" },
  { emoji: "🙂", label: "Good", value: 4, color: "bg-gradient-to-br from-wellness-sage-light to-wellness-ocean-light" },
  { emoji: "😐", label: "Okay", value: 3, color: "bg-gradient-to-br from-wellness-calm to-wellness-sage-light" },
  { emoji: "😟", label: "Low", value: 2, color: "bg-gradient-to-br from-muted to-wellness-calm" },
  { emoji: "😔", label: "Very Low", value: 1, color: "bg-gradient-to-br from-secondary to-muted" },
];

interface MoodTrackerProps {
  onMoodSelect: (mood: number) => void;
  selectedMood?: number;
}

export const MoodTracker = ({ onMoodSelect, selectedMood }: MoodTrackerProps) => {
  const [hoveredMood, setHoveredMood] = useState<number | null>(null);

  return (
    <Card className="shadow-[var(--shadow-wellness)] border-wellness-sage-light/30">
      <CardHeader className="text-center">
        <CardTitle className="text-wellness-sage">How are you feeling today?</CardTitle>
        <CardDescription>
          Select your current mood to help us track your wellness journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-3">
          {moodOptions.map((mood) => (
            <button
              key={mood.value}
              onClick={() => onMoodSelect(mood.value)}
              onMouseEnter={() => setHoveredMood(mood.value)}
              onMouseLeave={() => setHoveredMood(null)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105",
                mood.color,
                selectedMood === mood.value
                  ? "ring-2 ring-wellness-sage shadow-lg scale-105"
                  : "hover:shadow-[var(--shadow-wellness)]",
                "active:scale-95"
              )}
            >
              <span className="text-2xl mb-2 transition-transform duration-200">
                {mood.emoji}
              </span>
              <span className="text-sm font-medium text-foreground/80">
                {mood.label}
              </span>
              {(selectedMood === mood.value || hoveredMood === mood.value) && (
                <div className="absolute inset-0 bg-white/20 rounded-xl" />
              )}
            </button>
          ))}
        </div>
        {selectedMood && (
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Mood recorded! Remember, every feeling is valid. 💚
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};