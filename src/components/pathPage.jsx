import {Link} from "react-router";

const PagePathComponent = ({pageName}) => {
    return <div className="uk-section uk-padding-remove-vertical in-monee-breadcrumb">
        <div className="uk-container">
            <div className="uk-grid">
                <div className="uk-width-1-1">
                    <ul className="uk-breadcrumb">
                        <li><Link className="uk-text-bold" to="/">Home</Link></li>
                        <li><span className="uk-text-bold">{pageName}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default PagePathComponent;