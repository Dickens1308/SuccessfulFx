import LazyGift from "../assets/img/in-lazy.gif";
import Image1 from "../assets/img/in-monee-5-image-1.jpg";
import Image2 from "../assets/img/in-monee-5-image-2.jpg";
import Image3 from "../assets/img/in-monee-5-image-3.jpg";
const BlogComponent = () => {
    return <div className="uk-section in-monee-5">
        <div className="uk-container">
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center"
                 data-uk-grid>
                <div className="uk-width-1-1">
                    <h2>Stay ahead of the curve</h2>
                </div>
                <div className="uk-transition-toggle">
                    <div className="uk-inline-clip">
                        <img className="uk-border-rounded uk-margin-remove-bottom uk-width-1-1" src={LazyGift}
                             data-src={Image1} alt="monee-image1" width="340" height="160"
                             data-uk-img />
                            <div className="uk-position-small uk-position-bottom-right">
                                <a href="/blogs/testing"
                                   className="uk-icon-button fas fa-link fa-sm uk-transition-slide-right-small"></a>
                            </div>
                    </div>
                    <h3 className="uk-margin-top uk-margin-remove-bottom">Trading guides</h3>
                    <p className="uk-margin-small-top">From technical analysis and risk management to market psychology,
                        these guides are ideal for traders of all levels.</p>
                </div>
                <div className="uk-transition-toggle">
                    <div className="uk-inline-clip">
                        <img className="uk-border-rounded uk-margin-remove-bottom uk-width-1-1" src={LazyGift}
                             data-src={Image2} alt="monee-image2" width="340" height="160"
                             data-uk-img />
                            <div className="uk-position-small uk-position-bottom-right">
                                <a href="/blogs/testing"
                                   className="uk-icon-button fas fa-link fa-sm uk-transition-slide-right-small"></a>
                            </div>
                    </div>
                    <h3 className="uk-margin-top uk-margin-remove-bottom">Daily market commentary</h3>
                    <p className="uk-margin-small-top">Know what the market is thinking. Our in-house market analysts
                        explain all you need to know for the day ahead.</p>
                </div>
                <div className="uk-transition-toggle uk-visible@m">
                    <div className="uk-inline-clip">
                        <img className="uk-border-rounded uk-margin-remove-bottom uk-width-1-1" src={LazyGift}
                             data-src={Image3} alt="monee-image3" width="340" height="160"
                             data-uk-img />
                            <div className="uk-position-small uk-position-bottom-right">
                                <a href="/blogs/testing"
                                   className="uk-icon-button fas fa-link fa-sm uk-transition-slide-right-small"></a>
                            </div>
                    </div>
                    <h3 className="uk-margin-top uk-margin-remove-bottom">Breaking news & analysis</h3>
                    <p className="uk-margin-small-top">Breaking market news, important economic events, key technical
                        levels to watch. Find it all in our news section.</p>
                </div>
            </div>
        </div>
    </div>
}
export default BlogComponent;