import { useState } from "react";

 const AdminCSVUploader=()=> {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BASE_URL}/dues/uploadCSV`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload success:", res.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const wrapperStyle = {
    display:'flex',
    backgroundColor:'#fff',
    gap:'20px',
    padding:'10px 130px',
    borderRadius:'20px',
    textAlign: "center",
    alignItems:'center'
    // marginTop: "3rem",
  };

  const messageStyle = {
    color: "#000",
    fontSize: "1.25rem",
    // marginBottom: "1.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#2164E8",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const hoverStyle = {
    backgroundColor: "#2164E8",
  };

  return (
    <div style={wrapperStyle}>
      <div style={messageStyle}>Upload the CSV of students with dues</div>

      {file ? (
        <button
          onClick={handleUpload}
          disabled={loading}
          style={{ ...buttonStyle, ...(loading ? {} : hoverStyle) }}
        >
           {loading ? "Uploading..." : "Upload"}
        </button>
      ) : (
        <label style={{ cursor: "pointer" }}>
          <div style={buttonStyle}>
             Upload Due CSV File
          </div>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
      )}
    </div>
  );
}

export default AdminCSVUploader
