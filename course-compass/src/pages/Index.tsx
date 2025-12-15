import { useState, useEffect, useMemo } from "react";
import { GraduationCap } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CourseList from "@/components/CourseList";
import QuoteDisplay from "@/components/QuoteDisplay";
import { courses } from "@/data/courses";

/**
 * Index Page - Main Course Finder Application
 * Displays searchable course catalog with motivational quote
 */
const Index = () => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter courses based on search term (name or category)
  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) return courses;
    
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-card border-b border-border">
        <div className="container py-8 md:py-12">
          {/* Logo and Title */}
          <div
            className={`flex items-center justify-center gap-3 mb-4 transition-all duration-500 
                       ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-soft">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Course<span className="text-gradient">Finder</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-center text-muted-foreground mb-6 transition-all duration-500 delay-100
                       ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Discover your next learning adventure
          </p>

          {/* Search Bar */}
          <div
            className={`transition-all duration-500 delay-200
                       ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Motivational Quote */}
        <div
          className={`mb-8 text-center transition-all duration-500 delay-300
                     ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <QuoteDisplay />
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredCourses.length}</span> course
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Course Grid */}
        <CourseList courses={filteredCourses} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CourseFinder — Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default Index;
