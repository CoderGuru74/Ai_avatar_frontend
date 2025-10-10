import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Clock, Smile, Globe, Cpu } from 'lucide-react';

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card-item');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Real-Time Animation',
      description: 'Experience instant facial expression mirroring with zero lag. Our advanced algorithms capture every subtle movement.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderGradient: 'from-teal-500/50 to-cyan-500/50',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Privacy-First Design',
      description: 'Your data stays yours. All processing happens locally with end-to-end encryption for maximum security.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderGradient: 'from-amber-500/50 to-orange-500/50',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Ultra-Low Latency',
      description: 'Sub-50ms response time ensures natural, fluid conversations without any noticeable delay.',
      gradient: 'from-teal-500/20 to-emerald-500/20',
      borderGradient: 'from-teal-500/50 to-emerald-500/50',
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: 'Photorealistic Avatars',
      description: 'State-of-the-art AI generates incredibly lifelike avatars that capture your unique features and expressions.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500/50 to-pink-500/50',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Universal Compatibility',
      description: 'Works seamlessly across all major video conferencing platforms and devices without any setup.',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      borderGradient: 'from-blue-500/50 to-indigo-500/50',
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning enhances realism, smooths movements, and adapts to lighting conditions.',
      gradient: 'from-teal-500/20 to-amber-500/20',
      borderGradient: 'from-teal-500/50 to-amber-500/50',
    },
  ];

  return (
    <section
      id="features-section"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400"> Seamless Interaction</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technology that transforms how you present yourself in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card-item group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: `linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))`,
                borderColor: 'rgba(75, 85, 99, 0.5)',
              }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative z-10">
                <div className="mb-6 text-teal-400 group-hover:text-amber-400 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6 inline-block">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-amber-400 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-amber-400 transition-all duration-500 rounded-full" />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
