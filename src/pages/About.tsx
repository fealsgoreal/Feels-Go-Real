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
              <h1 className="text-2xl font-bold">About Zone Quest</h1>
              <p className="text-sm text-muted-foreground">Your learning adventure platform</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Welcome to Zone Quest</h2>
            <p className="text-lg text-muted-foreground">
              Zone Quest is an interactive learning platform designed to make your educational journey 
              engaging, structured, and rewarding. Progress through different learning zones, complete 
              challenges, and track your achievements along the way.
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
                    <h3 className="font-semibold text-lg mb-2">Learning Zones</h3>
                    <p className="text-muted-foreground">
                      Explore multiple themed zones, each with unique challenges and content 
                      designed to enhance your skills progressively.
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
                      Challenge yourself with timed contests in Daily, Weekly, or Monthly formats. 
                      Earn points and track your progress toward specific goals.
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
                  <p>Select from various learning zones based on your interests and goals.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Complete Challenges</h3>
                  <p>Work through exercises and challenges at your own pace within each zone.</p>
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
              Ready to start your learning journey? Head back to the{' '}
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
