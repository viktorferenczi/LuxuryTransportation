import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ServiceChooser } from "../components/BookingPage/ServiceChooser";
import { ChoosenService } from "../components/BookingPage/ChoosenService";

import { useState } from "react";
 
export const BookingPage = () => {

    // Inputs
    const [service,setService] = useState("");
    const [car,setCar] = useState("");
    const [date,setDate] = useState("");

    return(
        <div style={{marginTop:"5rem"}}>
            <Header />
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