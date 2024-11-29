const ForexComponent = () => {
    return <div className="uk-section in-monee-4">
        <div className="uk-container">
            <div className="uk-grid">
                <div className="uk-width-1-1">
                    <div className="uk-card" style={{ "backgroundColor": "#4D8BDD" }}>
                        <div className="uk-card-body">
                                <div className="uk-width-1-1@m">
                                    <div className="monee-price-ticker uk-position-bottom">
                                        <div className="uk-position-relative uk-visible-toggle" tabIndex="-1"
                                             data-uk-slider="autoplay: true" data-autoplay-interval="3000">
                                            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-2@s">
                                                <li>
                                                    XAUUSD <span className="uk-label uk-label-success"><i
                                                    className="fas fa-caret-up"></i> 1478.81  (+0.28%)</span>
                                                </li>
                                                <li>
                                                    GBPUSD <span className="uk-label uk-label-danger"><i
                                                    className="fas fa-caret-down"></i> 1.3191  (-1.07%)</span>
                                                </li>
                                                <li>
                                                    EURUSD <span className="uk-label uk-label-danger"><i
                                                    className="fas fa-caret-down"></i> 1.1159  (-0.11%)</span>
                                                </li>
                                                <li>
                                                    USDJPY <span className="uk-label uk-label-success"><i
                                                    className="fas fa-caret-up"></i> 109.59  (+0.05%)</span>
                                                </li>
                                                <li>
                                                    USDCAD <span className="uk-label uk-label-success"><i
                                                    className="fas fa-caret-up"></i> 1.3172  (+0.18%)</span>
                                                </li>
                                                <li>
                                                    USDCHF <span className="uk-label uk-label-success"><i
                                                    className="fas fa-caret-up"></i> 0.9776  (+0.06%)</span>
                                                </li>
                                                <li>
                                                    AUDUSD <span className="uk-label uk-label-danger"><i
                                                    className="fas fa-caret-down"></i> 0.67064  (-0.08%)</span>
                                                </li>
                                                <li>
                                                    GBPJPY <span className="uk-label uk-label-success"><i
                                                    className="fas fa-caret-up"></i> 141.91  (+0.12%)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ForexComponent;