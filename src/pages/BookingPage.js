import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ServiceChooser } from "../components/BookingPage/ServiceChooser";
 
export const BookingPage = () => {
    return(
        <div style={{marginTop:"8rem"}}>
            <Header/>
            <p>booking</p>
            <ServiceChooser/>
            <Footer/>
        </div>
    )
}