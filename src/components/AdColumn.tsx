import { TrendingUp, Star } from 'lucide-react';

interface Ad {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const advertisements: Ad[] = [
  {
    id: 1,
    title: 'Premium Events Pass',
    description: 'Get unlimited access to all events. Save up to 40%',
    icon: <Star className="w-6 h-6" />,
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 2,
    title: 'Event Marketing Pro',
    description: 'Promote your event to thousands. Get started free',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 3,
    title: 'VIP Membership',
    description: 'Early access to hot events. Exclusive discounts daily',
    icon: <Star className="w-6 h-6" />,
    color: 'from-pink-600 to-pink-400',
  },
  {
    id: 4,
    title: 'Creator Studio',
    description: 'Host your own events. Sell tickets and earn revenue',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    id: 5,
    title: 'Premium Events Pass',
    description: 'Get unlimited access to all events. Save up to 40%',
    icon: <Star className="w-6 h-6" />,
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 6,
    title: 'Event Marketing Pro',
    description: 'Promote your event to thousands. Get started free',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-blue-600 to-blue-400',
  },
];

export function AdColumn() {
  return (
    <div className="hidden lg:block w-80 flex-shrink-0">
      <div className="sticky top-24 h-screen overflow-hidden">
        <div className="relative h-full">
          <style>{`
            @keyframes scrollUp {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-50%);
              }
            }

            .ad-scroll {
              animation: scrollUp 40s linear infinite;
            }

            .ad-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="ad-scroll space-y-4 pb-4">
            {advertisements.map((ad) => (
              <div
                key={ad.id}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className={`bg-gradient-to-br ${ad.color} rounded-lg p-3 w-fit mb-3 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{ad.icon}</div>
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{ad.title}</h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                  {ad.description}
                </p>
                <button className="w-full px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 text-purple-400 hover:text-purple-300 text-xs font-semibold transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
