import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaTareas from "./components/ListaTareas";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Container className="mainContainer">
        <h1 className="display-3 my-3 text-center text-light">
          Lista de Tareas
        </h1>
        <ListaTareas></ListaTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
