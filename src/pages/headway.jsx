import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import PagePathComponent from "../components/pathPage";
import HeadwayContactComponent from "../components/headway_contact";

const Headway = () => {
    return (
        <>
            <HeaderComponent/>
            <main>
                {/*<PagePathComponent pageName="Headway" />*/}
                <HeadwayContactComponent />
            </main>
            <FooterComponent/>
        </>
    );
}

export default Headway