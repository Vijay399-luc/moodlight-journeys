import { useState } from "react";
import { MoodTracker } from "@/components/MoodTracker";
import { MoodChart } from "@/components/MoodChart";
import { WellnessRecommendations } from "@/components/WellnessRecommendations";
import { WellnessStats } from "@/components/WellnessStats";
import { Button } from "@/components/ui/button";
import { Brain, Calendar, TrendingUp, Heart } from "lucide-react";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<number | undefined>();
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));

  const handleMoodSelect = (mood: number) => {
    setSelectedMood(mood);
    // Here you would typically save to a database
    console.log("Mood selected:", mood);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-wellness-sage-light/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-wellness-sage-light/30 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-wellness-sage to-wellness-ocean rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-wellness-sage">
                  Wellness Monitor
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your mental health companion
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-wellness-sage">
                {currentDate}
              </p>
              <p className="text-xs text-muted-foreground">
                Track your journey
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-wellness-sage to-wellness-ocean bg-clip-text text-transparent">
            Welcome back! How are you today?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a moment to check in with yourself. Your mental health matters, and every small step 
            towards wellbeing is a victory worth celebrating.
          </p>
        </section>

        {/* Mood Tracker */}
        <section>
          <MoodTracker onMoodSelect={handleMoodSelect} selectedMood={selectedMood} />
        </section>

        {/* Stats Grid */}
        <section>
          <WellnessStats />
        </section>

        {/* Charts and Recommendations */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MoodChart />
          <WellnessRecommendations />
        </section>

        {/* Quick Actions */}
        <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-wellness-sage-light/30">
          <h3 className="text-xl font-semibold text-wellness-sage mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5 text-wellness-ocean" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="wellness" className="flex items-center gap-2 py-6">
              <Calendar className="h-5 w-5" />
              View Journal
            </Button>
            <Button variant="wellness" className="flex items-center gap-2 py-6">
              <TrendingUp className="h-5 w-5" />
              Progress Report
            </Button>
            <Button variant="wellness" className="flex items-center gap-2 py-6">
              <Brain className="h-5 w-5" />
              Mindfulness
            </Button>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            Remember: You're not alone in this journey. If you need immediate support,
            <br />
            please reach out to a mental health professional or crisis helpline.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;