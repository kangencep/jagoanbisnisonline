import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col>
            <h1 className="text-white text-center mt-4 fs-1 animate__animated animate__fadeInUp">JAGO BISNIS ONLINE</h1>
            <p className="text-white text-center text-white-50 animate__animated animate__fadeInUp animate__delay-1s">Kuasai Peluang Bisnis Online Dirumah Sambil Rebahan Pake HP</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
