import "./input.css";
import React from "react";

// en la funcion le paso las ({props}) del setState que se encuentra en la funcion app(componente padre):
function TodoInput({ searchValue, setSearchValue }) {
  return (
    <div className="filter">
      <input
        placeholder="Filtrar TODO's"
        value={searchValue}
        // la propiedad onChange recibe dentro de llaves una funcion la cual va a hacer lo que necesitemos, en este caso mostrar por consola que escribimos algo. Luego, a partir del parametro (event)(2), nos va a mostrar mas informacion que nos puede servir para luego usar esa info en distintos casos, como lo sera en el siguiente(3), el cual va a usar la propiedad event.target, que hace referencia al elemento html desde el cual se disparó el evento(en este caso el input... [event.target=input]), o sea que event.target nos va a devolver el elemento que usamos y su info. Es asi que, si necesitamos saber cual es el contenido que se ingresa en el input, vamos a usar la propiedad event.target.value y asi luego usarla(4)[event.target.value=input.value]
        onChange={(event) => {
          setSearchValue(event.target.value); //(4)
        }}
      />
    </div>
  );
}

export { TodoInput };
