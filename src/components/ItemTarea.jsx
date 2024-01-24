import { useState } from "react";
import { ListGroup } from "react-bootstrap";
const ItemTarea = () => {
const [lista , setTarea]= useState("");

    return <ListGroup.Item className="d-flex justify-content-between">
        Cras justo odio<button className="btn btn-danger">Borrar</button>
        </ListGroup.Item>
}
export default ItemTarea; 