import { Sparkles, Calendar } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">Discover Amazing Events</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-purple-200 to-gray-400 bg-clip-text text-transparent">
            Your Next
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Adventure Awaits
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Explore curated events, connect with your passions, and make unforgettable memories.
          Your perfect experience is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <button
            onClick={onExploreClick}
            className="relative px-8 py-4 rounded-xl overflow-hidden group w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 group-hover:from-purple-500 group-hover:via-purple-400 group-hover:to-purple-300 transition-all"></div>
            <div className="absolute inset-0 blur-xl bg-purple-500/60 group-hover:bg-purple-400/80 transition-all"></div>
            <span className="relative flex items-center justify-center space-x-2 text-white font-semibold">
              <Calendar className="w-5 h-5" />
              <span>Explore Events</span>
            </span>
          </button>

          <button className="px-8 py-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-purple-500/50 transition-all text-gray-300 hover:text-purple-400 font-semibold backdrop-blur-sm w-full sm:w-auto">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
          {[
            { label: 'Active Events', value: '500+' },
            { label: 'Happy Users', value: '10K+' },
            { label: 'Categories', value: '25+' },
            { label: 'Cities', value: '50+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}
