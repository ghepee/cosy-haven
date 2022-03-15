import React from "react";
import "./services.css";
import glass from "../../images/glass.png";
import { Container, Row, Col } from "react-grid-system";
const services = () => {
  return (
    <div>
      <section className="services__section-top">
        <Container className="contact__section-top-container">
          <Row>
            <Col
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4 className="text__header">
                Say goodbye to frequent house repairs forever
              </h4>
              <br />
              <p className="text__body">
                Home remodelling executed by professionals
              </p>
              <div
                style={{
                  // padding: '150px 0px',
                  backgroud:
                    "linear-gradient(180deg, #F6AB0E 0%, #F6AB0E 50%, #C84016 100%)",
                }}
              >
                {/* <a href="#contact" className='btn btn-primary' style={{width: '388px',
                height:'82px',
                left: '112px',
                top: '712px',}}>I want an easy life</a> */}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "388px",
                    height: "82px",
                    left: "112px",
                    top: "712px",
                    marginTop: "25px",
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontFamily: "Roboto",
                      fontSize: "18px",
                    }}
                  >
                    I want an easy life
                  </a>{" "}
                </button>
              </div>
            </Col>
            <Col>
              <img src={glass} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services1__section-top">
        <Container className="contact__section-top-container">
          <Row>
            <Col
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4 className="text__header" style={{ color: "#063863", fontSize: '50px' }}>
                Home Remodelling Services
              </h4>
            </Col>
            <Col>
              <ul className="service_list1">
                <li>Hardwood flooring</li>
                <li>Tiling</li>
                <li>Painting</li>
                <li>Plumbing</li>
                <li>Electrician</li>
                <li>Capentry</li>
                <li>Wall Screeding</li>
                <li>POP Installation</li>
                <li>Bricklaying</li>
                <li>Gardening/Landscaping</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services2__section-top">
        <Container className="contact__section-top-container">
          <Row>
            <Col
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4 className="text__header" style={{ color: "#ffffff", fontSize: '50px' }}>Other Services</h4>
              <br />
            </Col>
            <Col>
              <ul className="service_list2">
                <li>Air Conditioning (Installation & Servicing)</li>
                <li>Deep & Surface cleaning</li>
                <li>Upholstery Cleaning</li>
                <li>Kitchen Remodelling</li>
                <li>Bathroom Remodelling</li>
                <li>Fumigation Services</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default services;
