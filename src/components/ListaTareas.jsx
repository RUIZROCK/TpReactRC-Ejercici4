import Form from 'react-bootstrap/Form';
const ListaTareas = () => {
  return (
    <div>
    <Form>
      <Form.Group className="my-3 d-flex justify-content-center" controlId="tareaForm">
        <Form.Control type="text" placeholder="Ej: Tarea 1" />
        <button className='btn btn-success mx-3' type="submit">Agregar</button>
      </Form.Group>
    </Form>

      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tarea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ListaTareas;
