import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const JoinGroup = () => {
  return (
    <div className="group min-vh-70 d-flex align-items-center" id="group">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="text-center fw-bold">Join Group</h2>
            <p className="text-center mb-4">Dapatkan Panduan Bisnis Online dan Digital Marketing Free di Channel Telegram</p>
            <a href="https://t.me/kangcepdigital">
              <Button className="fw-semibold" variant="secondary">
                Join Sekarang
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JoinGroup;
