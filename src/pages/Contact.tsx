import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      <section className="bg-primary pt-40 pb-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Start the <span className="text-accent italic">Conversation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Whether you are facing an urgent governance challenge or planning long-term growth, our team is ready to partner with you.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">Reach Out Today.</h2>
              <p className="text-primary/70 font-light text-lg mb-12">We respond to all inquiries with the urgency and professionalism your organization deserves.</p>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="bg-light p-4 rounded-xl text-accent mr-6 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">Head Office</h3>
                    <p className="text-primary/70 font-light">Kismayo, Somalia</p>
                    <p className="text-accent text-sm mt-2 font-semibold uppercase tracking-wider">Regional Coverage: East Africa & Horn of Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-light p-4 rounded-xl text-accent mr-6 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">Direct Email</h3>
                    <a href="mailto:info@hikmahglobaladvisory.com" className="text-primary/70 font-light hover:text-accent transition-colors">info@hikmahglobaladvisory.com</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-light p-4 rounded-xl text-accent mr-6 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">Website</h3>
                    <a href="http://www.hikmahglobaladvisory.com" target="_blank" rel="noreferrer" className="text-primary/70 font-light hover:text-accent transition-colors">www.hikmahglobaladvisory.com</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 p-8 bg-light rounded-2xl border border-gray-100">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Careers</h3>
                <p className="text-primary/70 text-sm font-light leading-relaxed mb-4">
                  We believe our people are our greatest asset. We seek talented professionals who share our commitment to excellence, integrity, and continuous learning.
                </p>
                <p className="text-primary/70 text-sm font-light leading-relaxed mb-6">
                  Whether you are an experienced professional or an emerging leader, Hikmah Global Advisory LLP provides opportunities for growth, professional development, and meaningful impact.
                </p>
                <a href="mailto:admin@hikmahglobaladvisory.com" className="inline-block border-b-2 border-accent pb-1 text-primary font-bold hover:text-accent transition-colors">Send us your CV &rarr;</a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-primary p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full pointer-events-none"></div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8 relative z-10">Send us a direct message</h2>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-light focus:outline-none focus:border-accent focus:bg-white/10 transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2 uppercase tracking-wider">Email Address</label>
                      <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-light focus:outline-none focus:border-accent focus:bg-white/10 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-light/80 mb-2 uppercase tracking-wider">Subject</label>
                    <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-light focus:outline-none focus:border-accent focus:bg-white/10 transition-all" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-light focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-primary font-bold py-5 rounded-xl text-lg hover:bg-white transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(202,138,4,0.3)]">
                    Submit Message
                  </button>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
