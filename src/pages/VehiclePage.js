import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer"
import { useLocation } from "react-router";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import lincoln from './../store/img/fleet/lincoln/lincoln_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

import fleet from '../fleet.json';
import { PhotoGallery } from "../components/VehiclePage/PhotoGallery";

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

    const handleAnchorClick = () => {
        let intCarId = parseInt(carId);
        
        if(intCarId+1 == 5) {
            window.location= "/vehicle?id=1";
        } else {
            window.location= "/vehicle?id=" + (intCarId+1);
        }
    }

    return(
        <div style={{marginTop:'9rem'}}>
            <Header/>
            <div style={{display:'flex',flexDirection:'row'}}>
                <PhotoGallery displayedCar={displayedCar}/>
                <div className={'vehicle-info'}>
                    <p className={"vehicle-name"} style={{fontSize:"2rem"}}>{displayedCar.name}</p>

                    <div style={{display:'flex',flexDirection:'column'}}>
                    <p className={"vehicle-name"}>Year</p>
                    <p>{displayedCar.year}</p>
                    </div>

                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <p className={"vehicle-name"}>Seats</p>
                    <p> {displayedCar.seats}</p>
                    </div>

                    <div style={{display:'flex',flexDirection:'column'}}>
                    <p className={"vehicle-name"}>Equipment</p>
                    <p>{displayedCar.carInfo}</p>
                    </div>
                    <a onClick={handleAnchorClick}>Next vehicle -&gt;</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}