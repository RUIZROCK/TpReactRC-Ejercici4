
import { ListGroup } from "react-bootstrap";
const ItemTarea = ({elemento, btnborrar}) => {

    return <ListGroup.Item className="d-flex justify-content-between">
        {elemento}<button className="btn btn-danger" onClick={()=>btnborrar(elemento)}>Borrar</button>
        </ListGroup.Item>
}
export default ItemTarea; 