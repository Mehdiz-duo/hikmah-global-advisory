import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-8 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Hikmah Global Advisory Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-light/70 text-base leading-relaxed max-w-md font-sans">
              We are an independent accounting, advisory, and business consulting firm. We exist to help your organization achieve sustainable growth, unmatched governance, and complete financial excellence.
            </p>
            <p className="text-accent font-serif italic mt-8 text-xl tracking-wide">
              "Guided by Wisdom. Driven by Excellence."
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Industries', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="group flex items-center text-light/70 hover:text-accent transition-colors text-base font-medium"
                  >
                    <span className="w-2 h-px bg-accent mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-6 tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <span className="text-light/70 text-sm leading-relaxed mt-1">
                  <strong className="text-white block mb-1">Head Office:</strong>
                  Kismayo, Somalia<br />
                  <span className="opacity-75">Regional Coverage: East Africa & Horn of Africa</span>
                </span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <a href="mailto:admin@hikmahglobaladvisory.com" className="text-light/70 hover:text-white transition-colors text-sm font-medium">
                  admin@hikmahglobaladvisory.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <a href="tel:+252613900335" className="text-light/70 hover:text-white transition-colors text-sm font-medium">
                  +252 61 390 0335
                </a>
              </li>
              <li className="flex items-center group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <a href="http://www.hikmahglobaladvisory.com" className="text-light/70 hover:text-white transition-colors text-sm font-medium">
                  www.hikmahglobaladvisory.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/40 text-sm font-medium">
            &copy; {new Date().getFullYear()} Hikmah Global Advisory LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0 text-light/40 text-sm font-semibold tracking-wider uppercase">
            <span className="hover:text-accent transition-colors cursor-pointer">Accounting</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Audit</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Tax</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
