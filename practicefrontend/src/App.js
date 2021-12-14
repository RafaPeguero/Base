
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { FreestylersPage } from './freestylers/FreestylersPage';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Prueba técnica</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Entidad</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <Container>
      <FreestylersPage />
      </Container>
    </Provider>

  );
}

export default App;
