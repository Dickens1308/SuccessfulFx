import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import BlogItemComponent from "../components/blogItem";

const BlogPage = () => {
    return <>
        <HeaderComponent/>
        <div className="uk-section uk-margin-top">
            <div className="uk-container">
                <div className="uk-grid" data-uk-grid>
                    <BlogItemComponent />
                    <div className="uk-width-expand@m">
                        <aside className="uk-margin-medium-bottom">
                            <form name="blog-search" className="uk-search uk-search-default uk-width-1-1">
                                <a href="#" className="uk-search-icon-flip" data-uk-search-icon></a>
                                <input className="uk-input uk-border-rounded" type="search"
                                       placeholder="Search here..." />
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </>
}
export default BlogPage