import { TodoCounter } from "../todocounter/todocounter";
import { TodoInput } from "../todoinput/todoinput.js";
import { TodoList } from "../todolist/todolist.js";
import { TodoItem } from "../todoitem/todoitem.js";
import { TodoButton } from "../todobutton/todobutton";
import { TodosError } from "../todoserror/todoserror.js";
import { TodosLoading } from "../todosloading/todosloading.js";
import { EmptyTodos } from "../emptytodos/emptytodos";
import { CounterLoading } from "../counterloading/counterloading";
import { InputLoading } from "../inputloading/inputloading.js";
import { EmptyCounter } from "../emptycounter/emptycounter";
import React from "react";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      {/* En los componentes, podemos pasarle props como si fueran atributos, para que funcionen como parametros en cada funcion, como en el siguiente caso:  */}
      {/* <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} /> */}
      {loading && (
        <React.Fragment>
          <CounterLoading />
        </React.Fragment>
      )}
      {!loading && searchedTodos.length === 0 && <EmptyCounter />}
      {!loading && searchedTodos.length > 0 && (
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      )}

      {/* en la siguiente linea declaro las propiedades y le asigno el estado y el actualizador(setState) del estado a las mismas para despues pasarla como props al componente hijo (TodoInput) */}
      {/* <TodoInput searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      {loading && (
        <React.Fragment>
          <InputLoading />
        </React.Fragment>
      )}
      {!loading && (
        <TodoInput searchValue={searchValue} setSearchValue={setSearchValue} />
      )}

      <TodoList>
        {loading && (
          <React.Fragment>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </React.Fragment>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {/* Aca vamos a renderizar el array: por cada objeto */}
        {/* El metodo .map crea un array a partir del array inicial: en este map va a recibir un 'todo' por cada objeto dentro del array, por lo que va a devolver un <TodoItem/> por cada 'todo' dentro    del array: */}{" "}
        {searchedTodos.map((todo) => (
          // Lo que hacemos aca es agregarle propiedades(key, text, completed) y asociarlas a cada prop de los objetos del array:
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButton />
    </React.Fragment>
  );
}
export { AppUI };
