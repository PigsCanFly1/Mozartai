import { Zap, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function Navbar({ onSignInClick, onSignUpClick }: NavbarProps) {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Zap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div className="absolute inset-0 blur-xl bg-purple-500/30 group-hover:bg-purple-500/50 transition-all"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent">
              GoPromote <span className="text-lg">Events</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Events
            </a>
            <a href="#categories" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Categories
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <User className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{user.email?.split('@')[0]}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500/50 transition-all text-gray-300 hover:text-purple-400"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign Out</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onSignInClick}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={onSignUpClick}
                  className="relative px-6 py-2 rounded-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:from-purple-500 group-hover:to-purple-300 transition-all"></div>
                  <div className="absolute inset-0 blur-xl bg-purple-500/50 group-hover:bg-purple-400/70 transition-all"></div>
                  <span className="relative text-sm font-semibold text-white">Sign Up</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
