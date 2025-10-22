import { Sparkles, Target, Trophy, Zap } from 'lucide-react';
import logo from '@/assets/logo.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Feels Go Real Logo" className="w-12 h-12 rounded-lg" />
            <div>
              <h1 className="text-2xl font-bold">About Feels Go Real</h1>
              <p className="text-sm text-muted-foreground">Your Path To Emotion Control</p>
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
              What if you could strategically use your emotions to create the best life experience possible? What if that argument that got you mad earlier didn’t leave you overthinking about what you should have said differently? What if that upcoming thing you’re worried about wasn’t stopping you from enjoying your life in the moment right now?<br></br>
              Feels Go Real is a platform that helps you strengthen your ability to control emotions so you can better control your life. Life is hard, but having more emotional awareness allows you to use your emotion's power to pick the right goals for yourself and achieve them.<br></br> The platform uses short self-questionnaires so you can get your thoughts out at your own pace, and a point tracking system that allows you to see and feel your growth in action. Get on the app, enter a zone, and follow the prompts to get your points. If your emotions are holding you back from living the happiest life you want to live, using this app is the right decision.
            </p>
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
                  <p>Select from five emotion zones based on what you're experiencing or want to explore.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Answer Reflective Questions</h3>
                  <p>Answer 5 thought-provoking questions at your own pace to deepen self-understanding.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Track Progress</h3>
                  <p>Monitor your achievements, compare zones, and celebrate your growth.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Install App</h3>
                  <p>To install the app:</p>
                  <ul>
                    <li><strong>On mobile:</strong> Tap the browser menu (Share on iPhone, menu on Android) → <em>Add to Home Screen</em></li>
                    <li><strong>On desktop:</strong> Look for the install icon in the address bar</li>
                    <li>Works offline after installation</li>
                    <li>Loads instantly like a native app</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="border-t pt-8 text-center">
            <h2 className="text-xl font-bold mb-3 text-foreground">Disclaimer</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              <strong>This App isn't the same thing as therapy.</strong> <br />
              The advice in this app is intended for general information purposes only. 
              Please don't rely upon this information in the same way you would a medical professional, 
              as it's not a substitute for medical advice tailored to your individual situation and circumstances.
            </p>
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
