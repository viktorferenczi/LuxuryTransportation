import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer"
import { useLocation } from "react-router";

import fleet from '../fleet.json';

export const VehiclePage = () => {
    const location = useLocation()
    const carId = location.search.split("=")[1];
  
    let carList = Object.values(fleet);
    let displayedCar = null;

    carList.forEach(car => {
        if(car.id == carId){
            displayedCar = car;
        }
    });

    if(!displayedCar){
        window.location.href = "/";
    }

    return(
        <div style={{marginTop:'9rem'}}>
            <Header/>
            <img src={displayedCar.imgPath}/>
            <p>{displayedCar.name}</p>
            <p>{displayedCar.year}</p>
            <p>{displayedCar.seats}</p>
            <p>{displayedCar.carInfo}</p>
            <Footer/>
        </div>
    )
}