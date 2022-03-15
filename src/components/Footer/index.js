import React from 'react'
import {FaFacebookSquare, FaTwitter} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {MdPhoneInTalk} from 'react-icons/md'
import { Container, Row, Col } from "react-grid-system";

const Navbar = () => { 
  return (
    <footer>
    {/* <div className='footer__socials-section'>
        <div className="footer__socials">
            <a href="https://facebook.com/uyohoini.blankson/"><FaFacebookSquare/></a>
            <a href="https://github.com/Usblankson/"><AiFillInstagram/></a>
            <a href="https://twitter.com/BlanksonUS"><FaTwitter/></a>
        </div>
    </div> */}
    

    {/* <div className="footer__copyright">
      <small>&copy; Cosy Haven</small>
    </div> */}
    <Container fluid>
  <Row justify='between' style={{
    padding: '50px'
  }}>
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}>
      <AiOutlineHome />
      <br/>
      <p style={{
        fontSize: '18px'
      }}>13, Abile Sulaiman Street Lekki Phase 1. Lagos Nigeria.</p>
    </Col>
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}>
      <AiOutlineMail/>
      <br/>
      <p style={{
        fontSize: '18px'
      }}>contact@cosyhaven.com</p>
    </Col>
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}>
      <MdPhoneInTalk/>
      <br/>
      <p style={{
        fontSize: '18px'
      }}>+2346-786-5589-9900</p>
    </Col>
  </Row>
  <br />
  <br />
  <Row justify="center">
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}><FaFacebookSquare/>
    </Col>
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}><AiFillInstagram/></Col>
    <Col xs={3} style={{
      color: '#fff',
      fontSize: '30px',
    }}><FaTwitter/></Col>
  </Row>
</Container>
</footer>
  )
}

export default Navbar