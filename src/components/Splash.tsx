import { useEffect } from 'react';
import logo from '@/assets/logo.png';

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
          <img src={logo} alt="Feels Go Real Logo" className="w-48 h-48 mx-auto" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">Feels Go Real</h1>
        <p className="text-xl text-white/90">Your Path To Emotion Control</p>
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
