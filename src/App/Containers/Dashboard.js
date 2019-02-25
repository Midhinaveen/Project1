import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
export default class Routing extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
};