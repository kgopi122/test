import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, MonitorPlay } from "lucide-react";

const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Preview
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Watch Our
              <span className="text-gradient"> Demo Class</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of our teaching methodology and the quality of content 
              you'll receive throughout the course.
            </p>
          </motion.div>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
          >
            {!isPlaying ? (
              <div className="relative aspect-video bg-gradient-to-br from-hero to-primary/80 flex items-center justify-center group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail overlay */}
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="text-white font-medium text-lg">Click to Play Demo</span>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-white/80">
                  <MonitorPlay className="w-5 h-5" />
                  <span className="text-sm font-medium">SAP ABAP Training Preview</span>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Live Classes", description: "Interactive sessions with Q&A" },
              { title: "Recorded Sessions", description: "Access recordings anytime" },
              { title: "Practical Labs", description: "Hands-on SAP system access" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
