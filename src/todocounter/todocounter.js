import { TodoContext } from "../todocontext/todocontext";
import "./counter.css";
import React from "react";
function TodoCounter() {
  // En la siguiente linea usamos el useContext para reemplazar el context.Consumer. De esta manera simplemente traemos entre const{} las props que vayamos a utilizar y en useContext(ACA!!!) vamos a indicar de que contexto lo vamos a traer.
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  if (completedTodos < totalTodos) {
    return (
      <div className="counter">
        <h1>
          Completaste <span>{completedTodos}</span> Tareas de{" "}
          <span>{totalTodos}</span>{" "}
        </h1>
      </div>
    );
  } else if (completedTodos === totalTodos) {
    return (
      <div className="counter">
        <h1>COMPLETASTE TODAS LAS TAREASSSS</h1>
      </div>
    );
  }
}

export { TodoCounter };
