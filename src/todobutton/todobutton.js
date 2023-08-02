import "./button.css";
import React from "react";
function TodoButton({ setOpenModal }) {
  return (
    <div className="addButton">
      <button
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        ADD
      </button>
    </div>
  );
}
export { TodoButton };
