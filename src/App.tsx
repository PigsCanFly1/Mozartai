import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsGrid } from './components/EventsGrid';
import { AuthModal } from './components/AuthModal';

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const eventsRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        onSignInClick={() => {
          setAuthMode('signin');
          setAuthModalOpen(true);
        }}
        onSignUpClick={() => {
          setAuthMode('signup');
          setAuthModalOpen(true);
        }}
      />

      <Hero onExploreClick={handleExploreClick} />

      <div ref={eventsRef}>
        <EventsGrid />
      </div>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 GoPromote Events. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
      />
    </div>
  );
}

export default App;
