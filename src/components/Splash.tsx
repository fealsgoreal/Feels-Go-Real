import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-primary">
      <div className="text-center animate-fade-in">
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
            <Sparkles className="w-16 h-16 text-white" strokeWidth={2} />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">Feels Go Real</h1>
        <p className="text-xl text-white/90">Explore your emotional journey</p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
