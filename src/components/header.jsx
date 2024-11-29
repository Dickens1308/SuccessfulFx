import {Link} from 'react-router';
import Logo from '../assets/img/successfultradersfx-logo.png';
import ForexComponent from "./forex";

const HeaderComponent = () => {
    return <header>
        <ForexComponent />
        <div className="uk-section uk-padding-remove-vertical">
            <nav className="uk-navbar-container uk-navbar-transparent"
                 data-uk-sticky="show-on-up: true; top: 20; bottom: 20; animation: uk-animation-fade">
                <div className="uk-container" data-uk-navbar>
                    <div className="uk-navbar-left uk-width-1-1 uk-flex uk-flex-between">
                        <Link className="uk-navbar-item uk-logo" to="/">
                            <img src={Logo} alt="logo" width="120" height="54"/>
                        </Link>
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/headway">Headway</a></li>
                            <li><Link to="/blogs">Blog</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                    <div className="uk-navbar-item" hidden>
                            <div className="in-optional-nav">
                                <Link to="/login" className="uk-button uk-button-small uk-button-default">
                                    Login<i className="fas fa-right-to-bracket"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="uk-navbar-item in-mobile-nav uk-hidden@m">
                            <a className="uk-button" href="#modal-full" data-uk-toggle="" role="button">
                                <i className="fas fa-bars"></i></a>
                            <div id="modal-full" className="uk-modal-full uk-modal" data-uk-modal="">
                                <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
                                     data-uk-height-viewport="" role="dialog" aria-modal="true">
                                    <a className="uk-modal-close-full uk-button">
                                        <i className="fas fa-times"></i>
                                    </a>

                                    <div className="uk-width-large uk-padding-large">
                                        <ul className="uk-nav-default uk-nav" data-uk-nav="">
                                            <li className="uk-parent">
                                                <a href="/" role="button" aria-haspopup="true" id="uk-nav-33-title-0"
                                                   aria-controls="uk-nav-33-content-0" aria-expanded="false"
                                                   aria-disabled="false">
                                                    Home
                                                </a>
                                            </li>
                                            <li><a href="/headway">Headway</a></li>
                                            <li><a href="/blogs">Blog</a></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
}
export default HeaderComponent;