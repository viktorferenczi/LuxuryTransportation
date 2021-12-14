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

    // we need to extract this data from here to somewhere safe and refact this code but its too late night for that sh*t

    //User ID    user_NI2YtL4qPeOue4aib0abR
    //Access Token de1d93e023ead83a86aef750ee23d4d7
    //Template ID template_u2b0o8d
    //Service ID service_nxyq4yu

        //init("user_NI2YtL4qPeOue4aib0abR");

        //emailjs.send('service_nxyq4yu','template_u2b0o8d', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
         ////   .then((response) => {
          //     setShow(true);
          //  }, (err) => {
           //     alert('We were unable to send your message! Please call us!');
           // });


    return(
        <div style={{marginTop:"8rem"}}>
            <Header />
            <h3 style={{ color: '#b1955a' }} >Let us provide you your unforgettable ride!</h3>
            <div style={{ display: 'inline-grid' }}>
                <ChoosenService
                    date={date}
                    service={service}
                    car={car}
                />
                <ServiceChooser
                    onSetDate={setDate}
                    onSetService={setService}
                    onSetCar={setCar}
                />
            </div>
           
           <Footer/>
        </div>
    )
}