/*
  # Create events table for GoPromo

  1. New Tables
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `image_url` (text) - URL to event image
      - `date` (timestamptz) - Event date and time
      - `location` (text) - Event location/venue
      - `category` (text) - Event category (music, sports, arts, etc.)
      - `price` (numeric) - Ticket price (0 for free events)
      - `organizer` (text) - Event organizer name
      - `created_at` (timestamptz) - Record creation timestamp
      - `created_by` (uuid) - User who created the event (references auth.users)
  
  2. Security
    - Enable RLS on `events` table
    - Add policy for anyone to read events (public discovery)
    - Add policy for authenticated users to create events
    - Add policy for users to update their own events
    - Add policy for users to delete their own events
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  price numeric DEFAULT 0,
  organizer text NOT NULL,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update own events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can delete own events"
  ON events
  FOR DELETE
  TO authenticated
  USING (auth.uid() = created_by);

-- Insert some sample events for demonstration
INSERT INTO events (title, description, image_url, date, location, category, price, organizer)
VALUES 
  ('Neon Nights Music Festival', 'Experience the ultimate electronic music festival with world-class DJs and stunning visual effects', 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-15 20:00:00+00', 'Downtown Arena', 'music', 89.99, 'GoPromo Events'),
  ('Tech Innovation Summit 2025', 'Join industry leaders discussing the future of technology, AI, and innovation', 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-20 09:00:00+00', 'Convention Center', 'technology', 149.99, 'TechHub'),
  ('Art After Dark', 'An immersive art experience featuring contemporary artists and interactive installations', 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-01-30 19:00:00+00', 'Modern Art Gallery', 'arts', 25.00, 'Urban Arts Collective'),
  ('Street Food Festival', 'Taste cuisines from around the world at this outdoor food celebration', 'https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-10 12:00:00+00', 'Central Park', 'food', 0, 'City Events'),
  ('Midnight Gaming Championship', 'Compete in the ultimate esports tournament with massive prizes', 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-25 18:00:00+00', 'Gaming Arena', 'gaming', 35.00, 'ESports League'),
  ('Sunset Yoga & Wellness', 'Find your zen with guided meditation and yoga sessions at sunset', 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-01-28 17:30:00+00', 'Beachfront Park', 'wellness', 15.00, 'Wellness Collective')
ON CONFLICT DO NOTHING;