import React from 'react';
import './LogoComponentCss.css';
import Logo from './logo.png';

class LogoComponent extends React.Component {

    scrollTopFn = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4 col-4 text-center">
                <button onClick={this.scrollTopFn} className="navbar-brand navbar_brand"><img className=" img-fluid" src={Logo} alt="BRAINSTER" /></button>
            </div>
        )
    };
}

export default LogoComponent;