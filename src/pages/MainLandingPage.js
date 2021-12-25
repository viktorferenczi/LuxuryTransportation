
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CarChooser } from "../components/MainLandingPage/CarChooser";
import { FounderInfo } from "../components/MainLandingPage/FounderInfo";
import { Services } from "../components/MainLandingPage/Services";

export const MainLandingPage = () => {
    return(
        <>
            <Header/>
            <FounderInfo/>
            <CarChooser/>
            <Services/>
            <Footer/>
        </>
    )
}