import "./todoform.css";
import React from "react";
import { TodoContext } from "../todocontext/todocontext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <div className="form-div">
      <form onSubmit={onSubmit}>
        <div className="label-div">
          <label>¡Escribe tu nueva Tarea!</label>
        </div>
        <textarea
          placeholder="Preparar los desayunos de la semana"
          value={newTodoValue}
          onChange={onChange}
          required
        ></textarea>
        <button type="button" className="cancelar" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="agregar">
          Agregar
        </button>
      </form>
    </div>
  );
}

export { TodoForm };
