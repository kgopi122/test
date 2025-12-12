import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CheckCircle2, 
  Code, 
  Briefcase, 
  FileCheck, 
  Globe2, 
  UserCheck,
  Zap,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: Code,
    title: "100% Practical Training",
    description: "Hands-on coding from day one with real SAP systems",
  },
  {
    icon: Briefcase,
    title: "Real-Time Project Exposure",
    description: "Work on industry projects that mirror actual corporate scenarios",
  },
  {
    icon: FileCheck,
    title: "Industry-Level Assignments",
    description: "Challenging assignments designed by industry experts",
  },
  {
    icon: Globe2,
    title: "Indian & International Students",
    description: "Flexible timings suitable for global participants",
  },
  {
    icon: UserCheck,
    title: "10+ Years Experienced Instructor",
    description: "Learn from Abdul Khadeer, a seasoned SAP professional",
  },
  {
    icon: Zap,
    title: "Job-Ready Skills",
    description: "Curriculum aligned with current market requirements",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              What Makes
              <span className="text-gradient"> Nexk Soft Different</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just teach SAP ABAP — we transform careers with 
              industry-relevant skills and personalized mentorship.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative check */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">
                Join 500+ successful SAP professionals trained by Nexk Soft
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
