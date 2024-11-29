import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import PagePathComponent from "../components/pathPage";
import ContactUsComponent from "../components/contactus";

const ContactPage = () => {
    return <>
        <HeaderComponent/>
        <main>
            <PagePathComponent pageName="Contact" />
            <ContactUsComponent />
        </main>
        <FooterComponent/>
    </>
}
export default ContactPage