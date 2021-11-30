import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer"
import { useLocation } from "react-router";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import lincoln from './../store/img/fleet/lincoln/lincoln_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

import fleet from '../fleet.json';

export const VehiclePage = () => {
    const location = useLocation()
    const carId = location.search.split("=")[1];
  
    let carList = Object.values(fleet);
    let displayedCar = null;

    carList.forEach(car => {
        if (car.id == carId) {

            switch (car.imgPath) {
                case "chevrolet":
                    car.imgPath = chevrolet;
                    break;
                case "lincoln":
                    car.imgPath = lincoln;
                    break;
                case "mercedes_basic":
                    car.imgPath = mercedes_basic;
                    break;
                case "mercedes_premium":
                    car.imgPath = mercedes_premium;
                    break;
                default:
                    break;
            }

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