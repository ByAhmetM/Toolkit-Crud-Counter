import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Toolkit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="gap-4  justify-content-end">
          <NavLink className="btn btn-danger" to={"/"}>
            Crud
          </NavLink>
          <NavLink className="btn btn-success " to={"/sayac"}>
            Counter
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
