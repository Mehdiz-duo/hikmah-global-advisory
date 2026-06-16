import { motion } from 'framer-motion';
import { Calculator, BarChart3, ShieldAlert, Users2, GraduationCap, Building } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Audit & Assurance',
      desc: 'Build absolute trust with your stakeholders. Our assurance services are designed to enhance transparency, guarantee accountability, and give you complete peace of mind.'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Accounting & Financial Management',
      desc: 'Don\'t let poor financial management hold your organization back. We provide comprehensive accounting solutions that help you maintain perfect records and build unbreakable financial systems.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Tax Advisory & Compliance',
      desc: 'Navigate the complex world of tax regulations effortlessly. We assist you in managing tax requirements while ensuring total compliance and maximum efficiency.'
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Risk Advisory & Governance',
      desc: 'See around corners and protect your assets. Our specialists support you in identifying, assessing, and thoroughly mitigating operational and financial risks.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Management Consulting',
      desc: 'Make the right decisions when it matters most. We partner with you to dramatically improve your operational performance and long-term strategic direction.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Corporate Advisory',
      desc: 'Expert guidance on corporate structuring, mergers, acquisitions, and strategic realignments to optimize your business framework.'
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Development Advisory',
      desc: 'Maximize your on-the-ground impact. Drawing on deep experience supporting donor-funded programs, we provide specialized advisory services built for the development sector.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Procurement & Supply Chain Advisory',
      desc: 'Optimize your sourcing, mitigate supply chain risks, and ensure transparent, efficient procurement processes.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Monitoring, Evaluation, Research & Learning',
      desc: 'Measure what matters. We build robust frameworks to track impact, ensure accountability, and foster continuous institutional learning.'
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Human Capital Advisory',
      desc: 'Your people are your greatest asset. We help you attract, retain, and develop the talent necessary to achieve your strategic goals.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Digital Transformation Advisory',
      desc: 'Modernize your operations. We guide you through the adoption of new technologies to increase efficiency and competitiveness.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Capacity Building & Professional Training',
      desc: 'Strong institutions are built by capable people. We believe in continuous learning, offering expert-led training to elevate your team\'s technical capabilities.'
    }
  ];

  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      <section className="bg-primary pt-40 pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Capabilities That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light italic">Scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We don't just offer services; we deliver specialized solutions designed to strengthen your governance, optimize your performance, and mitigate your risks. Each engagement is tailored exactly to your context and objectives.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-light p-10 border border-gray-100 hover:border-accent/40 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col h-full"
              >
                <div className="text-accent mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 leading-tight">{service.title}</h3>
                <p className="text-primary/70 font-light leading-relaxed mb-8 flex-grow">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
