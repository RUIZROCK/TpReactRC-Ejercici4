import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas,borrar}) => {
  return (
    <div>
      <ListGroup>
        {tareas.map((element, posicion) => (
          <ItemTarea key={posicion} elemento={element} btnborrar={borrar}></ItemTarea>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
