import React from "react";
import { useLocation } from "react-router";
// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation">
        <Container>
          <Navbar.Brand href="/" id="logo">
            Chichén Itzá
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" activeKey={location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/history">History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/map">Map</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
