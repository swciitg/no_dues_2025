import React, { useState } from "react";
import search from '../assets/search.png'

const SearchBar = (props) => {
    const {onSearch} = props;
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      border: "1px solid #d1d5db",
      borderRadius: "20px",
      padding: "4px 12px",
      width: "90%",
      backgroundColor: "#fff",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    }}>
      <span style={{
    marginRight: "8px",
    fontSize: "1rem",
    color: "#6b7280",
    }}>
        <img src={search} alt=""/>
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        style={{ border: "none", outline: "none", flex: 1, fontSize: "0.9rem", color: "#374151", backgroundColor: "transparent",}}
      />
    </div>
  );
};

export default SearchBar;
