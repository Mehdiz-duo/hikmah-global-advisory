import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Hikmah Global Advisory Logo" 
                className="h-24 w-auto object-contain py-1"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-accent relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-primary/60'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ease-out ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent p-2 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute w-full left-0 top-28 border-t border-gray-100">
          <div className="pt-2 pb-6 space-y-1 px-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold uppercase tracking-wider transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-accent/10 text-accent'
                    : 'text-primary/70 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
