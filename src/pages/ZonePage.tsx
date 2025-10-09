import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZoneType } from '@/types/zone';
import { getZone } from '@/lib/zones';
import { getQuestionsForZone } from '@/lib/questions';
import { updateZoneProgress } from '@/lib/storage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Coins, CheckCircle2, Circle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ZonePage = () => {
  const { zoneId } = useParams<{ zoneId: ZoneType }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const zone = zoneId ? getZone(zoneId) : null;
  const questions = zoneId ? getQuestionsForZone(zoneId) : [];

  if (!zone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Zone not found</p>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      toast.error('Please provide an answer');
      return;
    }

    const coins = 10;
    setEarnedCoins(prev => prev + coins);
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion));
    
    toast.success('Answer submitted!', {
      description: `You earned ${coins} coins!`,
      icon: '🎉'
    });

    // Move to next question or complete
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setUserAnswer('');
    } else {
      // Complete zone
      if (zoneId) {
        updateZoneProgress(zoneId, earnedCoins + coins);
      }
      toast.success('Zone completed!', {
        description: `Total coins earned: ${earnedCoins + coins}`,
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
        <div className="max-w-5xl mx-auto flex gap-6">
          {/* Questions Tray */}
          <Card className="w-64 p-4 h-fit sticky top-8">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Questions
            </h3>
            <div className="space-y-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg transition-colors flex items-start gap-2",
                    currentQuestion === index
                      ? "bg-primary text-primary-foreground"
                      : answeredQuestions.has(index)
                      ? "bg-muted hover:bg-muted/80"
                      : "hover:bg-muted/50"
                  )}
                >
                  {answeredQuestions.has(index) ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-sm line-clamp-2">
                    {index + 1}. {question.text}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          {/* Question Content */}
          <div className="flex-1">
            <div className="mb-6">
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].text}</h2>

              <div className="mb-6">
                <Textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="min-h-[150px] text-base"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSubmit}
                  disabled={!userAnswer.trim()}
                  size="lg"
                  className={zone.gradient}
                >
                  {currentQuestion < questions.length - 1 ? 'Submit & Continue' : 'Submit & Complete'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZonePage;
