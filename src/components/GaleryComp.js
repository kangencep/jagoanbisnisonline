import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Gallery1 from "../assets/img/galery/gallery-1.jpg";
import Gallery2 from "../assets/img/galery/gallery-2.jpg";
import Gallery3 from "../assets/img/galery/gallery-3.jpg";
import Gallery4 from "../assets/img/galery/gallery-4.jpg";
import Gallery5 from "../assets/img/galery/gallery-5.jpg";
import Gallery6 from "../assets/img/galery/gallery-6.jpg";

const GaleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Gallery Kelas</h2>
            <p className="text-center">Kuasai Peluang Bisnis Online Di Tiktok dan Jagoan Affiliate</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Mentoring-tiktok" className="mx-2">
              <img src={Gallery1} alt="unsplash.com" className="w-100" data-aos="fade-up" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Mentoring-tiktok" className="mx-2">
              <img src={Gallery2} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="200" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Mentoring-tiktok" className="mx-2">
              <img src={Gallery3} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="400" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Jagoan-affiliate" className="mx-2">
              <img src={Gallery4} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="600" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Jagoan-affiliate" className="mx-2">
              <img src={Gallery5} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="800" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="https://bit.ly/Kelas-Jagoan-affiliate" className="mx-2">
              <img src={Gallery6} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1000" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GaleryComp;
