import { motion } from 'framer-motion';
import { BookOpen, FileText, TrendingUp, Lightbulb } from 'lucide-react';

export default function Insights() {
  const articles = [
    { title: 'The Future of Donor Compliance in East Africa', category: 'Compliance', date: 'June 2026', readTime: '5 min read' },
    { title: 'Optimizing Financial Management for NGOs', category: 'Financial Management', date: 'May 2026', readTime: '8 min read' },
    { title: 'Navigating New Tax Regulations in the Public Sector', category: 'Tax Advisory', date: 'April 2026', readTime: '6 min read' },
    { title: 'Risk Management Frameworks for Emerging Markets', category: 'Risk Advisory', date: 'March 2026', readTime: '10 min read' },
  ];

  return (
    <div className="flex flex-col bg-light min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none bg-noise z-50"></div>

      <section className="bg-primary pt-40 pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Knowledge Hub</h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6"
          >
            Insights & <span className="text-accent italic">Resources.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We regularly publish insights, technical updates, thought leadership articles, and practical guidance on accounting, auditing, taxation, governance, procurement, risk management, and organizational effectiveness.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-light p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <BookOpen className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">Technical Updates</h3>
              <p className="text-primary/60 text-sm">Stay ahead of regulatory changes.</p>
            </div>
            <div className="bg-light p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">Thought Leadership</h3>
              <p className="text-primary/60 text-sm">Expert opinions on industry trends.</p>
            </div>
            <div className="bg-light p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <FileText className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">Practical Guides</h3>
              <p className="text-primary/60 text-sm">Actionable frameworks for your team.</p>
            </div>
            <div className="bg-light p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif font-bold text-primary text-xl mb-2">Market Reports</h3>
              <p className="text-primary/60 text-sm">Deep dives into regional economics.</p>
            </div>
          </div>

          <h3 className="text-3xl font-serif font-bold text-primary mb-8">Latest Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">{article.category}</span>
                  <span className="text-primary/40 text-xs font-medium">{article.readTime}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{article.title}</h4>
                <div className="flex items-center text-primary/60 text-sm">
                  <span>Published {article.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
