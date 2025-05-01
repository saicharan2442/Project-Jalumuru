import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  // Dummy data – replace with real filtering later
  const allData = ["Temple A", "Donor B", "Event C", "Ebook D", "Temple E"];

  useEffect(() => {
    const results = allData.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchQuery]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gold-dark mb-4">
        Search Results for: <span className="text-black">"{searchQuery}"</span>
      </h2>

      {filteredResults.length > 0 ? (
        <ul className="space-y-2">
          {filteredResults.map((item, index) => (
            <li key={index} className="bg-temple-cream p-3 rounded shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
