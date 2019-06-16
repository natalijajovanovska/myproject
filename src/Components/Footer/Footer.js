import React from 'react';
import './FooterCss.css';
import {Link} from 'react-router-dom';
import LogoComponent from '../Header/LogoComponent';

class Footer extends React.Component {

    render() {
        return(
            <div className="container-fluid footerCustom">
                <div className="row">
                    <div className="container">
                        <div className="row footerHeight">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4 col-4 hiddenSmall">
                                <ul className="list-inline rowFlex">
                                    <li className="list-inline-item text-white font-weight-bold"><Link to="/AboutUs">About us</Link></li>
                                    <li className="list-inline-item text-white font-weight-bold"><Link to="/Contact">Contact</Link></li>
                                    <li className="list-inline-item text-white font-weight-bold"><a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blank" rel="noopener noreferrer">Gallery</a></li>
                                </ul>
                            </div>
                            
                            <LogoComponent />

                            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4 col-4 hiddenSmall">
                                <ul className=" icons list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/school/brainster-co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/brainsterco?lang=en" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter fa-2x"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/brainster.co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Footer;