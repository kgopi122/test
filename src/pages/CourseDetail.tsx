import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Users, Download, Play, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courses } from "@/data/courses";
import NotFound from "./NotFound";

const CourseDetail = () => {
  const { courseId } = useParams();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-hero to-primary/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/courses">
              <Button variant="outline" className="mb-8 border-white/30 bg-white/10 text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {course.level}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {course.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <BookOpen className="w-5 h-5" />
                <span>{course.modules.length} Modules</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5" />
                <span>{course.level}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div ref={ref} className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Demo Video */}
                {course.demoVideo && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                      Course Preview
                    </h2>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                      {!isPlaying ? (
                        <div className="relative aspect-video bg-gradient-to-br from-hero to-primary/80 flex items-center justify-center group cursor-pointer"
                          onClick={() => setIsPlaying(true)}
                        >
                          <div className="absolute inset-0 bg-black/30" />
                          <div className="relative z-10 flex flex-col items-center gap-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                              </div>
                            </div>
                            <span className="text-white font-medium text-lg">Watch Course Preview</span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video">
                          <iframe
                            src={`${course.demoVideo}?autoplay=1`}
                            title="Course Demo Video"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Course Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    What you'll learn
                  </h2>
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {course.overview}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.modules.slice(0, 6).map((module, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{module.title.replace(/^\d+\.\s*/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Course Modules */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Course Content
                  </h2>
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                    <div className="mb-4 text-sm text-muted-foreground">
                      {course.modules.length} sections • {course.modules.reduce((acc, module) => acc + module.topics.length, 0)} lectures • {course.duration} total length
                    </div>
                    <Accordion type="single" collapsible className="space-y-2">
                      {course.modules.map((module, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50"
                        >
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                            <div className="flex items-center justify-between w-full mr-4">
                              <span>{module.title}</span>
                              <span className="text-sm text-muted-foreground font-normal">
                                {module.topics.length} lectures
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <ul className="space-y-2 pl-4">
                              {module.topics.map((topic, topicIndex) => (
                                <li
                                  key={topicIndex}
                                  className="text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </motion.div>

                {/* Prerequisites */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                      Requirements
                    </h2>
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                      <ul className="space-y-3">
                        {course.prerequisites.map((prereq, index) => (
                          <li key={index} className="text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Course Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 shadow-lg mb-6"
                  >
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-foreground mb-2">Free</div>
                      <Button size="lg" className="w-full mb-4">
                        Enroll Now
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Content
                      </Button>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Modules:</span>
                        <span className="font-medium">{course.modules.length}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Trainer Information */}
                  {course.trainer && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-card rounded-2xl border border-border p-6 shadow-lg"
                    >
                      <h3 className="text-xl font-display font-bold text-foreground mb-4">
                        Instructor
                      </h3>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-white">
                            {course.trainer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {course.trainer.name}
                          </h4>
                          <p className="text-primary text-sm font-medium">{course.trainer.title}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Award className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{course.trainer.experience}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {course.trainer.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-medium text-foreground mb-2 text-sm">Expertise:</h5>
                        <div className="flex flex-wrap gap-1">
                          {course.trainer.expertise.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {course.trainer.certifications && (
                        <div>
                          <h5 className="font-medium text-foreground mb-2 text-sm">Certifications:</h5>
                          <ul className="space-y-1">
                            {course.trainer.certifications.slice(0, 2).map((cert, index) => (
                              <li key={index} className="text-muted-foreground text-xs flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;