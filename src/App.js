import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Container
        style={{ width: "800px", background: "grey", marginTop: "50px" }}
      >
        <Row>
          <Header />
        </Row>
        <TodoForm />
     
        <Row>
          <TodoList />
        </Row>
      </Container>
    </>
  );
}

export default App;
