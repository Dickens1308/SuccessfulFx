const FooterComponent = () => {
    return <footer>
        <div className="uk-section uk-padding-remove-vertical uk-margin-medium-top">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 in-footer-info">
                        <div className="uk-child-width-1-1 uk-child-width-1-2@s" data-uk-grid="">
                            <div className="uk-flex uk-flex-center uk-flex-left@s">
                                <ul className="uk-subnav">
                                    <li className="uk-text-uppercase uk-visible@m"><span>need help?</span></li>
                                    <li><i className="uk-margin-small-left fas fa-phone"></i> +255 (717) 558 628</li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send?phone=255717558628"
                                           target="_blank" rel="opener noreferrer">
                                            <i className="uk-margin-small-left fas fa-comments"></i>
                                            Live Chat
                                        </a>
                                    </li>
                                    <li className="uk-visible@m"><a href="mailto:hemedsalehe1234@gmail.com"><i
                                        className="uk-margin-small-left fas fa-envelope-open-text"></i> Email</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="uk-flex uk-flex-middle uk-flex-center uk-flex-right@s">
                                <span className="uk-text-uppercase uk-visible@m">Connect</span>
                                <div className="social-media-list">
                                    <div>
                                        <a href="https://twitter.com/salehe_hemed?t=Uhys8BCMnYQnqjiiDymEdw&s=09"
                                           target="_blank"
                                           rel="opener noreferrer"
                                           className="color-twitter text-decoration-none">
                                            <i className="fab fa-twitter"></i> Twitter
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://instagram.com/mr.hemedy" target="_blank"
                                           rel="opener noreferrer"
                                           className="color-instagram text-decoration-none">
                                            <i className="fab fa-instagram"></i> Instagram
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://t.me/Hemedsalehe" target="_blank"
                                           rel="opener noreferrer"
                                           className="color-instagram text-decoration-none">
                                            <i className="fab fa-telegram"></i> Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-child-width-1-1 uk-child-width-1-4@m uk-child-width-1-2@s" data-uk-grid="">
                    <div>
                        <h4>Markets</h4>
                        <ul className="uk-list uk-link-text">
                            <li>
                                <a href="https://track.deriv.com/_7XVeSkL2EAK2vdm9PpHVCmNd7ZgqdRLk/1/" target="_blank"
                                   rel="noopener noreferrer"
                                >Share CFDs</a></li>
                            <li><a href="https://www.litefinance.org/?uid=249653505" target="_blank"
                                   rel="noopener noreferrer"
                            >Forex</a></li>
                            <li><a href="https://track.deriv.com/_7XVeSkL2EAK2vdm9PpHVCmNd7ZgqdRLk/1/" target="_blank"
                                   rel="noopener noreferrer">Indices</a></li>
                            <li><a href="https://track.deriv.com/_7XVeSkL2EAK2vdm9PpHVCmNd7ZgqdRLk/1/" target="_blank"
                                   rel="noopener noreferrer">Commodities</a></li>
                            <li><a href="https://www.litefinance.org/?uid=249653505" target="_blank"
                                   rel="noopener noreferrer">Other Markets</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Trading platforms</h4>
                        <ul className="uk-list uk-link-text">
                            <li><a href="#">Web platforms</a></li>
                            <li><a href="#">Trading apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Learn to trade</h4>
                        <ul className="uk-list uk-link-text">
                            <li><a href="#">News and trade ideas</a></li>
                            <li><a href="#">Trading strategy</a></li>
                        </ul>
                    </div>
                    <div className="in-footer-address">

                    </div>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-small">
                        <div className="uk-card uk-card-small uk-card-default uk-border-rounded uk-margin-bottom">
                            <div className="uk-card-body">
                                <div className="in-footer-copyright" data-uk-grid="">
                                    <div className="uk-width-3-4@s uk-width-1-2@m uk-text-center uk-text-left@s">
                                        <p className="copyright-text">Copyright ©2017 SuccessfulTradersFx . All
                                            Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-1 in-footer-disclaimer">
                        <p> Any reference to the advisory services refers to Capital
                            Advisors Corporation. Registration does not imply a certain level of skill or training nor
                            does it imply endorsement by the SEC.​ Past performance is not a guarantee of future return,
                            nor is it necessarily indicative of future performance. Keep in mind investing involves
                            risk.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
export default FooterComponent;