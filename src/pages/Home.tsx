import { ArrowRight, ArrowUpRight, ShieldCheck, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <Seo
        title="Accounting, Audit & Consulting"
        description="Hikmah Global Advisory LLP is an independent accounting, audit, consulting, and advisory firm helping organizations strengthen governance and improve performance across East Africa."
        path="/"
      />
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
        {/* Abstract Gold Mesh Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary opacity-30 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center space-x-3 mb-8 px-4 py-2 border border-accent/30 rounded-full bg-white/5 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold">Your Trusted Global Partner</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8"
              >
                Transform Your Vision Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light italic pr-4">Impact.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-light/80 mb-12 max-w-2xl leading-relaxed font-light"
              >
                Founded in 2009, Hikmah Global Advisory LLP is an independent accounting, audit, consulting, and advisory firm helping organizations strengthen governance, improve performance, manage risk, and achieve sustainable growth across Africa and beyond.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link to="/services" className="group relative inline-flex justify-center items-center px-10 py-5 bg-accent text-primary font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_40px_rgba(202,138,4,0.3)] transition-all hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    See How We Can Help <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent rounded-2xl blur-2xl opacity-30 transform translate-x-4 translate-y-4"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10 mix-blend-overlay"></div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Professional Advisory" className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Asymmetric) */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
                  alt="Hikmah Professionals" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-12 left-10 right-10">
                  <div className="w-16 h-1 bg-accent mb-6"></div>
                  <h3 className="text-3xl lg:text-4xl font-serif text-white leading-tight pr-4">"Guided by Wisdom. <br/>Driven by Excellence."</h3>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl border border-gray-100 max-w-xs hidden md:block z-10">
                <p className="text-6xl font-serif font-bold text-primary mb-2">15+</p>
                <p className="text-primary/60 font-semibold tracking-wider uppercase text-xs">Years of Global Expertise</p>
              </div>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Who We Are</h2>
              <h3 className="text-4xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">Your Partner in <br/>Sustainable Growth.</h3>
              <p className="text-xl text-primary/70 leading-relaxed font-light mb-6">
                We serve governments, development partners, NGOs, financial institutions, and private sector organizations through practical, results-oriented solutions grounded in international best practices.
              </p>
              <p className="text-lg text-primary/60 leading-relaxed font-light mb-12">
                Our name, <strong>Hikmah</strong>, literally translates to wisdom. It represents our core philosophy: technical accounting and advisory is only valuable when combined with profound practical wisdom and unimpeachable integrity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-3">Absolute Integrity</h4>
                  <p className="text-primary/60 text-sm">We provide unbiased, objective advice focused solely on what is best for your organization's future.</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-3">Measured Impact</h4>
                  <p className="text-primary/60 text-sm">Our solutions aren't theoretical. They are designed to be implemented, sustained, and measured.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase (Glassmorphism) */}
      <section className="py-32 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Expertise</h2>
              <h3 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">Everything you need to govern and grow.</h3>
            </div>
            <Link to="/services" className="group inline-flex items-center space-x-3 text-white hover:text-accent transition-colors pb-2 border-b border-white/20 hover:border-accent">
              <span className="font-bold tracking-wide uppercase text-sm">Explore All Services</span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Accounting & Finance', desc: 'Transform your financial records into strategic insights. We optimize your entire financial management system.' },
              { title: 'Audit & Assurance', desc: 'Bulletproof your operations. Enhance transparency and build absolute confidence with stakeholders and donors.' },
              { title: 'Tax Advisory', desc: 'Navigate complex tax environments with ease. We ensure full compliance while maximizing your efficiency.' },
              { title: 'Risk Management', desc: 'See around corners. We identify, assess, and mitigate the operational risks threatening your growth.' },
              { title: 'Development Advisory', desc: 'Specialized support for NGOs and donor-funded programs. Maximize your on-the-ground impact.' },
              { title: 'Business Advisory', desc: 'Make the right decisions, faster. Strategic planning and organizational development for modern enterprises.' }
            ].map((service, idx) => (
              <div key={idx} className="group glass-dark p-10 rounded-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                <div className="w-12 h-1 bg-accent mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                <h4 className="font-serif text-2xl font-bold text-white group-hover:text-primary mb-4 transition-colors">{service.title}</h4>
                <p className="text-light/60 group-hover:text-primary/70 font-light leading-relaxed mb-8 transition-colors">{service.desc}</p>
                <div className="flex items-center text-accent font-bold uppercase tracking-wider text-xs">
                  Discover How <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary mb-8 leading-tight">Ready to build something <span className="text-accent italic">lasting?</span></h2>
          <p className="text-xl text-primary/60 font-light mb-12 max-w-2xl mx-auto">
            Let's sit down and talk about where your organization is today, and where you want it to be tomorrow.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-12 py-6 bg-primary text-white font-bold text-lg rounded-full hover:bg-accent hover:text-primary hover:shadow-[0_0_30px_rgba(202,138,4,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
