import CourseCard from "./CourseCard";
import type { Course } from "@/data/courses";

// Props interface for CourseList component
interface CourseListProps {
  courses: Course[];
}

/**
 * CourseList Component
 * Renders a responsive grid of CourseCard components
 */
const CourseList = ({ courses }: CourseListProps) => {
  // Show message when no courses match the search
  if (courses.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <p className="text-muted-foreground text-lg">
          No courses found matching your search.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Try a different keyword or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
};

export default CourseList;
