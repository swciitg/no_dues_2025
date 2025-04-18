import React from "react";

const DueCard = (props) => {

  const {title, approvedCnt, total, pendingCnt ,color} = props; 

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px",
      borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      backgroundColor: "#fff", position: "relative" }}>

      <div style={{display: "flex",flexDirection: "column",alignItems:'flex-start'}}>
        <div style={{fontSize: "1.4rem", fontWeight: "600", color: "#1E2532", marginBottom: "4px",}}>{title}</div>
        <div style={{ fontSize: "1rem",color: "#787878"}}>{approvedCnt} approved</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end",marginRight:'10px'}}>
        {/* <div style={{ fontSize: "1rem", color: "#787878", }}>Total</div>
        <div style={{ fontSize: "1.1rem", fontWeight: "600", color: "#439F15",  marginBottom: "4px" }}>₹ {total}</div> */}
        <div style={{  fontSize: "1rem",  color: "#787878" }}>{pendingCnt} dues pending</div>
      </div>

      <div style={{ position: "absolute", top: "0", right: "0",  width: "15px", height: "100%",
        backgroundColor: color, borderTopRightRadius: "12px", borderBottomRightRadius: "12px",}}></div>

    </div>
  );
};

export default DueCard;
