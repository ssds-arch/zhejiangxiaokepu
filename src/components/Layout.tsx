import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isTabActive = (path: string) => location.pathname === path;

  // Hide bottom nav on login and article detail pages
  const hideBottomNav = location.pathname === '/login' || location.pathname.startsWith('/article/');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Mobile Simulator Container */}
      <div className="w-full max-w-md h-[100dvh] sm:h-[850px] bg-[#FDFBF7] sm:rounded-3xl sm:shadow-2xl overflow-hidden flex flex-col relative border-x sm:border-y border-gray-200">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pb-safe">
          <Outlet />
        </div>

        {/* Bottom Navigation */}
        {!hideBottomNav && (
          <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-around px-4 pb-safe shrink-0">
            <button 
              onClick={() => navigate('/')}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                isTabActive('/') ? "text-blue-500" : "text-gray-400"
              )}
            >
              <Home size={24} strokeWidth={isTabActive('/') ? 2.5 : 2} />
              <span className="text-[10px] font-medium">看报纸</span>
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className={cn(
                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors",
                isTabActive('/profile') ? "text-blue-500" : "text-gray-400"
              )}
            >
              <User size={24} strokeWidth={isTabActive('/profile') ? 2.5 : 2} />
              <span className="text-[10px] font-medium">我的</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
