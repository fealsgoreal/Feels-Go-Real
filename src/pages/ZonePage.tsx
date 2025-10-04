import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZoneType, Question } from '@/types/zone';
import { getZone } from '@/lib/zones';
import { updateZoneProgress } from '@/lib/storage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Coins, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ZonePage = () => {
  const { zoneId } = useParams<{ zoneId: ZoneType }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [earnedCoins, setEarnedCoins] = useState(0);

  const zone = zoneId ? getZone(zoneId) : null;

  // Sample questions - will be replaced with real content
  const questions: Question[] = [
    {
      id: '1',
      text: 'What is the main characteristic of this zone?',
      options: ['Speed', 'Wisdom', 'Strength', 'Magic'],
      correctAnswer: 1
    },
    {
      id: '2',
      text: 'How do you master this zone?',
      options: ['Practice daily', 'Study theory', 'Compete with others', 'Meditate'],
      correctAnswer: 0
    },
    {
      id: '3',
      text: 'What reward awaits those who complete this zone?',
      options: ['Gold coins', 'New abilities', 'Special badge', 'All of the above'],
      correctAnswer: 3
    }
  ];

  if (!zone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Zone not found</p>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setShowResult(true);

    if (isCorrect) {
      const coins = 10;
      setEarnedCoins(prev => prev + coins);
      toast.success('Correct!', {
        description: `You earned ${coins} coins!`,
        icon: '🎉'
      });
    } else {
      toast.error('Not quite right', {
        description: 'Try again next time!'
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Complete zone
      if (zoneId) {
        updateZoneProgress(zoneId, earnedCoins);
      }
      toast.success('Zone completed!', {
        description: `Total coins earned: ${earnedCoins}`,
        icon: '✨'
      });
      navigate('/');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Zone Header */}
      <div className={`${zone.gradient} text-white py-12`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-4 text-white hover:bg-white/20"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">{zone.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{zone.name}</h1>
              <p className="text-xl opacity-90">{zone.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5" />
              <span className="font-semibold">{earnedCoins} coins earned</span>
            </div>
            <div>
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>

      {/* Question Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].text}</h2>

            <div className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showWrong = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-50'
                        : showWrong
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end gap-3">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className={zone.gradient}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext} size="lg" className={zone.gradient}>
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Zone'}
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZonePage;
