import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h2 className="fw-bold text-white">Kangcep Digital</h2>
          </Col>
          <Col className="text-end">
            <a href="https://web.facebook.com/groups/932880677050546">
              <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
            <a href="https://www.instagram.com/kangcep_digital">
              <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
            <a href="https://t.me/kangcepdigital">
              <i class="fa-brands fa-telegram text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">&copy; Copyright by Kangcep Digital 2023, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
