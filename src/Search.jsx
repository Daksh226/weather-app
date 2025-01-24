import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);  // Call the onSearch function passed from App.jsx
      setCity("");  // Clear the input field after searching
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city state
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
