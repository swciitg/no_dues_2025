import React from "react";
import ExternalLinkIcon from '../assets/externalLink.png'
import MailIcon from '../assets/mail.png' 

const MailedQueries = ({ queries }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "20px",
        borderRadius: "20px",
        width: "400px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: "16px",
        }}
      >
        Mailed Queries
      </div>

      {queries.map((q, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "14px",
            color: "#111827",
          }}
        >
          <span
            style={{
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={q.text}
          >
            {q.text}
          </span>
          {q.mail ? (
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                color: "#2563eb",
                cursor: "pointer",
              }}
            >
              <MailIcon /> Open Mail
            </button>
          ) : (
            <ExternalLinkIcon />
          )}
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 16px",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
            color: "#2563eb",
            cursor: "pointer",
          }}
        >
          <MailIcon /> View All Mails
        </button>
      </div>
    </div>
  );
};

export default MailedQueries;
