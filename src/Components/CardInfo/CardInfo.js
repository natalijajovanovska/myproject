import React from 'react';
import axios from 'axios';
import './CardInfoCss.css';
import LoadingSpinner from '../LoadingSpinner';

class CardInfo extends React.Component {

    constructor(props){
        super(props);
        
		this.state = {
            games: [],
            isLoading: true
		};
    }
    
    componentDidMount() {
        axios.get(`https://brainsterboxapi.herokuapp.com/games`)
        .then(res => {
            this.setState({ 
                games: res.data[(this.props.match.params.id)],
                isLoading: false
            }) 
            }
        ); 
      }; 

    render() {

        if (this.state.isLoading) {
            return <LoadingSpinner />
        }

        return (
            <div>
                <div className="container-fluid imageContainer">
                    <div className="row imageContainer">
                        
                        <img className="img-fluid imgSecondPage" src={require(`./${this.state.games.id}.jpg`)} alt="img"/>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone  mt-5 buttonsImage">
                            <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                            <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mbott queryContainerInfo"  >
                    <div className="row"  >
                        <h2  className="font-weight-bold mb-3" >{this.state.games.title}</h2>
                    </div>

                    <div className="row customPositionCardInfo">

                        <div className="col-md-12 col-sm-12 col-12">
                          <div className="row customGrayBackground">
                              
                            <div className="col-md-3 col-sm-12 col-12 secondPageTable"> 
                                
                                   <div className="col-md-4  col-sm-2 col-2 alignC paddingIcon">
                                        <i className="far fa-clock fa-2x pl-5 iconCardInfoQuery iconMove"></i>    
                                   </div>

                                   <div className="col-md-8 col-sm-10 col-10 mt-3 pl-0 marginInfoQuery">
                                        <p className="font-weight-bold nohoverText customFont ">Time Frame</p>
                                        <br />
                                        <p className="textGrey nohoverText minusMar">{this.state.games.timeFrame}</p>
                                   </div>

                            </div>

                            <div className="col-md-3 col-sm-12 col-12 secondPageTable"> 
                                
                                   <div className="col-md-4  col-sm-4 col-4 alignC ">
                                        <i className="fas fa-users fa-2x pl-5 iconMove"></i>      
                                   </div>
                                   <div className="col-md-8 col-sm-8 col-8 mt-3 pl-0 marginInfoQuery2">
                                        <p className="font-weight-bold nohoverText customFont">Group Size</p>
                                        <br />
                                        <p className="textGrey nohoverText minusMar ">{this.state.games.groupSize}</p>
                                   </div>
                                
                            </div>

                            <div className="col-md-3 col-sm-12 col-12 secondPageTable"> 
                                
                                   <div className="col-md-4  col-sm-4 col-4 alignC ">
                                        <i className="fas fa-university fa-2x pl-5 iconMove"></i>      
                                   </div>
                                   <div className="col-md-8 col-sm-8 col-8 mt-3 pl-0 marginInfoQuery2">
                                        <p className="font-weight-bold nohoverText customFont">Facilitiation Level</p>
                                        <br />
                                        <p className="textGrey nohoverText minusMar ">{this.state.games.level}</p>
                                   </div>
                                
                            </div>

                            <div className="col-md-3 col-sm-12 col-12 secondPageTable"> 
                                
                                   <div className="col-md-4  col-sm-4 col-4 alignC ">
                                        <i className="fas fa-paint-roller fa-2x pl-5 iconMove"></i>      
                                   </div>
                                   <div className="col-md-8 col-sm-8 col-8 mt-3 pl-0 marginInfoQuery2">
                                        <p className="font-weight-bold nohoverText customFont">Materials</p>
                                        <br />
                                        <p className="textGrey nohoverText minusMar">{this.state.games.materials}</p>
                                   </div>
                                
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 pb-3" >
                        <div className="col-md-12 col-sm-12 col-12 p-0" >
                            <p >{this.state.games.description}</p>
                        </div>
                    </div>

                    {this.state.games.steps.map((game) => {
                        return (
                            <div >
                                
                                <div className="row borderTop pt-3" >
                                    <div className="col-md-12 col-sm-12 col-12 p-0 ">
                                        <h4>{game.step}</h4>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 col-sm-12 col-12 p-0">
                                        <p>{game.stepDescription}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
                   
        );     
    };
}

export default CardInfo;