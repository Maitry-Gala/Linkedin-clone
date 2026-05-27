import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
  debounceMs?: number;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search...",
  debounceMs = 400,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, debounceMs);

    return () => clearInterval(timer);
  }, [query, debounceMs]);

  return (
    <div className="relative flex items-center w-full max-w-sm">
      <svg
        className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
      </svg>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="max-w-56 pl-9 pr-9 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 text-gray-400 hover:text-gray-600 transition align-center"
        >
          <X  className="w-3.5 h-3.5"/>
        </button>
      )}
    </div>
  );
}
