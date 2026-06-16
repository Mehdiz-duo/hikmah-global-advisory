import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Briefcase, Users, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Shield className="h-8 w-8" />, title: 'Integrity', desc: 'We uphold the highest ethical and professional standards in every single engagement. We never compromise on truth.' },
    { icon: <Award className="h-8 w-8" />, title: 'Excellence', desc: 'Good is not enough. We are committed to delivering quality services that fundamentally exceed your expectations.' },
    { icon: <Target className="h-8 w-8" />, title: 'Independence', desc: 'Our advice is fiercely objective, completely unbiased, and focused entirely on your organization\'s best interests.' },
    { icon: <Lightbulb className="h-8 w-8" />, title: 'Innovation', desc: 'The world changes fast. We embrace modern solutions and practical approaches to address your evolving challenges.' },
    { icon: <Users className="h-8 w-8" />, title: 'Partnership', desc: 'We don\'t just consult; we collaborate. We work alongside you to achieve meaningful and permanent results.' },
  ];

  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      {/* Page Header */}
      <section className="bg-primary pt-40 pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-serif font-bold text-white mb-6"
          >
            The <span className="text-accent italic">Hikmah</span> Story.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-3xl font-light leading-relaxed"
          >
            Since 2009, we have been the trusted advisors behind the region's most successful institutions. We believe that sound financial management and strategic leadership are the bedrock of any lasting legacy.
          </motion.p>
        </div>
      </section>

      {/* Main Profile (Editorial Layout) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Firm Profile</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Wisdom <br/>in Action.</h3>
              
              <div className="glass-dark p-8 rounded-2xl relative overflow-hidden mt-12 hidden lg:block">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-2xl rounded-full"></div>
                <Target className="w-10 h-10 text-accent mb-6 relative z-10" />
                <h4 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Our Vision</h4>
                <p className="text-light/80 font-light leading-relaxed relative z-10">
                  To be a trusted global advisory partner recognized for excellence, integrity, and innovative solutions that strengthen organizations and communities.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="prose prose-lg text-primary/70 font-light leading-relaxed max-w-none">
                <p className="text-2xl text-primary font-medium leading-relaxed mb-8">
                  Hikmah Global Advisory LLP is an independent accounting, advisory, and business consulting firm dedicated to helping organizations achieve sustainable growth and strong governance.
                </p>
                <p className="mb-6">
                  Established in 2009, we realized early on that technical expertise alone isn't enough. Real impact requires practical experience and a deep, nuanced understanding of local and international operating environments. 
                </p>
                <p className="mb-6">
                  Our name, <strong>"Hikmah,"</strong> meaning wisdom, reflects our commitment to delivering advice grounded in wisdom, integrity, and professional judgment. We serve clients across diverse sectors, including humanitarian and development organizations, government entities, private businesses, donor-funded programs, and non-profit institutions.
                </p>
                <p>
                  We are not just accountants or consultants. We are your partners in transformation.
                </p>
              </div>
              
              {/* Mobile version of the vision card */}
              <div className="bg-primary p-8 rounded-2xl relative overflow-hidden mt-12 lg:hidden">
                <Target className="w-10 h-10 text-accent mb-6 relative z-10" />
                <h4 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Our Vision</h4>
                <p className="text-light/80 font-light leading-relaxed relative z-10">
                  To be a trusted global advisory partner recognized for excellence, integrity, and innovative solutions that strengthen organizations and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Fixed Grid Layout to prevent broken text) */}
      <section className="py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">What Guides Us</h2>
              <h3 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">Our Core Values.</h3>
            </div>
          </div>
          
          {/* Robust CSS Grid to prevent broken cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-primary mb-8 bg-light w-16 h-16 flex items-center justify-center rounded-full">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{val.title}</h3>
                <p className="text-primary/60 font-light leading-relaxed flex-grow">{val.desc}</p>
              </div>
            ))}
            
            {/* Mission Statement filling the 6th spot */}
            <div className="bg-primary p-10 rounded-2xl shadow-xl flex flex-col justify-center relative overflow-hidden h-full">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Mission" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
              <Briefcase className="w-12 h-12 text-accent mb-6 relative z-10" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Our Mission</h3>
              <p className="text-light/80 font-light leading-relaxed relative z-10">
                To empower organizations through high-quality accounting, assurance, advisory, and capacity-building services that enhance performance, accountability, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Experience */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] mb-8">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Leadership" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Leadership</h2>
              <p className="text-primary/70 font-light leading-relaxed mb-4">
                Our leadership team combines decades of experience in finance, accounting, governance, risk management, procurement, donor-funded programming, and institutional development.
              </p>
              <p className="text-primary/70 font-light leading-relaxed mb-10">
                We are committed to maintaining the highest standards of professionalism, ethics, and client service while helping organizations achieve measurable and lasting results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-light p-6 rounded-2xl border border-gray-100 flex items-center space-x-5 hover:border-accent/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl flex-shrink-0">
                    FM
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-primary">Feysal Mohamed</h4>
                    <p className="text-accent text-sm font-semibold tracking-wide uppercase">Managing Director</p>
                  </div>
                </div>
                
                <div className="bg-light p-6 rounded-2xl border border-gray-100 flex items-center space-x-5 hover:border-accent/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl flex-shrink-0">
                    SN
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-primary">Samiro Abdiweli Nur</h4>
                    <p className="text-accent text-sm font-semibold tracking-wide uppercase">Director</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] mb-8">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Experience" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Experience & Assignments</h2>
              <p className="text-primary/70 font-light leading-relaxed mb-4">
                Hikmah Global Advisory LLP has supported clients across Africa through audit assignments, financial management strengthening, donor compliance reviews, procurement assessments, organizational capacity building, and strategic planning engagements.
              </p>
              <p className="text-primary/70 font-light leading-relaxed">
                Our experience spans public sector reform, humanitarian and development programming, financial services, infrastructure projects, and private sector advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-primary/60 font-light max-w-2xl mx-auto">Because theoretical advice is useless without practical execution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {[
              { title: 'Experienced Professionals', desc: 'Our team combines deep expertise in accounting, finance, audit, governance, risk management, and organizational development. We have seen it all.' },
              { title: 'Client-Focused Approach', desc: 'We do not believe in one-size-fits-all. We tailor our services specifically to your organization\'s unique needs, challenges, and long-term objectives.' },
              { title: 'Practical Solutions', desc: 'We deliver recommendations that are realistic, highly actionable, and profoundly results-oriented. We build strategies you can actually use.' },
              { title: 'Global Standards, Local Understanding', desc: 'We strictly apply international best practices while intimately recognizing the local realities and operating environments you face every day.' }
            ].map((reason, idx) => (
              <div key={idx} className="flex group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-light border border-gray-200 flex items-center justify-center text-primary group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-2xl font-bold font-serif text-primary mb-3">{reason.title}</h4>
                  <p className="text-primary/60 font-light leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
