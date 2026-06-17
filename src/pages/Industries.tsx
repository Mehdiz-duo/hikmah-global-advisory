import { motion } from 'framer-motion';
import { Heart, Landmark, Briefcase, GraduationCap, Building2, Globe2, Activity, Stethoscope } from 'lucide-react';
import Seo from '../components/Seo';

export default function Industries() {
  const industries = [
    { icon: <Landmark className="h-8 w-8" />, name: 'Government & Public Sector', desc: 'Strengthening public sector governance and accountability.' },
    { icon: <Heart className="h-8 w-8" />, name: 'Development & Humanitarian Organizations', desc: 'Ensuring your funds maximize impact on the ground.' },
    { icon: <Activity className="h-8 w-8" />, name: 'Financial Services', desc: 'Ensuring regulatory compliance in highly audited sectors.' },
    { icon: <Building2 className="h-8 w-8" />, name: 'Infrastructure & Construction', desc: 'Managing complex project finances and risk frameworks.' },
    { icon: <GraduationCap className="h-8 w-8" />, name: 'Education', desc: 'Building sustainable financial models for educational institutions.' },
    { icon: <Stethoscope className="h-8 w-8" />, name: 'Health', desc: 'Managing specialized healthcare compliance and funding.' },
    { icon: <Globe2 className="h-8 w-8" />, name: 'Agriculture & Rural Development', desc: 'Supporting sustainable growth in developing regions.' },
    { icon: <Briefcase className="h-8 w-8" />, name: 'Private Sector Enterprises', desc: 'Unlocking growth and scaling operations seamlessly.' },
  ];

  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <Seo
        title="Industries We Serve"
        description="Hikmah Global Advisory LLP serves government, development and humanitarian organizations, financial services, education, health, agriculture, and private enterprises across East Africa."
        path="/industries"
      />
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      <section className="bg-primary pt-40 pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Who We Serve</h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Global Standards. <br/><span className="text-accent italic">Local Realities.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don't apply theoretical templates. We intimately understand the specific pressures, regulations, and environments of the exact sector you operate in.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-8 rounded-2xl bg-light border border-gray-100 hover:bg-primary transition-all duration-500 cursor-pointer h-full flex flex-col"
              >
                <div className="text-primary mb-6 bg-white p-4 rounded-xl shadow-sm w-16 h-16 flex justify-center items-center group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  {ind.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3 group-hover:text-white transition-colors duration-500">{ind.name}</h3>
                <p className="text-primary/60 font-light group-hover:text-light/70 transition-colors duration-500 flex-grow">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
