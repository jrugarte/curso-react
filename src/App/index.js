import React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// creo un array de objetos:
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Terminar el curso de React", completed: false },
//   { text: "Editar video pa YouTube", completed: false },
//   { text: "Tener una fuente de ingresos pasivo", completed: false },
//   { text: "Cambiar el celu", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("Todos_V1");

// LocalStorage es una forma de almacenar datos en el navegador web, que persisten aún después de que el usuario haya cerrado la ventana o salido del sitio web. Es útil para guardar información del usuario, como preferencias, configuraciones, entre otros.
// LocalStorage no puede guardar estructuras complejas, por lo que va a guardar lo que le indiquemos como strings de eso mismo.
// Con JSON.stringify() podemos convertir otras cosas a strings, ejemplo, un array. y asi si poder guardarlo luego en localStorage.
// Para volver a obtener el valor original de lo que enviamos a localStorage, usamos la herramienta JSON.parse().
// .Guardar en localStorage:.stringify, leer de localStorage: .parse
// Entonces, cada vez que querramos guardar algo en localStorage, tenemos que stringifiarlo. y cada vez que querramos leer algo de localStorage, hay que parsearlo para volver a convertir ese string en algo de JS.
// Los métodos más comunes de LocalStorage son:
// .
// localStorage.setItem(key, value): Agrega un elemento con una clave y un valor al almacenamiento local.
// localStorage.getItem(key): Recupera el valor de la clave especificada en el almacenamiento local.
// localStorage.removeItem(key): Remueve un elemento del almacenamiento local según su clave.
// // localStorage.clear(): Borra todos los elementos del almacenamiento local.

function App() {
  //declaramos otro useState, para cambiar los estados de la prop completed y asi saber si estan completados o no
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //  lo que hace la siguiente linea es crear un array con dos valores: el primero va a ser una variable en donde se va a guardar la informacion que necesitemos, en este caso, los valores que escribamos en el input filter, y el segundo valor (setNombre) va a tener la funcion de un 'actualizador' de estado, esto debido a que estamos usando una funcion de react llamada 'useState', la cual nos da esta funcionalidad de cambiar el estado de una variable. Entonces, en resumen, la linea sirve para agregar una variable (searchValue) y luego ir cambiandole el valor con el (setSearchValue)
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    // creo una copia del array de los todos para luego poder indicar que objeto necesito marcar:
    const newTodos = [...todos];
    // creo una variable para buscar cual elemento tenemos que modificar. a traves de findIndex ubicamos el todo
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    // creo una copia del array de los todos para luego poder indicar que objeto necesito marcar:
    const newTodos = [...todos];
    // creo una variable para buscar cual elemento tenemos que modificar. a traves de findIndex ubicamos el todo que
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // estados derivados: son variables, propiedades, calculos que hacemos a partir de un estado... en este caso se van a derivar desde la funcion anterior hacia el todo counter

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
