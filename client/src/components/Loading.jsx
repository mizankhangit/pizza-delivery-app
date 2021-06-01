import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div
        style={{ width: "80px", height: "80px" }}
        className="spinner-border text-primary "
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
