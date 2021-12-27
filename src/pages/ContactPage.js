import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyInfo } from "../components/ContactPage/CompanyInfo";
import { RidePlanner } from "../components/ContactPage/RidePlanner";
import { EmailSender } from "../components/ContactPage/EmailSender";


export const ContactPage = () => {
    return (
        <div style={{ marginTop: '6rem' }}>
            <Header />
            <div className="contact-banner">
                <h4 className="banner-label">Contact Information</h4>
            </div>

            <div>
                <div className="full-wide-contanct">
                    <CompanyInfo/>
                    <EmailSender />
                   
                </div>
                <div className="full-wide-planner">
                    <RidePlanner />
                </div>
            </div>

            <div className="low-wide-contact">
                <CompanyInfo />
                <RidePlanner />
                <EmailSender />
            </div>


          
            <Footer/>
        </div>
    )
}


