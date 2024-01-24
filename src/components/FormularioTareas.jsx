import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState , useEffect } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage= JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [arrayTareas, setArrayTareas] = useState(tareasLocalStorage);

  //useEffect se utiliza en el montaje y por cada carga de tareas se usa en la actualizacion de la lista
  useEffect(()=>{ // con useEffect haremos la carga de la lista de tareas en el localStorage
    localStorage.setItem('listaTareas',JSON.stringify(arrayTareas));
  },[arrayTareas])

  const handleSubmit = (e) => {
    //para que se pueda guardar el state desde el boton a traves del evento submit
    e.preventDefault();

    //operador spread [...array,elemento]
    setArrayTareas([...arrayTareas, tarea]); //realiza el push en el array guardando la ultima tarea agregada

    //limpiar form
    setTarea("");
  };

  const borrarTarea = (nombreTarea) =>{ //trabajamos con splice para poder generar la eliminacion de una tarea x
    const arrayFilter=arrayTareas.filter((elementoTarea)=>elementoTarea!==nombreTarea);
    setArrayTareas(arrayFilter);
  }

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
      <ListaTareas tareas={arrayTareas} borrar={borrarTarea}></ListaTareas>
    </div>
  );
};
export default FormularioTareas;
