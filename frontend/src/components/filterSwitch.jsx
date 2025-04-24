import { motion } from "framer-motion";
import { useState } from "react";

const SwitchToggle=({onToggle})=> {
  const [isOn, setIsOn] = useState(false);

  const containerStyle = {
    width: "40px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    padding: "4px",
    borderRadius: "100px",
    cursor: "pointer",
    backgroundColor: isOn ? "#22c55e" : "#a1a1aa",
    transition: "background-color 0.3s ease"
  };

  const knobStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  };

  function toggle() {
    setIsOn(!isOn);
    onToggle(!isOn);
  }

  return (
      <div style={containerStyle} onClick={toggle}>
        <motion.div
          style={knobStyle}
          animate={{ x:isOn?24:0 }} 
          transition={{ duration:0.2, ease:"easeInOut" }}
        />
      </div>

  );
}

export default SwitchToggle
