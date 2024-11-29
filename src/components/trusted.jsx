import FeedbackImg from "../assets/img/feedback.jpg";
import LazyGift from "../assets/img/in-lazy.gif";

const TrustedComponent = () => {
    return <div className="uk-section uk-margin-small-bottom in-monee-11">
        <div className="uk-container">
            <div className="uk-grid">
                <div className="uk-width-auto@m uk-width-medium@s">
                    <img className="uk-border-rounded uk-margin-small-top img-shadow" src={LazyGift}
                         data-src={FeedbackImg} alt="monee-image-1" width="420" height="540" data-uk-img />
                </div>
                <div className="uk-width-expand@s uk-flex uk-flex-middle uk-margin-top">
                    <div className="uk-margin-large-left">
                        <h2 className="uk-margin-remove-bottom">Our Service Testimonials</h2>
                            <hr />
                            <h4 className="uk-margin-remove-top uk-margin-remove-bottom uk-visible@m">
                                We’re proud of our reputation as a fair and trusted agent, and we work hard to
                                ensure we’re always improving our services.
                            </h4>
                            <p className="uk-margin-small-top uk-margin-bottom uk-visible@m">
                               As a result, we’ve been consistently recognised by our industry and have won the
                                highest accolades from clients for our  platform and service.
                            </p>
                            <h4 className="uk-margin-remove-bottom">
                                We always work hard to ensure we’re always improving our services to our clients.
                            </h4>
                            <p className="uk-margin-small-top uk-margin-bottom">
                                To ensure we’re always improving our services to our clients, we’ve been
                                consistently using best strategies in forex market.
                            </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TrustedComponent;