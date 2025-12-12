import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe, Users, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Grade Training",
    description: "Learn SAP ABAP with real-world scenarios and hands-on projects",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving students from India, USA, and 15+ countries worldwide",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Guidance from instructors with 10+ years of SAP experience",
  },
  {
    icon: Award,
    title: "Career-Focused",
    description: "Curriculum designed to meet current industry requirements",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
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
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Transforming Careers Through
              <span className="text-gradient"> SAP Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nexk Soft provides industry-grade SAP ABAP training with real-time project 
              exposure for both Indian and international learners. Our comprehensive 
              curriculum is designed to transform beginners into job-ready SAP professionals.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ready to Start Your SAP Journey?
                </h3>
                <p className="text-muted-foreground">
                  Join our comprehensive 70-hour program and become a certified SAP ABAP professional.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
