import React from "react";
import room from "../images/room.png";
import mason from "../images/mason.png";
import fum from "../images/fum.png";
import blue from "../images/bluebackground.png";
import modern from "../images/modern-living-room.png";
import arrow from "../images/arrow.png";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
const Home = () => {
  return (
    <div>
      <section className="home__section-top">
        <Container className="home__section-top-container">
          <Row>
            <Col
              xs={6}
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4 className="home__text__header">
                Quality solution for home repairs, maintenance and upgrade
              </h4>
              <br />
              <p className="home__text__body">
                Cosy Haven provides rapid response and planned maintenance
                services to homes, offices and commercial facilities quality
                repair and maintenance.
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
                    width: "188px",
                    height: "52px",
                    left: "12px",
                    top: "712px",
                    marginTop: "20px",
                    alignSelf: "center",
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
                    Book us
                  </a>{" "}
                </button>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>50</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Homes</p>
                    </Col>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>100</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Professionals</p>
                    </Col>
                    <Col
                      style={{
                        color: "#063863",
                        marginTop: "15px",
                      }}
                    >
                      <h4>1000</h4>
                      <hr
                        style={{
                          borderBottom: "2px solid #063863",
                          width: "47px",
                        }}
                      />
                      <br />
                      <p>Customers</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs={4}>
              <img
                src={room}
                alt=""
                style={{
                  height: "360px",
                  marginLeft: "20px",
                }}
              />
            </Col>
            <Col xs={2}>
              <div className="header__socials">
                <a
                  href="tel:+2347-677-754-666"
                  target="_blank"
                  rel="noreferrer"
                >
                  +2347677754666
                </a>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a
                  href="mailto:contact@cosyhaven.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@cosyhaven.com
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="" style={{
        background: '#fff',
        marginTop: '50px',
        padding: '50px 0px'
      }}>
        <Container className="">
          <Row>
            <Col
              xs={6}
              style={{
                justifyContent: "center",
                color: "#fff",
                padding: "50px",
              }}
            >
              <h4
                style={{
                  color: "#000000",
                  width: "281px",
                  height: "85px",
                  left: "63px",
                  top: "922px",

                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Bringing comfort
                <br /> to your home.
              </h4>
              <br />
            </Col>
            <Col xs={6}>
              <p className="home__text__body">
                We take our job seriously and personally. we will clean and
                inspect your house prior to completion of the job. We provide
                safe and professional installation every time with customer
                satisfaction guaranteed.
              </p>

              <br />

              <a href="#" style={{
                textDecoration: 'none',
                color: '#000'
              }}>Read more <img src={arrow} alt="" style={{width: '12.81px' }}/></a>
              <hr
                style={{
                  borderBottom: "2px solid #000000",
                  width: "80px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        style={{
          padding: "64px",
          position: "relative",
          width: "100%",
          width: "1440px",
          height: "508px",
          left: "50px",
          marginRight: "50px",
          top: "50px",
          justifyContent: "space-between",
          marginTop: "50px",
          background: "#fff",
        }}
      >
        <Container>
          <Row>
            <Col>
              <img
                src={blue}
                alt="image"
                style={{
                  marginLeft: "-100px",
                  marginBottom: "-100px",
                }}
              />
              <img
                src={modern}
                alt="image"
                style={{
                  marginTop: "-100%",
                  marginRight: "-100px",
                }}
              />
            </Col>
            <Col
              style={{
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <h4
                className="our__goal__text__header"
                style={{
                  fontSize: "30px",
                  marginTop: "50px",
                  color: "#063863",
                }}
              >
                Just moved to a new home? Let’s help you transform your space.
              </h4>
              <br />
              <p
                className="our__goal__text__body"
                style={{
                  fontSize: "25px",
                  color: "#063863",
                }}
              >
                Just moved to a new home? Let’s help you transform your space.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div
          style={{
            padding: "64px",
            position: "relative",
            width: "100%",
            height: "508px",
            left: "0px",
            top: "50px",
            marginTop: "80px",
            justifyContent: "space-between",
            background: "rgba(6, 56, 99, 0.03)",
          }}
        >
          <div className="row">
            <div className="text__column">
              <h4
                className="text__header"
                style={{
                  color: "#063863",
                  fontSize: "30px",
                  paddingBottom: "50px",
                }}
              >
                With us, every home is a haven of comfort.
              </h4>
              <p className="home__text__body">
                From tile installation, to capentry, bricklaying hardwood
                flooring and everything home remodelling. We are your one stop
                shop for everything home remodelling.
              </p>
            </div>
            <div class="image__column">
              <img src={fum} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "64px",
          position: "relative",
          width: "100%",
          width: "1440px",
          height: "508px",
          left: "50px",
          marginRight: "50px",
          top: "50px",
          justifyContent: "space-between",
          marginTop: "180px",
          background: "#063863",
        }}
      >
        <Container>
          <Row>
            <Col>
              <img src={mason} alt="image" />
            </Col>
            <Col
              style={{
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <h4
                className="our__goal__text__header"
                style={{
                  fontSize: "30px",
                  marginTop: "50px",
                }}
              >
                Our goal
              </h4>
              <br />
              <p
                className="our__goal__text__body"
                style={{
                  fontSize: "25px",
                }}
              >
                Our goal is to leave at the end of the day and to have our
                customers glad that they chose us for their home/office repairs
                and improvement needs
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="about__section-mission"
        style={{
          marginTop: "50px",
          justifyContent: 'center'
        }}
      >
        <div class="about__section-mission-container">
          <div class="row">
            <div className="mission__text__column">
              <h5>Subscribe to get the latest news about us</h5>
              <p
                style={{
                  marginTop: "2px",
                }}
              >
                Enter your email to get news about our latest updates and offers
              </p>
              <center>
                <input
                  className="newsletter"
                  style={{
                    marginTop: "20px",
                    width: "40%",
                    borderColor: "#fff",
                  }}
                  required
                />
                <button
                  className="btn btn-primary"
                  style={{
                    top: "0",
                    borderRadius: "0px",
                    right: "0px",
                    marginLeft: "-110px",
                    zIndex: "2",
                    border: "none",
                    height: "45px",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </button>
              </center>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
