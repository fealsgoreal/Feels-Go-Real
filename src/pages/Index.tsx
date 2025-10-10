import { useState } from 'react';
import Splash from '@/components/Splash';
import Home from './Home';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return <Home />;
};

export default Index;
