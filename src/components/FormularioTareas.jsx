import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = (e) => {
    //para que se pueda guardar el state desde el boton a traves del evento submit
    e.preventDefault();
    //operador spread [...array,elemento]
    setArrayTareas([...arrayTareas, tarea]); //realiza el push en el array guardando la ultima tarea agregada
    //limpiar form
    setTarea("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="my-3 d-flex justify-content-center"
          controlId="tareaForm"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className="btn btn-success mx-2" type="submit">
            Agregar
          </button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={arrayTareas}></ListaTareas>
    </div>
  );
};
export default FormularioTareas;
