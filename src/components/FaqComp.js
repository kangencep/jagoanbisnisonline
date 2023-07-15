import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">
              Yang Biasa Di Tanyakan{" "}
            </h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Ini adalah hal-hal yang sering banyak ditanyakan oleh calon peserta.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2  row-cols-1">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bagaimana Cara Belajarnya ?</Accordion.Header>
                <Accordion.Body>Belajarnya dengan materi video step by step yang bisa di akses di member area website.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="500">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Apakah Bisa Konsultasinya Privat ?</Accordion.Header>
                <Accordion.Body>Ya dibimbing privat, kamu bisa tanya jawab langsung japri ke mentor melalui whatsapp.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Apakah Materinya Terstruktur ?</Accordion.Header>
                <Accordion.Body>Ya Materi yang disiapkan dan disusun dalam kurikulum yang urut langkah demi langkah. Pasti mudah dipahami.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="700">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Apakah Materinya Free Update ?</Accordion.Header>
                <Accordion.Body>Ilmu Bisnis Online itu dinamis. Dengan membeli Kelas Jagoan Ngiklan maka member berhak mendapat Update materi seumur hidup.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Apakah Sekali Bayar Saja ?</Accordion.Header>
                <Accordion.Body>Cukup bayar sekali untuk bergabung dengan kelasnya. Tidak ada biaya tambahan. Semua Materi ALL IN.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="900">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Apakah Garansi Uang Kembali ?</Accordion.Header>
                <Accordion.Body>Jika dalam 1 bulan sudah praktek sesuai materi dan tidak ada hasilnya. Silakan mengajukan Refund. Kami kembalikan biayanya 100% tanpa ribet!</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
