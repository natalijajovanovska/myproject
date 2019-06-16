import React from 'react';
import Img02 from './aboutUs.jpg';
import './AboutUsCss.css';

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid imageContainer">
                <div className="row imageContainer">
                
                    <img className="img-fluid imgSecondPage" src={Img02} alt="img"/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone  mt-5 buttonsImage">
                            <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                            <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                        </div>

                </div>
            </div>

            <div className="container aboutMarg mt-4">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <p>Brainster е иновативна компанија за едукација каде можеш да научиш практични вештини за трансформација на кариерата. Нашата специјалност е организирање на курсеви, академии, кариерна трансформација и поврзување на талентите со иновативните компании oд областа на маркетинг, дизајн, бизнис и програмирање.</p>

                        <p>Во изминатите 3 години Brainster реализираше повеќе од 400 курсеви преку кои 5000 учесници се стекнаа со нови вештини и стигнаа чекор поблиску до кариерата која ја посакуваат.</p>
                        
                        <p>Нашата мисија е да им помогнеме на 1 милион индивидуалци да стигнат до кариера која секогаш ја посакувале. </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <h5>Курсеви:</h5>
                        <a href="https://brainster.co/courses" target="_blank" rel="noopener noreferrer">https://brainster.co/courses</a>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <h5>Академија за маркетинг:</h5>
                        <a href="https://www.brainster.io/marketpreneurs" target="_blank" rel="noopener noreferrer">https://www.brainster.io/marketpreneurs</a>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <h5>Академија за дизајн:</h5>
                        <a href="https://www.brainster.io/akademija-za-dizajn" target="_blank" rel="noopener noreferrer">https://www.brainster.io/akademija-za-dizajn</a>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-md-12 col-12">
                        <h5>Академија за програмирање:</h5>
                        <a href="http://codepreneurs.co/" target="_blank" rel="noopener noreferrer">http://codepreneurs.co/</a>
                    </div>
                </div>
            </div>
        </div>            
    );
};

export default AboutUs;