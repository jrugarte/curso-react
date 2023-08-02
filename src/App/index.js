import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../todocontext/todocontext";

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
  return (
    // aca encapsulamos el componente general (AppUI) entre Provider para poder aplicarle las props luego.
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

// estados derivados: son variables, propiedades, calculos que hacemos a partir de un estado... en este caso se van a derivar desde la funcion anterior hacia el todo counter
