import LazyGift from "../assets/img/in-lazy.gif";
import Image1 from "../assets/img/in-monee-5-image-1.jpg";
import Image2 from "../assets/img/in-monee-5-image-2.jpg";
import Image3 from "../assets/img/in-monee-5-image-3.jpg";
const BlogItemComponent = () => {
    return <div className="uk-width-2-3@m">
        <div className="in-blog-1">
            <article className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-5@s">
                    <span className="uk-label uk-label-warning">Markets</span>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top uk-margin-small-bottom">
                        By Hemedy Salehe
                    </p>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top">December 29, 2022</p>
                </div>
                <div className="uk-width-expand">
                    <h2><a href=""
                           className="uk-text-secondary uk-text-decoration-none">The typical U.S. household is spending
                        $445 more a month due to inflation</a></h2>
                    <img className="uk-border-rounded" src={Image1}
                         alt="The typical U.S. household is spending $445 more a month due to inflation" />
                        <p>Inflation is causing American households to spend $445 more per month buying the same items
                            they did a year ago, according to an estimate from Moody’s Analytics.</p>
                        <a href=""
                           className="uk-button uk-button-text">Continue reading<i
                            className="fas fa-chevron-right fa-xs uk-margin-small-left"></i></a>
                </div>
            </article>

            <article className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-5@s">
                    <span className="uk-label uk-label-warning">Markets</span>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top uk-margin-small-bottom">
                        By Hemedy Salehe
                    </p>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top">December 29, 2022</p>
                </div>
                <div className="uk-width-expand">
                    <h2><a href=""
                           className="uk-text-secondary uk-text-decoration-none">The typical U.S. household is spending
                        $445 more a month due to inflation</a></h2>
                    <img className="uk-border-rounded" src={Image1}
                         alt="The typical U.S. household is spending $445 more a month due to inflation" />
                    <p>Inflation is causing American households to spend $445 more per month buying the same items
                        they did a year ago, according to an estimate from Moody’s Analytics.</p>
                    <a href=""
                       className="uk-button uk-button-text">Continue reading<i
                        className="fas fa-chevron-right fa-xs uk-margin-small-left"></i></a>
                </div>
            </article>

            <article className="uk-grid-small" data-uk-grid>
                <div className="uk-width-1-5@s">
                    <span className="uk-label uk-label-warning">Markets</span>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top uk-margin-small-bottom">
                        By Hemedy Salehe
                    </p>
                    <p className="uk-text-small uk-text-muted uk-margin-small-top">December 29, 2022</p>
                </div>
                <div className="uk-width-expand">
                    <h2><a href=""
                           className="uk-text-secondary uk-text-decoration-none">The typical U.S. household is spending
                        $445 more a month due to inflation</a></h2>
                    <img className="uk-border-rounded" src={Image1}
                         alt="The typical U.S. household is spending $445 more a month due to inflation" />
                    <p>Inflation is causing American households to spend $445 more per month buying the same items
                        they did a year ago, according to an estimate from Moody’s Analytics.</p>
                    <a href=""
                       className="uk-button uk-button-text">Continue reading<i
                        className="fas fa-chevron-right fa-xs uk-margin-small-left"></i></a>
                </div>
            </article>
        </div>
        <ul className="uk-pagination uk-flex-center uk-margin-small-top"></ul>
    </div>
}
export default BlogItemComponent;