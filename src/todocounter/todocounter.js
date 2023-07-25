import "./counter.css";
import React from "react";
function TodoCounter({ totalTodos, completedTodos }) {
  if (completedTodos < totalTodos) {
    return (
      <div className="counter">
        <h1>
          Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
          TODO's
        </h1>
      </div>
    );
  } else if ((completedTodos = totalTodos)) {
    return (
      <div className="counter">
        <h1>COMPLETASTE TODOS LOS TODOOOOO'S</h1>
      </div>
    );
  }
}

export { TodoCounter };
