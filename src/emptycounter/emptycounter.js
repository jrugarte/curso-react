import "./emptycounter.css";
import React from "react";
function EmptyCounter({ totalTodos, completedTodos }) {
  if (completedTodos === totalTodos) {
    return (
      <div className="empty-counter">
        <h1>No se encontró ninguna Tarea</h1>
      </div>
    );
  }
}

export { EmptyCounter };
