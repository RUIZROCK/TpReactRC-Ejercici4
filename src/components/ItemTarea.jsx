
import { ListGroup } from "react-bootstrap";
const ItemTarea = ({elemento}) => {

    return <ListGroup.Item className="d-flex justify-content-between">
        {elemento}<button className="btn btn-danger">Borrar</button>
        </ListGroup.Item>
}
export default ItemTarea; 