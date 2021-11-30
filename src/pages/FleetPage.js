import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Link } from "react-router-dom";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import lincoln from './../store/img/fleet/lincoln/lincoln_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

import cars from '../fleet.json';

export const FleetPage = () => {

    let carList = Object.values(cars);

    carList.forEach(car => {
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
    });
    
    const listItems = carList.map( (car) =>
        <div key={car.name}>
            <img alt={car.name} src={car.imgPath}/>
            <p>{car.name}</p>
            <p>{car.year} - {car.seats}</p>
            <Link
                to={`/vehicle?id=${car.id}`}
                state={{ car }}
            >More Info</Link>
        </div>
    );


    return (
        <div>
            <Header/>
                <div style={{display:'flex',flexDirection:'row', marginTop:"8rem"}}>
                    {listItems}
                </div>
            <Footer/>
        </div>
    );
}