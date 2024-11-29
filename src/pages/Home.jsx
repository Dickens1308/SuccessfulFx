import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import SliderComponent from "../components/sliders";
import DownloadsComponent from "../components/downloads";
import ServiceComponent from "../components/services";
import BlogComponent from "../components/blogs";
import TrustedComponent from "../components/trusted";
import GlobalComponent from "../components/global";

const HomePage = () => {
    return <>
        <HeaderComponent/>
        <main>
            <SliderComponent/>
            <ServiceComponent/>
            <TrustedComponent/>
            <GlobalComponent/>
            <BlogComponent/>
            <DownloadsComponent/>
        </main>
        <FooterComponent/>
    </>
}
export default HomePage