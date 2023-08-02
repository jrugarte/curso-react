import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// ReactContext: se utiliza para compartir contextos(props, estados, etc) directamente con otros componentes hijos, sin necesidad de hacer prop drilling, es decir, sin necesidad de pasar las props a traves de cada componente tras otro(como un arbol y ramas). En este caso, creamos un archivo donde vamos a guardar todo el context que se comparta entre los componentes(localStorage, props, estados) y de aca vamos a derivarlo a traves de la funcion TodoProvider, al componente principal(App(index.js)) para que, ya que va a tener todas las props, se las va a poder ceder tambien a todos sus componentes hijos etc. Luego en el componente App vamos a encapsular el return entre <Provider>(proveedor de props y demas) para despues, en los demas componentes que necesiten esas props, las carguemos atraves de <Consumer> (como lo es en el caso de AppUI, en donde tenemos todo el detalle y ramificacion de la web y componentes.)
function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //  lo que hace la siguiente linea es crear un array con dos valores: el primero va a ser una variable en donde se va a guardar la informacion que necesitemos, en este caso, los valores que escribamos en el input filter, y el segundo valor (setNombre) va a tener la funcion de un 'actualizador' de estado, esto debido a que estamos usando una funcion de react llamada 'useState', la cual nos da esta funcionalidad de cambiar el estado de una variable. Entonces, en resumen, la linea sirve para agregar una variable (searchValue) y luego ir cambiandole el valor con el (setSearchValue):
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
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

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
