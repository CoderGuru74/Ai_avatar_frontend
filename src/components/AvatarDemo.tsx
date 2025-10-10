import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function AvatarDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying && !isHovering) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation(prev => ({
          x: prev.x,
          y: (prev.y + 0.5) % 360
        }));
      }, 30);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isPlaying, isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 60;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
    setRotation({ x, y });
  };

  const handleReset = () => {
    setRotation({ x: 0, y: 0 });
    setIsPlaying(true);
  };

  return (
    <section id="demo-section" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-10 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `orbit ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Your Avatar
            <span className="text-teal-400"> Live</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interact with a real-time 3D avatar that mirrors your facial expressions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-full text-red-400 text-sm font-semibold flex items-center gap-2 animate-pulse-slow">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                LIVE
              </span>
            </div>

            <div
              ref={canvasRef}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden aspect-video cursor-move"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative transition-transform duration-100 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

                  <div className="relative w-48 h-48 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full shadow-2xl">
                    <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="text-6xl">🧑</div>
                    </div>

                    <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 animate-ping-slow" />
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400/20" />
                  </div>

                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full opacity-40"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-120px)`,
                        animation: `orbit-reverse ${8}s linear infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 group"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                ) : (
                  <Play className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 group"
                title="Reset"
              >
                <RotateCcw className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/20 group"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                ) : (
                  <Volume2 className="w-6 h-6 text-teal-400 group-hover:text-teal-300" />
                )}
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Drag to rotate • Auto-rotates when idle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
