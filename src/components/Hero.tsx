import { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Users, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Transform Yourself Into a Virtual Avatar';
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-teal-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="hero-content animate-fade-in-up">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-sm">
              Next-Gen Avatar Technology
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-amber-200 min-h-[1.2em] hero-title">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto hero-subtitle leading-relaxed">
            Upload your photo, create a realistic avatar, and animate it in real-time during virtual conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 hero-buttons">
            <button
              onClick={scrollToDemo}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Try Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={scrollToFeatures}
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto hero-cards">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Upload"
              description="Simple photo upload to create your digital twin"
              delay="0ms"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Animate"
              description="Real-time facial expression mirroring"
              delay="100ms"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Interact"
              description="Engage in virtual meetings with your avatar"
              delay="200ms"
            />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-teal-400 opacity-60" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: string }) {
  return (
    <div
      className="feature-card p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2 group"
      style={{ animationDelay: delay }}
    >
      <div className="text-teal-400 mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
