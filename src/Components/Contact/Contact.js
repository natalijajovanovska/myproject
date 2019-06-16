import React from 'react';
import Img01 from './contact.jpg';
import './ContactCss.css';
import { MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';

const Contact = () => {
    return (
        <div>
            <div className="container-fluid imageContainer">
                <div className="row imageContainer">
                
                    <img className="img-fluid imgSecondPage" src={Img01} alt="img"/>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone  mt-5 buttonsImage">
                            <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                            <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                        </div>

                </div>
            </div>

            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-12 col-sm-12">
                        <h5>Телефон:</h5>
                        <p>+389 70 38 47 28</p>
                        <h5>E-mail:</h5>
                        <p><a href="mailto:contact@brainster.co" >contact@brainster.co</a></p>
                        <h5>Адреса:</h5>
                        <p>ул. Востаничка 140, 1000 Скопје</p>
                        <h5>Локација:</h5>
                        <p><a href="https://www.google.com/maps/place/Brainster/@42.0007435,21.4179506,15z/data=!4m5!3m4!1s0x0:0x88831c22d3d17fb2!8m2!3d42.0007435!4d21.4179506" target="_blank" rel="noopener noreferrer">Мапа</a></p>
                    </div>
                  
                    <MDBCol md="6" lg="6" xl="6" sm="12" className="customSendMessage">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                    <strong>Send us a message</strong>
                                    </h3>
                                </div>
                                <MDBInput
                                    label="Your name"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    group
                                    type="email"
                                    validate
                                    containerClass="mb-3"
                                />

                                <MDBInput
                                    label="Your message"
                                    group
                                    type="textarea"
                                    validate
                                    containerClass="mb-4"
                                    rows="4"
                                />
                                
                                <div className="text-center mb-3">
                                    <MDBBtn
                                    type="button"
                                    rounded
                                    className="btn-block z-depth-1a btn2 font-weight-bold"
                                    >
                                    Send message
                                    </MDBBtn>
                                </div>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
             
                </div>
            </div>
        </div>            
    );
};

export default Contact;