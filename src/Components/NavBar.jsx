import { img } from "framer-motion/m";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import TypesServices from "../Services/TypesServices";
import { useEffect, useState } from "react";
import logo from "../img/InternationalPokemonLogo.svg.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);

  const Filtre = async () => {
    try {
      const response = await TypesServices.getPokemonType();
      setTypes(response.data.results);
    } catch (error) {
      console.error("Erreur lors de la récupération des types :", error);
    }
  };

  useEffect(() => {
    Filtre();
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={logo}></img>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#Details">Détails</Nav.Link>
            <Link to={"/details"}></Link>

            <NavDropdown title="Types" id="basic-nav-dropdown">
              {types.map((type, index) => (
                <NavDropdown.Item key={index} href={`/types/${type.name}`}>
                  {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
