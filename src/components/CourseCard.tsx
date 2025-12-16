import { motion } from "framer-motion";
import { Clock, BookOpen, Star, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  image?: string;
  rating?: number;
  students?: number;
  modules: Array<{ title: string; topics: string[] }>;
  overview: string;
  prerequisites?: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
          {course.image ? (
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-hero to-primary/80 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-white/80" />
            </div>
          )}
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground font-medium">
              {course.category}
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-display font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
          {course.description}
        </p>
        
        {/* Rating and Students */}
        <div className="flex items-center gap-4 mb-4">
          {course.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-foreground">{course.rating}</span>
            </div>
          )}
          {course.students && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{course.students.toLocaleString()} students</span>
            </div>
          )}
        </div>
        
        {/* Course Meta */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules.length} modules</span>
          </div>
        </div>
        
        {/* Level Badge */}
        <div className="mb-4">
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            {course.level}
          </Badge>
        </div>
        
        {/* CTA Button */}
        <Link to={`/courses/${course.id}`} className="block">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
            View Course
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;