import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyInfo } from "../components/ContactPage/CompanyInfo";
import { RidePlanner } from "../components/ContactPage/RidePlanner";
import { EmailSender } from "../components/ContactPage/EmailSender";


export const ContactPage = () => {
    return(
        <div>
            <Header viewing={"Main"}/>
            <h3>Contact Information</h3>
            
            <div style={{flexDirection:"row", display:'flex'}}>
                <CompanyInfo/>
                <RidePlanner/>
                <EmailSender/>
            </div>
          
            <Footer/>
        </div>
    )
}


