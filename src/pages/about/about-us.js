import React from "react";
import "../../App.css";
import "./about.css";
import capentry1 from "../../images/capentry1.png";
import capentry2 from "../../images/capentry2.png";
import bricklaying from "../../images/bricklaying.png";
import hardwood from "../../images/hardwood.png";
import bathroom from "../../images/bathroom.png";
import painting from "../../images/painting.png";
import pop from "../../images/pop.png";
import wallScreeding from "../../images/wall_screeding.png";
import deep_and_surface from "../../images/deep_and_surface_cleaning.png";
import { Container, Row, Col } from "react-grid-system";

const About = () => {
  return (
    <div>
      <section className="about__section-top">
        <div class="about__section-top-container">
          <div className="row">
            <div className="text__column">
              <p>
                We know that ease and comfort is important for our clients,
                hence we provide every professional skilled on major aspects of
                home remodelling. Our clients relax while we do the work.
              </p>
            </div>
            <div class="image__column">
              <img src={capentry1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about__services-section">
        <Container
          className="about__service-container"
          style={{
            margin: "0px 150px",
            justifyContent: " stretch",
          }}
        >
          <Row justify="between" debug className="service__items">
            <Col xs={3} className="col" style={{}}>
              <img src={bricklaying} alt="" />
              <p className="services__label">Bricklaying</p>
            </Col>
            <Col xs={3}>
              <img src={hardwood} alt="" />
              <p className="services__label">Hardwood Installation</p>
            </Col>
            <Col xs={3}>
              <img src={capentry2} alt="" />
              <p className="services__label">Capentry</p>
            </Col>
          </Row>
          <Row justify="between" debug>
            <Col xs={3}>
              <img src={bathroom} alt="" />
              <p className="services__label">Bathroom Remodelling</p>
            </Col>
            <Col xs={3}>
              <img src={painting} alt="" />
              <p className="services__label">Painting</p>
            </Col>
            <Col xs={3}>
              <img src={pop} alt="" />
              <p className="services__label">POP Ceiling installation</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about__section-mission">
        <div class="about__section-mission-container">
          <div class="row">
            <div className="mission__text__column">
              <h5>Our Company Mission</h5>
              <p>
                With Cosy Haven, our goal to provide exceptional service to
                homeowners and property owners that require general repairs,
                restoration, or remodelling services. We strive to provide the
                highest quality workmanship and use quality materials on all out
                projects, both large and small projects. Integrity and
                professionalism are at the core of everything that we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container fluid>
          <Row justify="between" style={{
            padding: '50px'
          }}>
            <Col xs={3}>
            <img src={deep_and_surface} alt="" />
              <p className="services__label">Deep & Surface cleaning</p>
            </Col>
            <Col xs={3}>
            <img src={wallScreeding} alt="" />
              <p className="services__label">Wall Screeding</p>
            </Col>
            <Col xs={4} style={{
              marginTop: '50px'
            }}>
            <h5 style={{
              color: '#063863',
              fontSize: '30px',
              paddingBottom: '30px'
            }}>Renovation Professionals</h5>
              <p style={{
              color: '#063863',
              fontSize: '30px',
              paddingBottom: '30px'
            }}
              >
              Whether you have a small renovation and remodelling project or 
              a large one, we are here to serve you. We are experienced in
               projects of all sizes and know what it 
              takes to get the job done right the first time
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
