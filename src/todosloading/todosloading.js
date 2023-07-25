import React from "react";
import "./todosloading.css";

function TodosLoading() {
  return (
    <div className="Loading-container">
      <span className={`Loading-check`}></span>
      <p className={`Loading-p`}></p>
      <span className="Loading-delete"></span>
    </div>
  );
}
export { TodosLoading };
