import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyInfo } from "../components/ContactPage/CompanyInfo";
import { RidePlanner } from "../components/ContactPage/RidePlanner";
import { EmailSender } from "../components/ContactPage/EmailSender";
import { Helmet } from  "react-helmet";
import { Reviews } from "../components/ContactPage/Reviews";

export const ContactPage = () => {
    return (
        <div style={{ marginTop: '6rem' }}>
            <Helmet>
                <title>5 Star Luxury Transportation - Contact us!</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="Feel free to contact us anytime, we will response as soon as possible! Our customers are important to us!" />
                <meta name="keywords" content="luxury transportation, limo service, limousine service, luxury transportation Miami, limo service Miami, transportation service Miami, contact, limo contact, luxury transportation contact"></meta>        
            </Helmet>
            <Header/>
            <div className="contact-banner">
                <h4 className="banner-label">Contact</h4>
            </div>

            <div>
                <div className="full-wide-contanct">
                    <CompanyInfo />
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


