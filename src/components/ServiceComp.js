import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceComp = () => {
  return (
    <div className="services min-vh-70 d-flex align-items-center" id="service">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">
              Services
            </h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Berikut Layanan Terbaik Yang Bisa Kamu Dapatkan
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="400">
            <i class="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Untuk biaya sekelas mentoring privat yang sangat terjangkau.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="600">
            <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Fasilitas Terbaik</h5>
            <p>Banyak fasilitas terbaik yang bisa kamu dapatkan disini.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="800">
            <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5 className="fw-bold">Mentoring Privat</h5>
            <p>Kamu bisa tanya jawab langsung dengan mentor via Whatsapp.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="1000">
            <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Step By Step</h5>
            <p>Materi disiapkan dan disusun dalam kurikulum yang urut langkah demi langkah..</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="1200">
            <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5 className="fw-bold">Free Update</h5>
            <p>Materi disiapkan dan disusun dalam kurikulum yang urut langkah demi langkah..</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="1400">
            <i class="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Sekali Bayar</h5>
            <p>Materi disiapkan dan disusun dalam kurikulum yang urut langkah demi langkah..</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceComp;
