import LazyGift from "../assets/img/in-lazy.gif";
import WindowsImg from "../assets/img/in-monee-2-platform-1.svg";
import AppleImg from "../assets/img/in-monee-2-platform-2.svg";
import AndroidImg from "../assets/img/in-monee-2-platform-3.svg";
import MoneBg from "../assets/img/in-monee-2-background.png";

const DownloadsComponent = () => {
    return <div className="uk-section in-monee-2">
        <div className="uk-container">
            <div className="uk-grid">
                <div className="uk-width-1-1">
                    <div
                        className="uk-card uk-card-default uk-background-center-right uk-background-contain uk-background-image@s"
                        style={{"backgroundImage": `url(${MoneBg})`}}>
                        <div className="uk-card-body">
                            <div className="uk-grid uk-margin-small-top uk-margin-small-bottom">
                                <div className="uk-width-1-1 uk-width-3-5@s uk-width-2-5@m uk-margin-small-left">
                                    <div className="uk-flex uk-flex-left uk-margin-bottom">
                                        <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4setup.exe?utm_source=www.metatrader4.com&utm_campaign=download"
                                           target="_blank" rel="noopener noreferrer"
                                        >
                                            <span className="uk-margin-medium-right">
                                            <img src={LazyGift} data-src={WindowsImg}
                                                 alt="monee-windows" width="33" height="38" data-uk-img/>
                                        </span>
                                        </a>
                                        <a href="https://download.mql5.com/cdn/mobile/mt4/ios?hl=en&utm_source=www.metatrader4.com&utm_campaign=install.metaquotes"
                                           target="_blank" rel="noopener noreferrer">
                                           <span className="uk-margin-medium-right">
                                              <img src={LazyGift} data-src={AppleImg}
                                                   alt="monee-apple" width="33" height="38" data-uk-img/>
                                           </span>
                                        </a>
                                        <a href="https://download.mql5.com/cdn/mobile/mt4/android?utm_source=www.metatrader4.com&utm_campaign=install.metaquotes"
                                           target="_blank" rel="noopener noreferrer">
                                             <span>
                                                 <img src={LazyGift} data-src={AndroidImg}
                                                      alt="monee-android" width="33" height="38" data-uk-img/>
                                             </span>
                                        </a>
                                    </div>
                                    <a href="https://www.metatrader4.com/en/download" style={{textDecoration: "none"}}
                                       target="_blank" rel="noopener noreferrer">
                                        <h2 className="uk-margin-small-top uk-margin-remove-bottom">
                                            Download MetaTrader 4 & 5
                                        </h2>
                                    </a>
                                    <p className="uk-margin-small-top">
                                        MetaTrader 4 & 5 is the most popular trading platform for forex traders due to
                                        its ease of use.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default DownloadsComponent;