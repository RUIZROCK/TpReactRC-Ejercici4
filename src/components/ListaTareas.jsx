import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ListGroup>
        {props.tareas.map((element, posicion) => (
          <ItemTarea key={posicion} elemento={element}></ItemTarea>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
