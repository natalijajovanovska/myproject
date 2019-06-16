import React from 'react';
import './ErrorPageCss.css';
import {Link} from 'react-router-dom';

class ErrorPage extends React.Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row errorPurple">

                    </div>
                </div>

                <div className="container marginErrorTop">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-3">

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-xl-12 col-12 col-sm-12 text-center">
                                    <p className="biggerLettersError">404</p>   
                                </div>
                            </div>
                            <div className="row hrError">
                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                    <p className="errorBigLetter mb-4 text-center mt-3">Sorry, the page you are looking for could not be found.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12 text-center">
                                <button className="btn2 btn"> <Link to="/" className="aBtn">Go back to Home Page</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ErrorPage;