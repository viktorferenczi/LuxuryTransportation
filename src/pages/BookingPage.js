import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ServiceChooser } from "../components/BookingPage/ServiceChooser";
import { ChoosenService } from "../components/BookingPage/ChoosenService";

import { useState } from "react";
import Helmet from "react-helmet";
 
export const BookingPage = () => {

    // Inputs
    const [service,setService] = useState("");
    const [car,setCar] = useState("");
    const [date,setDate] = useState("");

    return(
        <div style={{marginTop:"5rem"}}>
            <Helmet>
                <title>5 Star Luxury Transportation - Book your luxury or limousine service!</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="Book your desired luxury service in seconds and enjoy your ride in fair prices!"/>
                <meta name="keywords" content="luxury transportation, limo service, limousine service, luxury transportation Miami, limo service Miami, transportation service Miami"></meta>      
            </Helmet>
            <Header/>
            <div className='booking-page'>
                <ServiceChooser
                    onSetDate={setDate}
                    onSetService={setService}
                    onSetCar={setCar}
                />
                <div style={{alignSelf:'center'}}>
                    <ChoosenService
                        date={date}
                        service={service}
                        car={car}
                    />
                </div>
            </div>
           <Footer/>
        </div>
    )
}