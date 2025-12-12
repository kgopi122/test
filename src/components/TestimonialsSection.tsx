import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "SAP ABAP Consultant",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The training at Nexk Soft completely transformed my career. Abdul sir's practical approach and real-time project exposure helped me land my dream job at a top MNC.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "Best SAP ABAP training I've ever attended. The curriculum is comprehensive and the instructor's 10+ years of experience really shows in the quality of teaching.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "SAP Technical Lead",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "Even being in a different timezone, the flexible class timings made it easy to attend. The recorded sessions were a lifesaver for revision.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "ABAP Developer",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "From zero programming knowledge to becoming an ABAP developer in 3 months. Nexk Soft's structured approach made it possible.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              What Our
              <span className="text-gradient"> Students Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from the professionals 
              who transformed their careers with Nexk Soft.
            </p>
          </motion.div>

          {/* Testimonial carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              <div className="min-h-[200px] flex flex-col justify-between">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
