import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase';
import Header from '../../Components/Header';
import {Link} from 'react-router-dom'
class Home extends Component {
  handleLogout = () => {
    console.log('hiii');
    firebase
      .auth()
      .signOut()
  }
  render() {
    return (
      <div>
      <Header />
        <div className="callbacks_container">
        <ul className="rslides callbacks callbacks1" id="slider3">
            <li className="banner banner1 callbacks1_on sec1" id="callbacks1_s0">
              <div className="container">
                <div className="banner-text">
                  <div className="slider-info">
                    <h3>Dogs Adopting</h3>
                    <span className="line"></span>
                    <p>we can adopt dogs from your location</p>
                    <a className="btn btn-primary btn-pop text-black mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#about" role="button">View
                                    More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>     
        
        <section className="wthree-slide-btm pt-lg-5" id="about">
          <div className="container pt-sm-5 pt-4">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="slide-banner">
                </div>
              </div>
              <div className="col-lg-7">
                <div className="bg-abt light-bg">
                  <div className="container">
                    <div className="title-desc  pb-sm-3">
                      <h4 className="main-title-w3pvt">about dog</h4>
                      <p>helping animals &amp; working on environmental issues.</p>
                    </div>
                    <div className="row flex-column mt-lg-4 mt-3">
                      <div className="abt-grid">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="abt-icon" data-blast="bgColor">
                              <span className="fa fa-ravelry"></span>
                            </div>
                          </div>
                          <div className="col-sm-9 pl-sm-0">
                            <div className="abt-txt ml-sm-0">
                              <h4>sanctus takimata </h4>
                              <p>Lo sea takimata sanctus est Lorem ipolor sit amet, no sea takimata
                                                    sanctus est Loremsum dolor sit amet.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="abt-grid mt-4 pt-lg-2">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="abt-icon" data-blast="bgColor">
                              <span className="fa fa-laptop"></span>
                            </div>
                          </div>
                          <div className="col-sm-9 pl-sm-0">
                            <div className="abt-txt ml-sm-0">
                              <h4>takimata sanctus</h4>
                              <p>Lo sea takimata sanctus est Lorem ipsum dolorsita.Lorem ipsum dolor
                                  sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                  magna aliquyam erat, At vero eos et accusam et justo duo dolores et
                                  ea
                                  rebum. Lorem ipsum dolor sit amet, no sea takimata sanctus est
                                  Lorem
                                                    ipsum dolor sit amet. Stet clita kasd gubergren.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wthree-slide-btm pb-lg-5">
          <div className="container pb-md-5 pb-4">
            <div className="row flex-row-reverse no-gutters">
              <div className="col-lg-5">
                <div className="ab-banner">
                </div>
              </div>
              <div className="col-lg-7">
                <div className="bg-abt">
                  <div className="container">
                    <div className="title-desc  pb-sm-3">
                      <h4 className="main-title-w3pvt">adoption dogs</h4>
                      <p>helping animals &amp; working on environmental issues.</p>
                    </div>
                    <div className="row flex-column mt-lg-4 mt-3">
                      <div className="abt-grid">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="abt-icon" data-blast="bgColor">
                              <span className="fa fa-ravelry"></span>
                            </div>
                          </div>
                          <div className="col-sm-9 pl-sm-0">
                            <div className="abt-txt ml-sm-0">
                              <h4>sanctus takimata </h4>
                              <p>Lo sea takimata sanctus est Lorem ipolor sit amet, no sea takimata
                                                    sanctus est Loremsum dolor sit amet.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="abt-grid mt-4 pt-lg-2">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="abt-icon" data-blast="bgColor">
                              <span className="fa fa-laptop"></span>
                            </div>
                          </div>
                          <div className="col-sm-9 pl-sm-0">
                            <div className="abt-txt ml-sm-0">
                              <h4>takimata sanctus</h4>
                              <p>Lo sea takimata sanctus est Lorem ipsum dolorsita.Lorem ipsum dolor
                                  sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                  magna aliquyam erat, At vero eos et accusam et justo duo dolores et
                                  ea
                                  rebum. Lorem ipsum dolor sit amet, no sea takimata sanctus est
                                  Lorem
                                                    ipsum dolor sit amet. Stet clita kasd gubergren.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3_stats py-sm-5 py-4 banner2" id="stats">
          <div className="container">
            <div className="py-lg-5 w3-stats">
              <h2 className="w3pvt-title">We Adopt Any Dog That Your Are Interested
                </h2>
              <p className="my-4 text-white">
                Vestibulum volutpat non eros ut vulputate. Nunc id risus accumsan Donec mi nulla, auctor
                nec sem a, ornare auctor mi. Sed
                    mi tortor, commodo a felis in, fringilla tincidunt nulla.</p>
              <div className="row py-4">
                <div className="col-md-4 col-6">
                  <div className="counter">
                    <span className="fa fa-smile-o"></span>
                    <div className="timer count-title count-number mt-2 text-white" data-to="297" data-speed="1500">297</div>
                    <p className="count-text text-uppercase text-white">volunteers</p>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="counter">
                    <span className="fa fa-users"></span>
                    <div className="timer count-title count-number mt-2 text-white" data-to="194" data-speed="1500">194</div>
                    <p className="count-text text-uppercase text-white">projects completed</p>
                  </div>
                </div>
                <div className="col-md-4 col-6 mt-md-0 mt-4">
                  <div className="counter">
                    <span className="fa fa-database"></span>
                    <div className="timer count-title count-number mt-2 text-white" data-to="2298" data-speed="1500">2,298</div>
                    <p className="count-text text-uppercase text-white">donars</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w3lspvt-about py-md-5 py-5" id="services">
          <div className="container pt-lg-5">
            <div className="title-desc text-center pb-sm-3">
              <h3 className="main-title-w3pvt">premium features</h3>
              <p>helping animals &amp; working on environmental issues.</p>
            </div>
            <div className="w3lspvt-about-row row  text-center pt-md-0 pt-5 mt-lg-5">
              <div className="col-lg-4 col-sm-6 w3lspvt-about-grids">
                <div className="p-md-5 p-sm-3">
                  <span className="fa fa-map-marker" data-blast="borderColor"></span>
                  <h4 className="mt-2 mb-3" data-blast="color">wind energy</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 w3lspvt-about-grids  border-left border-right my-sm-0 my-5">
                <div className="p-md-5 p-sm-3">
                  <span className="fa fa-check-circle-o" data-blast="borderColor"></span>
                  <h4 className="mt-2 mb-3" data-blast="color">pollution</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
              <div className="col-lg-4 w3lspvt-about-grids">
                <div className="p-md-5 p-sm-3">
                  <span className="fa fa-paw" data-blast="borderColor"></span>
                  <h4 className="mt-2 mb-3" data-blast="color">saving animals</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
            </div>
            <div className="w3lspvt-about-row border-top row text-center pt-md-0 pt-5 mt-md-0 mt-5">
              <div className="col-lg-4 col-sm-6 w3lspvt-about-grids">
                <div className="p-md-5 p-sm-3 col-label">
                  <span className="fa fa-tint" data-blast="borderColor"></span>
                  <h4 className="mt-2 mb-3" data-blast="color">water</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 w3lspvt-about-grids mt-lg-0 mt-md-3 border-left border-right pt-sm-0 pt-5">
                <div className="p-md-5 p-sm-3 col-label">
                  <span className="fa fa-handshake-o" data-blast="borderColor">
                  </span>
                  <h4 className="mt-2 mb-3" data-blast="color">protection</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
              <div className="col-lg-4 w3lspvt-about-grids pt-md-0 pt-5">
                <div className="p-md-5 p-sm-3 col-label">
                  <span className="fa fa-bar-chart" data-blast="borderColor"></span>
                  <h4 className="mt-2 mb-3" data-blast="color">nature</h4>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur aut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="abt_bottom py-lg-5 bg-theme" data-blast="bgColor">
          <div className="container py-sm-4 py-3">
            <h4 className="abt-text text-capitalize text-sm-center">Over 70% of adoptions made to us directly impact dogs
            in the preferred locations</h4>
            <div className="d-sm-flex justify-content-center">
              <a className="btn btn-primary btn-pop text-black mt-4 w3_pvt-link-bnr scroll bg-theme1" href="#contact" role="button">contact
                  us
            </a>
              <a href="index.html" role="button" data-toggle="modal" data-target="#exampleModal1" className="btn btn-primary btn-pop text-black  mt-4 ml-sm-3 w3_pvt-link-bnr">
                make a contribution</a>
            </div>
          </div>
        </div>
        <section className="py-lg-5 py-4" id="plans">
          <div className="container py-md-5">
            <div className="title-desc text-center pb-sm-3">
              <h3 className="main-title-w3pvt">recent projects</h3>
              <p>helping animals &amp; working on environmental issues.</p>
            </div>
            <div className="row price-row">
              <div className="col-lg-4 col-sm-6 column mb-lg-0 mb-4">
                <div className="box" data-blast="borderColor">
                  <div className="title">
                    <span className="fa fa-gg" data-blast="color"></span>
                    <h5 data-blast="color">protecting forests</h5>
                  </div>
                  <div className="price">
                    <h6>funds needed - <sup>$</sup><span className="font-weight-bold">800</span></h6>
                  </div>
                  <div className="option">
                    <ul>
                      <li>50 Gb Space</li>
                      <li>5 Domain Names</li>
                      <li>20 Email Address</li>
                      <li>Live Support</li>
                    </ul>
                  </div>
                  <button type="button" className="btn btn-primary btn-pop text-black w3ls-btn bg-theme  d-block" data-toggle="modal" aria-pressed="false" data-target="#exampleModal" data-blast="bgColor">
                    donate now
                        </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 column mb-lg-0 mb-4">
                <div className="box" data-blast="borderColor">
                  <div className="title">
                    <span className="fa fa-money" data-blast="color"></span>
                    <h5 data-blast="color">rescue rehabilitation</h5>
                  </div>
                  <div className="price">
                    <h6>funds needed - <sup>$</sup><span className="font-weight-bold">1200</span></h6>
                  </div>
                  <div className="option">
                    <ul>
                      <li>50 Gb Space</li>
                      <li>5 Domain Names</li>
                      <li>20 Email Address</li>
                      <li>Live Support</li>
                    </ul>
                  </div>
                  <button type="button" className="btn btn-primary btn-pop text-black w3ls-btn bg-theme  d-block" data-toggle="modal" aria-pressed="false" data-target="#exampleModal" data-blast="bgColor">
                    donate now
                        </button>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6  mx-auto mt-lg-0 mt-4 column">
                <div className="box" data-blast="borderColor">
                  <div className="title">
                    <span className="fa fa-gg" data-blast="color"></span>
                    <h5 data-blast="color">environmental air</h5>
                  </div>
                  <div className="price">
                    <h6>funds needed - <sup>$</sup><span className="font-weight-bold">3000</span></h6>
                  </div>
                  <div className="option">
                    <ul>
                      <li>50 Gb Space</li>
                      <li>5 Domain Names</li>
                      <li>20 Email Address</li>
                      <li>Live Support</li>
                    </ul>
                  </div>
                  <button type="button" className="btn btn-primary btn-pop text-black w3ls-btn bg-theme  d-block" data-toggle="modal" aria-pressed="false" data-target="#exampleModal" data-blast="bgColor">
                    donate now
                        </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team py-4 py-lg-5" id="team">
          <div className="container py-lg-5 py-sm-4">
            <div className="title-desc text-center pb-sm-3">
              <h3 className="main-title-w3pvt">our team</h3>
              <p>Helping animals &amp; working on environmental issues.</p>
            </div>
            <div className="row py-4 mt-lg-5  team-grid">
              <div className="col-lg-4 col-sm-6">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man12.jpeg')} alt="" />
                    <div className="box-content">
                    <h3 className="title" data-blast="color">Williamson</h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man7.jpg')} alt="" />
                  <div className="box-content">
                    <h3 className="title" data-blast="color">Kristiana</h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man8.jpg')} alt="" />
                  <div className="box-content">
                    <h3 className="title" data-blast="color">Thomson</h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6  mt-4">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man9.jpeg')} alt="" />
                  <div className="box-content">
                    <h3 className="title" data-blast="color">dolor sit</h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-4">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man10.jpeg')} alt="" />
                  <div className="box-content">
                    <h3 className="title" data-blast="color">ipsum dolor</h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-4">
                <div className="box13">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/man11.jpeg')} alt="" />
                  <div className="box-content">
                    <h3 className="title" data-blast="color">Lorem ipsum </h3>
                    <span className="post">role in detail</span>
                    <ul className="social">
                      <li><a href="index.html"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="index.html"><span className="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wthree-row w3-gallery cliptop-portfolio-wthree pt-lg-5" id="portfolio">
          <div className="container-fluid">
            <div className="title-desc text-center pb-3">
              <h3 className="main-title-w3pvt">portfolio</h3>
              <p>create your outstanding clean and high quality website.</p>
            </div>
            <ul className="demo row py-lg-5 py-sm-4 pb-4">
              <li className="col-lg-3 col-sm-6">
                <div className="gallery-grid1">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dogs.jpg')} alt="" />
                </div>
              </li>
              <li className="col-lg-3 col-sm-6">
                <div className="gallery-grid1">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
                </div>
              </li>
              <li className="col-lg-3 col-sm-6">
                <div className="gallery-grid1">
                <img className="img-fluid img-thumbnail" src={require('../../../assests/home/homedog.jpeg')} alt="" />
                </div>
              </li>
              <li className="col-lg-3 col-sm-6">
              <div className="gallery-grid1">
              <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dogs.jpg')} alt="" />
              </div>
            </li>
            <li className="col-lg-3 col-sm-6">
              <div className="gallery-grid1">
              <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
              </div>
            </li>
            <li className="col-lg-3 col-sm-6">
              <div className="gallery-grid1">
              <img className="img-fluid img-thumbnail" src={require('../../../assests/home/homedog.jpeg')} alt="" />
              </div>
            </li>
            <li className="col-lg-3 col-sm-6">
            <div className="gallery-grid1">
            <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dogs.jpg')} alt="" />
            </div>
          </li>
          <li className="col-lg-3 col-sm-6">
            <div className="gallery-grid1">
            <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
            </div>
          </li>
          <li className="col-lg-3 col-sm-6">
            <div className="gallery-grid1">
            <img className="img-fluid img-thumbnail" src={require('../../../assests/home/homedog.jpeg')} alt="" />
            </div>
          </li>
          <li className="col-lg-3 col-sm-6">
          <div className="gallery-grid1">
          <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dogs.jpg')} alt="" />
          </div>
        </li>
        <li className="col-lg-3 col-sm-6">
          <div className="gallery-grid1">
          <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
          </div>
        </li>
        <li className="col-lg-3 col-sm-6">
          <div className="gallery-grid1">
          <img className="img-fluid img-thumbnail" src={require('../../../assests/home/homedog.jpeg')} alt="" />
          </div>
        </li>
            </ul>
          </div>
        </section>
        <div className="testimonials py-lg-5 py-4" id="testi">
          <div className="container">
            <div className="title-desc text-center pb-3">
              <h3 className="main-title-w3pvt">Our Volunteer</h3>
              <p>Helping animals &amp; working on environmental issues.</p>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide py-lg-5" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" data-blast="borderColor"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" data-blast="borderColor" className=""></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="testimonials_grid">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Aliquyam</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="testimonials_grid my-lg-0 my-4">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Aliquyam</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="testimonials_grid">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Aliquyam</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="testimonials_grid">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Takimata</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="testimonials_grid my-lg-0 my-4">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Takimata</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="testimonials_grid">
                        <div className="testi-text text-center">
                          <p><span className="fa fa-quote-left"></span>Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet<span className="fa fa-quote-right"></span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="testi-desc">
                            <span className="fa fa-user" data-blast="color"></span>
                            <h5>Sanctus</h5>
                            <p>Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <section className="blog_w3ls pb-lg-5 pb-4" id="posts">
          <div className="container py-sm-5 py-4">
            <div className="title-desc text-center pb-sm-3 mb-lg-5">
              <h3 className="main-title-w3pvt">recent blog</h3>
              <p>Helping animals &amp; working on environmental issues.</p>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 mt-sm-0 mt-4">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#exampleModal2" data-toggle="modal" aria-pressed="false" data-target="#exampleModal2" role="button">
                    <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
                      <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>

                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="blog-title card-title font-weight-bold">
                      <a href="#exampleModal2" data-toggle="modal" aria-pressed="false" data-target="#exampleModal2" role="button">Cras ultricies ligula sed.</a>
                    </h5>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                    <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>08.10.2018</label>
                    <button type="button" className="btn btn-primary btn-pop text-black blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal2">
                      Read more
                            </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-5 mt-4">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#exampleModal3" data-toggle="modal" aria-pressed="false" data-target="#exampleModal3" role="button">
                    <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dogs.jpg')} alt="" />
                      <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="blog-title card-title font-weight-bold">
                      <a href="#exampleModal3" data-toggle="modal" aria-pressed="false" data-target="#exampleModal3" role="button">magna porta auris.</a>
                    </h5>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                    <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>02.11.2018</label>
                    <button type="button" className="btn btn-primary btn-pop text-black blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal3">
                      Read more
                            </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 mx-auto">
                <div className="card">
                  <div className="card-header p-0  position-relative">
                    <a href="#exampleModal4" data-toggle="modal" aria-pressed="false" data-target="#exampleModal4" role="button">
                    <img className="img-fluid img-thumbnail" src={require('../../../assests/home/dog3.jpeg')} alt="" />
                      <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="blog-title card-title font-weight-bold">
                      <a href="#exampleModal4" data-toggle="modal" aria-pressed="false" data-target="#exampleModal4" role="button">Cras ultricies ligula sed.</a>
                    </h5>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                    <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>10.11.2018</label>
                    <button type="button" className="btn btn-primary btn-pop text-black blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false" data-target="#exampleModal4">
                      Read more
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="abt_bottom py-lg-5 bg-theme " data-blast="bgColor">
          <div className="container py-sm-4 py-3">
            <h4 className="abt-text text-capitalize text-sm-center mb-0">Join the Mission to help World</h4>
            <p className="text-white text-sm-center ">We Move The World To Protect Animals</p>
            <div className="d-sm-flex justify-content-center">
              <a href="index.html" role="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary btn-pop text-black light-bg mt-sm-4 mt-3 ml-3 w3_pvt-link-bnr">
                make a contribution</a>
              <a href="index.html" role="button" data-toggle="modal" data-target="#exampleModal1" className="btn btn-primary btn-pop text-black light-bg mt-sm-4 mt-3 ml-3 w3_pvt-link-bnr">
                become volunteer</a>
            </div>
          </div>
        </div>
        <section className="contact-wthree py-sm-5 py-4" id="contact">
          <div className="container pt-lg-5">
            <div className="title-desc text-center pb-sm-3">
              <h3 className="main-title-w3pvt">contact us</h3>
              <p>Helping animals &amp; working on environmental issues.</p>
            </div>
            <div className="row mt-4">
              <div className="col-lg-5 text-center">
                <h5 className="cont-form" data-blast="color">get in touch</h5>
                <div className="row flex-column">
                  <div className="contact-w3">
                    <span className="fa fa-envelope-open  mb-3" data-blast="color"></span>
                    <div className="d-flex flex-column">
                      <a href="mailto:example@email.com" className="d-block">info@example1.com</a>
                      <a href="mailto:example@email.com" className="my-2 d-block">info@example2.com</a>
                      <a href="mailto:example@email.com">info@example3.com</a>
                    </div>
                  </div>
                  <div className="contact-w3 my-4">
                    <span className="fa fa-phone mb-3" data-blast="color"></span>
                    <div className="d-flex flex-column">
                      <p>+456 123 7890</p>
                      <p className="my-1">+456 123 7890</p>
                      <p>+856 123 7890</p>
                    </div>
                  </div>
                  <div className="contact-w3">
                    <span className="fa fa-home mb-3" data-blast="color"></span>
                    <address>71 Pilgrim Avenue <br />44 Shirley Ave.<br /> Goldfield Rd. Broome St, Newyork.</address>
                  </div>
                </div>

              </div>
              <div className="col-lg-7">
                <h5 className="cont-form" data-blast="color">contact form</h5>
                <div className="contact-form-wthreelayouts">
                  <form action="#" method="post" className="register-wthree">
                    <div className="form-group">
                      <label>
                        Your Name
                                </label>
                      <input className="form-control" type="text" placeholder="Johnson" name="email" required="" />
                    </div>
                    <div className="form-group">
                      <label>
                        Mobile
                                </label>
                      <input className="form-control" type="text" placeholder="xxxx xxxxx" name="email" required="" />
                    </div>
                    <div className="form-group">
                      <label>
                        Email
                                </label>
                      <input className="form-control" type="email" placeholder="example@email.com" name="email" required="" />
                    </div>
                    <div className="form-group">
                      <label>
                        Your message
                                </label>
                      <textarea placeholder="Type your message here" className="form-control"></textarea>
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="btn btn-w3layouts btn-block  bg-theme text-white w-100 font-weight-bold text-uppercase" data-blast="bgColor">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mx-auto text-center mt-lg-0 mt-4">
              <iframe className="mt-lg-4 contact-form-wthreelayouts" title="Maps" data-blast="borderColor" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798902705!2d-74.25986790365911!3d40.697670067823786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1536917325197" allowFullScreen=""></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;