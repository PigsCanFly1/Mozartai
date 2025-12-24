import { Calendar, MapPin, DollarSign, User } from 'lucide-react';
import { Event } from '../lib/supabase';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image_url}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/90 text-white backdrop-blur-sm border border-purple-400/50">
            {event.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{event.title}</h3>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>
              {formattedDate} at {formattedTime}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <User className="w-4 h-4 text-purple-400" />
            <span>{event.organizer}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-purple-400" />
            <span className="text-lg font-bold text-white">
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </span>
          </div>

          <button className="px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 text-purple-400 hover:text-purple-300 font-medium text-sm transition-all">
            Get Tickets
          </button>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
      </div>
    </div>
  );
}
