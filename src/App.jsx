import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioTareas from "./components/FormularioTareas";
function App() {
  return (
    <>
      <Container className="mainContainer">
        <h1 className="display-3 my-3 text-center text-light">
          Lista de Tareas
        </h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
