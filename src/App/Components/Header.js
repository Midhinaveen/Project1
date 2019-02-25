import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import {Link} from 'react-router-dom'
class Header extends Component {
    handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('logged out')
            })
            .catch(err => {
                console.error(err)
            })
    }
    render() {
        return (
            <div>
                <nav className="navbar nav-color navbar-expand-lg navbar-light fixed-top navbar-expand-lg navbar-light navbar-fixed-top">
                <h1>
                <Link to="/" className="navbar-brand" data-blast="color"> Creature</Link>
                </h1>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item ">
                            <a className="nav-link" href="index.html" data-blast="color">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#about">about</a>
                        </li>
                        <li className="nav-item mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#services">features</a>
                        </li>
                        <li className="nav-item dropdown mt-lg-0 mt-3">
                            <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Items
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item scroll nav-link" href="#plans">pricing</a>
                                <a className="dropdown-item scroll nav-link" href="#team">team</a>
                                <a className="dropdown-item scroll nav-link" href="#portfolio">portfolio</a>
                                <a className="dropdown-item scroll nav-link" href="#posts">latest posts</a>
                            </div>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button type="button" className="btn  wthree-link-bnr bg-theme rounded-circle text-center mt-lg-0 mt-3" data-toggle="modal" aria-pressed="false" data-target="#exampleModal" data-blast="bgColor"> 
                    <span className="fa fa-user "></span>
                    </button>
                </div>
                
            </nav>
            </div>
        );
    }
}
export default Header;