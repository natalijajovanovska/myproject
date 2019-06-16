import React from 'react';
import './RegisterCss.css';
import ImgRegister from './ImgRegister.jpg';
import {Link} from 'react-router-dom';

class Register extends React.Component {
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            number: "",
            messageText: ""
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit =(e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <div className="container-fluid imageContainer">
                    <div className="row imageContainer">
                
                        <img className="img-fluid imgSecondPage" src={ImgRegister} alt="img"/>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center displayNone  mt-5 buttonsImage">
                            <button className="btn btn2 mr-3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                            <button className="btn btn3 btnQue"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                        </div>

                    </div>
                </div>

                <div className="container customRegister">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3">

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="card">
                                <div className="row mt-3 mb-3">
                                    <div className="col-md-12 text-center">
                                        <h3><strong>Register</strong></h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form className="form-group pl-4 pr-4">

                                            <div className="form-group">
                                                
                                                <input name="firstName" type="text" className="form-control" required
                                                value={this.state.firstName}
                                                onChange={e => this.change(e)}/>
                                                <label htmlFor="firstName" className="ml-1">Име</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <input name="lastName" type="text" className="form-control"  required value={this.state.lastName}
                                                onChange={e => this.change(e)}/>
                                                <label htmlFor="lastName" className="ml-1">Презиме</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <input name="company" type="text" className="form-control"  required value={this.state.company}
                                                onChange={e => this.change(e)}/>
                                                <label htmlFor="company" className="ml-1">Компанија</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <input name="email" type="email" className="form-control"  required value={this.state.email}
                                                onChange={e => this.change(e)}/>
                                                <label htmlFor="email" className="ml-1">Емаил</label>
                                                
                                            </div>                            
                                            <div className="form-group">
                                                
                                                <input name="number" type="number" className="form-control" required value={this.state.number}
                                                onChange={e => this.change(e)}
                                                />
                                                <label htmlFor="number" className="ml-1">Телефонски број</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <select name="employees" className="form-control" required>
                                                <option default value >Одберете вредност</option>
                                                    <option>1</option>
                                                    <option>2-10</option>
                                                    <option>11-50</option>
                                                    <option>51-200</option>
                                                    <option>200+</option>
                                                </select>
                                                <label htmlFor="employees" className="ml-1">Број на вработени</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <select name="sector" className="form-control" required>
                                                <option default value> Одберете вредност</option>
                                                    <option>Човечки ресурси</option>
                                                    <option>Маркетинг</option>
                                                    <option>Продукт</option>
                                                    <option>Продажба</option>
                                                    <option>CEO</option>
                                                    <option>Друго</option>
                                                </select>
                                                <label htmlFor="sector" className="ml-1">Сектор</label>
                                                
                                            </div>

                                            <div className="form-group">
                                                
                                                <textarea name="messageText" className="form-control" rows="3" value={this.state.messageText}
                                                onChange={e => this.change(e)}>
                                                
                                                </textarea>
                                                <label htmlFor="messageText" className="ml-1">Поле за порака</label>
                                                
                                            </div>

                                            <div onClick={e => this.onSubmit(e)} className="text-center mt-4">
                                            <button className="btn btn-block btn2 font-weight-bold">Submit</button>
                                            </div>

                                        </form>
                                        
                                        <div className="mt-4 mb-4">
                                            <p className="font-small grey-text d-flex justify-content-end pr-4">
                                                Already a member?
                                                <Link to="/LogIn" className="blue-text ml-1">
                                                Sign In
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Register;