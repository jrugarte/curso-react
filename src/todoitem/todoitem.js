import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./item.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        // en la siguiente clase, lo que hacemos entre ${} es preguntar si el objeto que renderizamos del array (en donde indicamos los TODO's) tiene la propiedad completed, es decir, si está listado como 'ya hecho' y de esta manera asignarle a traves de los && la classname "Icon-check--active" para aplicarle el css correspondiente(checked):
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <BsCheck2Square />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <RiDeleteBin5Line />
      </span>
    </li>
  );
}
export { TodoItem };
