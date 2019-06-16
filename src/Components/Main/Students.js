import React from 'react';
import './StudentsCss.css';

const Students = () => (
    <div className="container-fluid upperPurple">
        <div className="row text-center">
            <div className="col-md-12">
                <p className="whiteColor smallerText">Изработено од студенти на академијата за програмирање на <a className="brainsterYellow" href="https://brainster.co/" target="blank">Brainster</a></p>
            </div>
        </div>
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone mt-4">
            <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
            <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
        </div>
        </div>
    </div>
);

export default Students;