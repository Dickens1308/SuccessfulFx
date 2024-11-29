import HeadwayLogo from "../assets/img/headway.jpeg";

const HeadwayContactComponent = () => {
    return <div className="uk-section">
        <div className="uk-container">
            <img src={HeadwayLogo} alt="logo" width="250" height="54"/>
            <div className="uk-grid" data-uk-grid="">
                <div className="uk-width-3-5@m">
                    <h1 className="uk-margin-remove-bottom">Headway Service</h1>
                    <p className="uk-text-lead uk-text-muted uk-margin-small-top">Do not hesitate to reach out. Just
                        fill in the contact form here and we’ll be sure to reply as fast as possible.</p>
                    <div className="uk-grid-divider uk-child-width-1-2@m uk-child-width-1-2@s uk-margin-medium-top"
                         data-uk-grid="">
                        <div>
                            <div className="uk-flex uk-flex-middle uk-margin">
                                <div className="in-icon-wrap circle small primary-color uk-margin-small-right">
                                    <i className="fas fa-envelope fa-sm"></i>
                                </div>
                                <div>
                                    <a style={{textDecoration: 'none', color: '#8F8F8F'}} className="uk-margin-remove"
                                       href="mailto:Hemedsalehe79@gmail.com">
                                        <p className="uk-margin-remove">Hemedsalehe79@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                            <div className="uk-flex uk-flex-middle uk-margin">
                                <div className="in-icon-wrap circle small primary-color uk-margin-small-right">
                                    <i className="fas fa-phone fa-sm"></i>
                                </div>
                                <div>
                                    <p className="uk-margin-remove">+255 (717) 558 628</p>
                                </div>
                            </div>
                            <div className="uk-flex uk-flex-middle uk-margin">
                                <div className="in-icon-wrap circle small primary-color uk-margin-small-right">
                                    <i className="fa-brands fa-telegram fa-xl"></i>
                                </div>
                                <div>
                                    <a style={{textDecoration: 'none', color: '#8F8F8F'}} className="uk-margin-remove"
                                       href="https://t.me/Hemedsalehe">
                                        <p className="uk-margin-remove">@Hemedsalehe</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-flex uk-flex-middle uk-margin">
                        <div className="in-icon-wrap circle small primary-color uk-margin-small-right">
                            <i className="fas fa-map-marker-alt fa-sm"></i>
                        </div>
                        <div data-uk-lightbox="">
                            <p className="uk-margin-remove">
                                Dar es salaam, Tanzania
                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253568.3308232511!2d39.0891402325992!3d-6.769222384026319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1692770210983!5m2!1sen!2stz"
                                   data-caption="Google Maps" datatype="iframe">
                                    <span className="uk-label uk-label-warning uk-margin-small-left uk-border-rounded">
                                    View on Map
                                </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="uk-width-expand@m">
                    <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                        <form id="contact-form" className="uk-form uk-grid-small uk-margin-top uk-margin-bottom"
                              data-uk-grid="">
                            <div className="uk-width-1-1">
                                <input className="uk-input uk-border-rounded" id="name" name="name" type="text"
                                       placeholder="Full name"/>
                            </div>
                            <div className="uk-width-1-1">
                                <input className="uk-input uk-border-rounded" id="email" name="email" type="email"
                                       placeholder="Email address"/>
                            </div>
                            <div className="uk-width-1-1">
                                <input className="uk-input uk-border-rounded" id="subject" name="subject" type="text"
                                       placeholder="Subject"/>
                            </div>
                            <div className="uk-width-1-1">
                                <textarea className="uk-textarea uk-border-rounded" id="message" name="message" rows="6"
                                          placeholder="Message"></textarea>
                            </div>
                            <div className="uk-width-1-1">
                                <button className="uk-width-1-1 uk-button uk-button-primary uk-border-rounded"
                                        id="sendemail" type="submit" name="submit">Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default HeadwayContactComponent;