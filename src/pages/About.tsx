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
              <p className="text-sm text-muted-foreground">Your emotional awareness platform</p>
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
              Feels Go Real is an interactive emotional awareness platform designed to help you explore, 
              understand, and process your emotions. Journey through different emotional zones, reflect 
              on meaningful questions, and track your personal growth along the way.
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
                      Explore five emotional zones - Anger, Jealousy, Pride, Anxiety, and Fear - 
                      each designed to help you understand and process these feelings.
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
                      Challenge yourself with timed reflection challenges. Set goals and commit to 
                      regular emotional check-ins through Daily, Weekly, or Monthly formats.
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
                      Monitor your emotional journey with detailed statistics including total reflections, 
                      current streak, and completion rates for each emotional zone.
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
                  <h3 className="font-semibold text-foreground mb-1">Choose Your Emotion</h3>
                  <p>Select an emotional zone that resonates with what you're feeling or want to explore.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Reflect on Questions</h3>
                  <p>Answer thoughtful questions designed to help you process and understand your emotions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Set Personal Goals</h3>
                  <p>Optionally join contests to commit to regular emotional reflection and self-awareness practices.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Track Your Journey</h3>
                  <p>Monitor your emotional growth, maintain your reflection streak, and celebrate your self-awareness.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center pt-8 border-t">
            <p className="text-muted-foreground">
              Ready to start your emotional awareness journey? Head back to the{' '}
              <a href="/" className="text-primary hover:underline font-semibold">
                home page
              </a>{' '}
              and begin exploring your emotions!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
