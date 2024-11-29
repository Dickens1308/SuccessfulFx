import LazyGift from "../assets/img/in-lazy.gif";
import MoneeIcon1 from "../assets/img/in-monee-3-icon-1.svg";
import MoneeIcon2 from "../assets/img/in-monee-3-icon-2.svg";
import MoneeIcon3 from "../assets/img/in-monee-3-icon-3.svg";
import MoneeIcon4 from "../assets/img/in-monee-3-icon-4.svg";
import MoneeIcon5 from "../assets/img/in-monee-3-icon-5.svg";
import MoneeIcon6 from "../assets/img/in-monee-3-icon-6.svg";

const ServiceComponent = () => {
    return <div className="uk-section in-monee-3">
        <div className="uk-container">
            <div className="uk-grid" data-uk-grid>
                <div className="uk-width-1-3@m uk-margin-top">
                    <h2>Why SuccessfulTradersFx is a trusted Agent</h2>
                    <p>
                        SuccessfulTradersFx is a trusted agent which provide services of fast deposits and withdrawals
                        for all brokers and wallets including :- DERIV, FRESHFOREX, LITEFINANCE, ORBEX, JUSTFOREX,
                        EXNESS,SKRILL, NETLLER, PERFECT, ASTROPAY and all CRYPTO CURRENCIES i.e usdt,bitcoin,
                        xrp,bnb,trons etc
                    </p>
                    <a className="uk-button uk-button-primary" href="/contact-us">Contact Us</a>
                </div>
                <div className="uk-width-expand@m">
                    <div className="uk-grid uk-grid-collapse uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center">
                        <div className="uk-tile uk-tile-default">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon1} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Trusted Agent</h5>
                        </div>
                        <div className="uk-tile uk-tile-default">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon2} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Fast service</h5>
                        </div>
                        <div className="uk-tile uk-tile-default">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon3} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Trading tools</h5>
                        </div>
                        <div className="uk-tile uk-tile-default">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon4} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Guide & support</h5>
                        </div>
                        <div className="uk-tile uk-tile-default uk-visible@m">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon5} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Financial support</h5>
                        </div>
                        <div className="uk-tile uk-tile-default uk-visible@m">
                            <img className="uk-margin-remove-bottom" src={LazyGift}
                                 data-src={MoneeIcon6} alt="monee-feauture" width="50" height="48"
                                 data-uk-img/>
                            <h5 className="uk-margin-small-top">Strong setups</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ServiceComponent;