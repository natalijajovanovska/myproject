import React from 'react';
import './CardCss.css';
import {Link} from 'react-router-dom';

const Card = (props) => {

    return (
        <div className="col-md-4 col-sm-12 col-12 col-lg-4 col-xl-4">
            <Link className="nohoverText" to={`/CardInfo/${props.id}`}>
                <div className="card mt-4 customCard nohover">
                        <div >
                            <img className="card-img-top imgHidden img-fluid p-2"  src={props.img} alt="img" />
                        </div>
                        <div className="row ml-1 mt-4">
                            <div className="col-md-9 col-sm-9 margQuery">
                                <p className="font-weight-bold mb-0 nohoverText ">{props.title}</p>
                                <br />
                                <p className="minusMargin nohoverText  customPositionCat">Категорија: <span className="blueText"> {props.category}</span></p>
                            </div>
                            <div className="col-md-3 col-sm-3 col-3 col-lg-3 col-xl-3">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12 mr-3 paddingIcon i575">
                                    <img className="img-fluid iconCardImg " src={props.img} alt="img" />
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="row  mt-3 mb-4 customPosition">
                            <div className="col-md-12 col-sm-12 col-12 paddingQuery">
                                <div className="row pl-2 ">
                                    <div className="col-md-2 col-sm-2 alignC pr-0">
                                        <i className="far fa-clock fa-2x iconQuery"></i>  
                                    </div>
                                    <div className="col-md-10 col-sm-12 col-12 pl-2 pr-0 mt-4 posAbsCard">
                                        <p className="font-weight-bold nohoverText ">Времетраење</p>
                                        <br />
                                        <p className="textGrey nohoverText ">{props.timeFrame}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
