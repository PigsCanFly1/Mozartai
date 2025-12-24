/*
  # Add new event categories

  1. Changes
    - Insert new events for spiritual, religious, political, festivals, and education categories
    - Expand the available event types for better discovery
*/

INSERT INTO events (title, description, image_url, date, location, category, price, organizer)
VALUES 
  ('Spiritual Awakening Retreat', 'Join us for a transformative weekend retreat focused on mindfulness, meditation, and inner peace', 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-03-05 08:00:00+00', 'Mountain Sanctuary', 'spiritual', 99.99, 'Mindful Living'),
  ('Faith & Fellowship Gathering', 'Community gathering celebrating faith, spirituality, and togetherness with inspiring speakers', 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-28 18:00:00+00', 'Community Center', 'religious', 0, 'United Faiths'),
  ('Political Forum 2025', 'Interactive panel discussion on current political issues with expert speakers and audience participation', 'https://images.pexels.com/photos/3807651/pexels-photo-3807651.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-03-10 19:00:00+00', 'Civic Auditorium', 'political', 25.00, 'Political Society'),
  ('Summer Festival Celebration', 'Three-day outdoor festival featuring live music, food vendors, art installations, and family activities', 'https://images.pexels.com/photos/2263913/pexels-photo-2263913.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-06-15 10:00:00+00', 'Central Gardens', 'festivals', 0, 'City Events'),
  ('Tech Education Summit', 'Learn cutting-edge programming and tech skills from industry professionals in interactive workshops', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-02-18 09:00:00+00', 'Tech Innovation Hub', 'education', 79.99, 'Code Academy'),
  ('Digital Marketing Masterclass', 'Intensive workshop on SEO, social media strategy, and brand growth tactics', 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-03-01 10:00:00+00', 'Business Center', 'education', 49.99, 'Marketing Institute')
ON CONFLICT DO NOTHING;