import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
         <footer class="cpy-right bg-theme" data-blast="bgColor">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="wthree-social">
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="fa fa-facebook-f icon_facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-twitter icon_twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-dribbble icon_dribbble"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="fa fa-google-plus icon_g_plus"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 text-lg-right mt-lg-0 mt-4">
                    <p>© 2018 Creature. All rights reserved | Design by
                        <a href="http://w3layouts.com"> W3layouts.</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
        );
    }
}
export default Footer;