import { useEffect, useState, useRef } from 'react';
import { Shield, CreditCard, Lock } from 'lucide-react';

export default function CTA() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [avatarsCreated, setAvatarsCreated] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(setActiveUsers, 50000, 2000);
            animateCounter(setAvatarsCreated, 150000, 2000);
            animateCounter(setSatisfactionRate, 98, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number
  ) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 via-transparent to-amber-500/5" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400"> Digital Presence?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of users already experiencing the future of virtual communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="stat-card p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
              {formatNumber(activeUsers)}+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>

          <div className="stat-card p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
              {formatNumber(avatarsCreated)}+
            </div>
            <div className="text-gray-400">Avatars Created</div>
          </div>

          <div className="stat-card p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-2">
              {satisfactionRate}%
            </div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        <div className="mb-12">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-teal-500 to-amber-500 text-white rounded-xl font-bold text-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Start Your Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            </div>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-teal-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-400" />
            <span>100% Secure & Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}
