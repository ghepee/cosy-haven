import React from 'react'
import './contact.css'
import { Container, Row, Col } from 'react-grid-system';
import bricklaying1 from '../../images/bricklaying1.png'
const Contact = () => {
  return (
    <div>
        <section className='contact__section-top'>
        <Container className='contact__section-top-container'>
          <Row>
            <Col>
                <img src={bricklaying1} alt='image'/>
            </Col>
            <Col style={{
              justifyContent: 'center',
              color: '#fff',
            }}> 
            <h4 className='text__header'>Why Choose Us</h4>
            <br/>
            <p className='text__body'>
            We say what we will do and do what we say and also display integrity by honestly evaluating the needed skills for a job and advising the customer on the most cost-effective solution 
            without compromising on quality. We endeavour to deliver service at an agreed time. We will exceed expectations by setting realistic timelines for completion of a job and working to 
            beat the set targets ensuring consistency in the quality of the work delivered by sourcing and training top of the range craftsmen. Finally, our staff will be available to clients in 
            a timely manner ensuring the Lagos traffic will be no barrier to service delivery.

               </p>
            </Col>
          </Row>
        </Container>
    </section>
    <section className='contact__section'>
            <div className="container contact__container">
          <div className="contact__options">
             <article className="contact__option">
            
             <h4 className='contact__option-title' style={{color: '#063863', padding : '20px 0px'}}>Quality Workmanship/Professionals</h4>
             <p style={{ color: '#063863', fontSize: '14px', fontStyle: 'normal', fontWeight: '500'}}>If you’re looking for knowledgeable and experienced professionals 
               that can get the job done right, give us a call! We work hard to provide a 
               professional experience whilst “bringing comfort to your home” with our services. 
               We take pride in our work, and it shows.
            </p>
          </article>

             <article className="contact__option">
             <h4 className='contact__option-header'>Email</h4>
             <hr style={{ width: '50px', borderTop: '1px solid#f6ab0e',}}/>
             <p style={{ color: '#063863', fontSize: '14px', fontWeight: '500'}}>cosyhaven@gmail.com</p>
             </article>
          
             <article className="contact__option">
             <h4 className='contact__option-header'>Location</h4>
             <hr style={{ width: '70px', borderTop: '1px solid #f6ab0e',}}/>
             <p style={{ color: '#063863', fontSize: '13px', fontStyle: 'normal', fontWeight: '500'}}>13, Abule Sulaiman Street Lekki Phase 1, Lagos Nigeria </p>
             </article>
        
          </div>
          <form >
            <label for="name" style={{fontFamily: 'Roboto', fontSize: '25px', fontStyle: 'normal', marginBottom:'10px'}}>Name</label>
            <input type="text" name='name'  required/> <br />
            <label for="name" style={{fontFamily: 'Roboto', fontSize: '25px', fontStyle: 'normal', marginBottom:'10px'}}>Email</label>
            <input type="email" name="email" required /> <br />
            <label for="name" style={{fontFamily: 'Roboto', fontSize: '25px', fontStyle: 'normal', marginBottom:'10px'}}>Message</label>
            <textarea name="message"  rows="7" required></textarea><br />
            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
      </div>
    </section>
    </div>
  );
}

export default Contact;