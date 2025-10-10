import { Sparkles, Target, Trophy, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 gradient-primary rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">About Feels Go Real</h1>
              <p className="text-sm text-muted-foreground">Your emotional growth platform</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Welcome to Feels Go Real</h2>
            <p className="text-lg text-muted-foreground">
              Feels Go Real is an emotional growth platform designed to help you navigate and understand 
              your emotions. Journey through five emotional zones: Anger, Jealousy, Pride, Anxiety, and Fear. 
              Complete reflective challenges, earn coins, and track your personal growth along the way.
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Emotional Zones</h3>
                    <p className="text-muted-foreground">
                      Navigate five emotional zones, each with reflective questions and exercises 
                      designed to deepen your self-awareness and emotional intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contest Mode</h3>
                    <p className="text-muted-foreground">
                      Challenge yourself with timed growth challenges in 1-month, 6-month, or 1-year formats. 
                      Earn points and track your emotional growth toward specific goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor your achievements with detailed statistics including total points, 
                      current streak, and completion rates for each zone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local Progress</h3>
                    <p className="text-muted-foreground">
                      Your progress is automatically saved in your browser, so you can pick up 
                      right where you left off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Choose Your Zone</h3>
                  <p>Select from five emotional zones based on what you're experiencing or want to explore.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Answer Reflective Questions</h3>
                  <p>Work through thought-provoking questions at your own pace to deepen self-understanding.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Join Contests</h3>
                  <p>Optionally participate in timed contests to push yourself and earn bonus points.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Track Progress</h3>
                  <p>Monitor your achievements, maintain your streak, and celebrate your growth.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center pt-8 border-t">
            <p className="text-muted-foreground">
              Ready to start your emotional growth journey? Head back to the{' '}
              <a href="/" className="text-primary hover:underline font-semibold">
                home page
              </a>{' '}
              and begin exploring!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
