import { BookOpen } from "lucide-react";
import type { Course } from "@/data/courses";

// Props interface for CourseCard component
interface CourseCardProps {
  course: Course;
  index: number;
}

// Category color mapping for visual distinction
const categoryColors: Record<string, string> = {
  "Web Development": "bg-primary/10 text-primary",
  "Programming": "bg-accent/10 text-accent",
  "Design": "bg-pink-100 text-pink-600",
  "Data Science": "bg-emerald-100 text-emerald-600",
  "Marketing": "bg-orange-100 text-orange-600",
  "Mobile": "bg-violet-100 text-violet-600",
  "Cloud": "bg-sky-100 text-sky-600",
  "Security": "bg-red-100 text-red-600",
};

/**
 * CourseCard Component
 * Displays individual course information with animation on mount
 */
const CourseCard = ({ course, index }: CourseCardProps) => {
  // Get category-specific styling or default
  const categoryStyle = categoryColors[course.category] || "bg-secondary text-secondary-foreground";

  return (
    <article
      className="group bg-card rounded-lg border border-border p-5 shadow-card
                 hover:shadow-card-hover hover:border-primary/20
                 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Card header with icon and category badge */}
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-md bg-primary/10 text-primary">
          <BookOpen className="h-5 w-5" />
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryStyle}`}>
          {course.category}
        </span>
      </div>

      {/* Course name */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {course.name}
      </h3>

      {/* Course description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {course.description}
      </p>
    </article>
  );
};

export default CourseCard;
