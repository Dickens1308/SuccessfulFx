import SliderImg3 from "../assets/img/Promo_STFX_Boarder.png";
import React from "react";

const GlobalComponent = () => {
    return <div className="uk-section uk-padding-remove-vertical uk-scrollspy-inview uk-animation-fade"
                data-uk-scrollspy="cls:uk-animation-fade; delay: 200">
        <div className="uk-container" style={{ marginTop: "40px", marginBottom: "30px" }}>
            <div className=" uk-position-relative uk-visible-toggle">
                <div className="">
                    <img className="" src={SliderImg3}
                         alt="slideshow-background" width="1210" style={{ maxHeight: "920px", borderRadius: "20px" }}
                         height="438" data-uk-img/>
                </div>
            </div>
        </div>
    </div>
}
export default GlobalComponent;