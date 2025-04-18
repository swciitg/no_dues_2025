import React, { useState } from "react";
import filter from  '../assets/filter.png'

const FilterButton = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => setShowDialog(!showDialog);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={toggleDialog} style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        borderRadius: "20px",
        margin:"0px 0px 0px 20px",
        backgroundColor: "#fff",
        border: "none",
        boxShadow: "0 0px 4px rgba(0, 0, 0, 0.32)",
        cursor: "pointer",
        color: "#2164E", 
        fontSize: "16px",
        fontWeight: "500",
    }}>
        <img src={filter} alt=""/>
        Filter
      </button>

      {showDialog && (
        <div style={{
            position: "absolute",
            top: "60px",
            right: "0px",
            padding: "10px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}>
          <p>Filter options coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
