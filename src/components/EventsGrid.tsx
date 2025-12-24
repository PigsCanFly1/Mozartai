import { useEffect, useState } from 'react';
import { supabase, Event } from '../lib/supabase';
import { EventCard } from './EventCard';
import { AdColumn } from './AdColumn';
import { Filter } from 'lucide-react';

export function EventsGrid() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'music', 'technology', 'arts', 'food', 'gaming', 'wellness', 'spiritual', 'religious', 'political', 'festivals', 'education'];

  useEffect(() => {
    fetchEvents();
  }, [selectedCategory]);

  async function fetchEvents() {
    setLoading(true);
    let query = supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (selectedCategory !== 'all') {
      query = query.eq('category', selectedCategory);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  }

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-gray-400 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the hottest events happening around you
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            <Filter className="w-4 h-4 text-purple-400 ml-2" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-400 hover:text-purple-400 hover:bg-gray-700/50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No events found in this category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>

          <AdColumn />
        </div>
      </div>
    </section>
  );
}
