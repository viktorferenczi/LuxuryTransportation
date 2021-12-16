import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyInfo } from "../components/ContactPage/CompanyInfo";
import { RidePlanner } from "../components/ContactPage/RidePlanner";
import { EmailSender } from "../components/ContactPage/EmailSender";


export const ContactPage = () => {
    return (
        <div style={{ marginTop: '6rem' }}>
            <Header />
            <div className="contact-banner"> </div>
            <h3>Contact Information</h3>

            <div style={{ flexDirection: "row", display: 'inline-grid' }}>
                <CompanyInfo/>
                <RidePlanner/>
                <EmailSender/>
            </div>
          
            <Footer/>
        </div>
    )
}


