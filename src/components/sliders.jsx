import LazyGift from "../assets/img/in-lazy.gif";
import SliderImg2 from "../assets/img/in-monee-slideshow-4.jpg";
import SliderImg3 from "../assets/img/in-monee-slideshow-3.jpg";
import CustomerImg from "../assets/img/in-monee-slideshow-3-clients.png";
import CustomerImg2 from "../assets/img/in-monee-slideshow-4-man.png";
import React from "react";

const SliderComponent = () => {
    return <div className="uk-section uk-padding-remove-vertical uk-scrollspy-inview uk-animation-fade"
                data-uk-scrollspy="cls:uk-animation-fade; delay: 200">
        <div className="uk-container">
            <div className="in-slideshow uk-position-relative uk-visible-toggle" data-uk-slideshow>
                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-height-1-1 uk-light monee-custom-slideshow" data-uk-grid>
                            <img className="in-img-stretch"  src={LazyGift} data-src={SliderImg3}
                                 alt="slideshow-background" width="1210"
                                 height="438" data-uk-img/>
                            <div className="uk-position-center-left uk-width-expand uk-height-1-1 uk-overlay">
                                <div
                                    className="uk-position-center-left uk-padding uk-text-center uk-text-left@m monee-slide3-text">
                                    <div className="uk-animation-slide-top-small">
                                        <h1 className="uk-margin-remove-bottom">Successful Traders Fx</h1>
                                        <p className="uk-text-lead uk-margin-remove-top uk-visible@s">
                                            Discover the shared joy and experiences awaiting you <br />
                                            on our platform, just as countless others have <br /> already relished.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-position-center-right uk-width-auto uk-height-1-1 uk-visible@m">
                                <img className="uk-animation-slide-bottom-small" src={LazyGift} data-src={CustomerImg} alt="slideshow-image"
                                     width="500"
                                     height="438"
                                     data-uk-img/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-height-1-1 uk-light monee-custom-slideshow" data-uk-grid>
                            <img className="in-img-stretch" src={LazyGift}
                                 data-src={SliderImg2} alt="slideshow-background" width="1210"
                                 height="438" data-uk-img/>
                            <div className="uk-position-center-left uk-width-1-2@m uk-visible@m">
                                <div className="uk-text-right">
                                    <img className="uk-animation-slide-bottom-small" data-src={CustomerImg2}
                                         src={LazyGift}
                                         alt="slideshow-image-2" width="450"
                                         height="438" data-uk-img/>
                                </div>
                            </div>
                            <div className="uk-position-center-right uk-width-1-2@m uk-overlay">
                                <div
                                    className="uk-text-center uk-text-left@m monee-slide4-text uk-animation-slide-top-small">
                                    <h1 className="uk-margin-remove-bottom">Trade your way</h1>
                                    <p className="uk-text-lead uk-margin-small-top uk-visible@m">Become the trader you
                                        want to be with our next generation platform technology and personal client
                                        service.</p>
                                    <div className="uk-flex uk-flex-center@s uk-flex-left@m uk-margin-top uk-visible@s">
                                        <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe?utm_source=www.metatrader5.com&utm_campaign=download"
                                           target="_blank" rel="opener noreferrer"
                                           className="uk-button in-button-app uk-margin-small-right">
                                            <i className="fab fa-microsoft fa-2x"></i>
                                            <span className="wrapper">Download for<br/><span>Windows</span></span>
                                        </a>
                                        <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg?utm_source=www.metatrader5.com&utm_campaign=download.mt5.macos"
                                           target="_blank" rel="opener noreferrer" className="uk-button in-button-app">
                                            <i className="fab fa-apple fa-2x"></i>
                                            <span className="wrapper">Download for<br/><span>MacOS</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="uk-container uk-light">
                    <ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-right"></ul>
                </div>
            </div>
        </div>
    </div>
}
export default SliderComponent;