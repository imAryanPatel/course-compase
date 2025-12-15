import { Search } from "lucide-react";

// Props interface for SearchBar component
interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

/**
 * SearchBar Component
 * Renders a search input field with an icon for filtering courses
 */
const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search icon positioned inside the input */}
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search courses by name or category..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full h-12 pl-12 pr-4 rounded-lg bg-card border border-border 
                   text-foreground placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                   transition-all duration-200 shadow-card"
      />
    </div>
  );
};

export default SearchBar;
