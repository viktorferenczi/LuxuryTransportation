
import Helmet from "react-helmet";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CarChooser } from "../components/MainLandingPage/CarChooser";
import { FounderInfo } from "../components/MainLandingPage/FounderInfo";
import { Services } from "../components/MainLandingPage/Services";

export const MainLandingPage = () => {
    return(
        <>
            <Helmet>
                <title>5 Star Luxury Transportation - Luxury, Limousine service in Miami</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="Luxury and Limousine services, transportations in Miami. Choose a vehicle from our fleet, and book it in a fair price today!" />
                <meta name="keywords" content="luxury transportation, limo service, limousine service, luxury transportation Miami, limo service Miami, transportation service Miami"></meta> 
            </Helmet>
            <Header/>
            <FounderInfo/>
            <CarChooser/>
            <Services/>
            <Footer/>
        </>
    )
}