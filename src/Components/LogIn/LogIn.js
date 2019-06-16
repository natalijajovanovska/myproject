import React from "react";
import './LogInCss.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import ImgLog from './ImgLog.jpg';
import {Link} from 'react-router-dom';

const LogIn = () => {
  return (
     <div>
        <div className="container-fluid imageContainer2">
            <div className="row imageContainer2">
            
                <img className="img-fluid imgSecondPage" src={ImgLog} alt="img"/>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone  mt-5 buttonsImage">
                    <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                    <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                </div>
            </div>
        </div>

        <MDBContainer className="customLogIn">
            <MDBRow>
                <MDBCol md="3" lg="3" xl="3"/>
                <MDBCol md="6" lg="6" xl="6">
                <MDBCard>
                    <MDBCardBody className="mx-4">
                    <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                        <strong>Sign in</strong>
                        </h3>
                    </div>
                    <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        containerClass="mb-0"
                    />
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                        
                        <a href="http://gif-finder.com/wp-content/uploads/2017/01/Happy-dog.gif" target="_blank" rel="noopener noreferrer" className="blue-text ml-1">
                        Forgot
                        Password?
                        </a>
                    </p>
                    <div className="text-center mb-3">
                        <MDBBtn
                        type="button"
                        rounded
                        className="btn-block z-depth-1a btn2 font-weight-bold"
                        >
                        Sign in
                        </MDBBtn>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                        or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center logInButtons">
                        <a href="https://www.facebook.com/login/" target="_blank " rel="noopener noreferrer">
                        <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a butttons btn2"
                        >
                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                        </MDBBtn>
                        </a>
                        <a href="https://twitter.com/login/" target="_blank" rel="noopener noreferrer">
                        <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a butttons btn2"
                        >
                        <MDBIcon fab icon="twitter" className="blue-text" />
                        </MDBBtn>
                        </a>
                        <a href="https://aboutme.google.com/u/0/?referer=gplus" target="_blank" rel="noopener noreferrer">
                        <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="z-depth-1a butttons btn2"
                        >
                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                        </MDBBtn>
                        </a>
                    </div>
                    </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <Link to="/Register" className="blue-text ml-1">

                        Sign Up
                        </Link>
                    </p>
                    </MDBModalFooter>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  );
};

export default LogIn;