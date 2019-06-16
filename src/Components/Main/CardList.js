import React from 'react';
import Card from './Card';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';

class CardList extends React.Component {

    constructor(props){
        super(props);
        
		this.state = {
            infos: [],
            isLoading: true
		}
	}

      componentDidMount() {
        axios.get(`https://brainsterboxapi.herokuapp.com/games`)
            .then(res => {
                this.setState({ 
                    infos: res.data,
                    isLoading: false
                 })
            });
      }; 

    render() {

        if (this.state.isLoading) {
            return <LoadingSpinner />
        }

        return(
            <div className="container mt-5 ">
                <div className="row">
                    
                        {this.state.infos.map((info) => {
                            return (
                                <Card img={info.image}
                                title={info.title} 
                                category={info.category}
                                timeFrame={info.timeFrame}
                                key={info.id}
                                id={info.id} />
                            );
                        })}
                    
                </div>
            </div>
        );
    };
}

export default CardList;