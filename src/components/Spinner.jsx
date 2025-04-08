import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignItems: "center",
        fontSize: "40px",
      }}
    >
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default Spinner;
