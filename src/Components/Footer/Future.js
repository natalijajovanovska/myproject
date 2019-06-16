import React from 'react';
import './FutureCss.css';
import {Link} from 'react-router-dom';

const Future = () => (
    <div className="purpleScreen">
        <div className="container-fluid marginFuture  marginBottomFuture">
            <div className="row text-center">
                <div className="col-md-12 col-sm-12 col-12">
                    <h1 className="whiteText">FUTURE-PROOF YOUR ORGANIZATION</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12 ">
                    <h6 className="whiteText">Find out how to unlock progress in your business. Understand your current state, identify <br className="brHidden"/> opportunity areas and prepare to take charge of your organization's future.</h6>
                </div>
            </div>
            <div className="row text-center mt-4">
                <div className="col-md-12 col-sm-12 col-12">
                <button className="btn btn2 btnQue"><a href="https://brainsterquiz.typeform.com/to/kC2I9E" target="_blank" rel="noopener noreferrer" className="aBtn">Take the assesment</a></button>
                </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-12 text-center displayNoneFooter">
            <ul className=" list-inline customHidden customFooterIcons">
                <li className="list-inline-item mr-5">
                    <a href="https://www.linkedin.com/school/brainster-co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
                </li>
                <li className="list-inline-item mr-5">
                    <a href="https://twitter.com/brainsterco?lang=en" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.facebook.com/brainster.co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>
                </li>
            </ul>
        </div>

        <div className="col-sm-12 col-md-12 text-center mt-5 displayNoneFooter ">
            <ul className="list-inline customHidden">
                <li className="list-inline-item text-white font-weight-bold "><Link to="/AboutUs" className="whiteWhite">About us</Link></li>
                <li className="list-inline-item text-white font-weight-bold"><Link to="/Contact" className="whiteWhite">Contact</Link></li>
                <li className="list-inline-item text-white font-weight-bold"><a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blank" rel="noopener noreferrer" className="whiteWhite">Gallery</a></li>
            </ul>
        </div>
    </div>
);

export default Future;