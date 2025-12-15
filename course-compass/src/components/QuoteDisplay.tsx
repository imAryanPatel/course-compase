import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

// Interface for the quote data structure
interface Quote {
  content: string;
  author: string;
}

/**
 * QuoteDisplay Component
 * Fetches and displays a motivational quote from public API
 */
const QuoteDisplay = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random quote from the API
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random?tags=inspirational|education|success");
        
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        
        const data = await response.json();
        setQuote({ content: data.content, author: data.author });
      } catch (error) {
        // Fallback quote if API fails
        setQuote({
          content: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
          author: "Malcolm X",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  // Show skeleton while loading
  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm">Loading inspiration...</span>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 max-w-2xl mx-auto">
      <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
      <p className="text-sm text-muted-foreground italic">
        "{quote?.content}" — <span className="font-medium">{quote?.author}</span>
      </p>
    </div>
  );
};

export default QuoteDisplay;
