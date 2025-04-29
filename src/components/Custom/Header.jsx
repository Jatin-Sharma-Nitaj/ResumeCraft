import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header id='Header' className="w-full z-50 bg-white/90 backdrop-blur-lg shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Brand */}
        <Link to={'/'} className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-bold text-indigo-600 tracking-wide">ResCraft</span>
        </Link>

        {/* Auth Buttons */}
        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="outline" className="text-sm border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white text-sm px-6">
              Sign UP
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
