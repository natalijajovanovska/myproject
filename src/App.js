import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Header/Navbar';
import NavbarMenu from './Components/Header/NavbarMenu';
import Backdrop from './Components/Backdrop/Backdrop';
import MainBody from './Components/Main/MainBody';
import Future from './Components/Footer/Future';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import CardInfo from './Components/CardInfo/CardInfo';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';

class App extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
    sideDrawerOpen: false,
    scrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true){
        this.setState({ scrolled: true })
      } else{
        this.setState({ scrolled: false })
      }
    })
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
      
        <ScrollToTop>
          <div>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler}
            scroll={this.state.scrolled} />
            <NavbarMenu show={this.state.sideDrawerOpen} click={this.state.sideDrawerOpen ? this.backdropClickHandler : undefined}/>
            {backdrop}
            <Switch>
              <Route exact path="/" component={MainBody} />
              <Route exact path="/CardInfo/:id" component={CardInfo} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/LogIn" component={LogIn} />
              <Route component={ErrorPage} />
            </Switch>
            <Future></Future>
            <Footer></Footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
