import Container from "react-bootstrap/Container";
import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer class="footer">
      <h2>Footer</h2>
      <Container>
        <Row></Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
