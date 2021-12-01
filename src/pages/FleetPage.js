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

        let imageTag;

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

        if (car.id > 1) {
            imageTag = <img style={{ width: '80%', marginBottom: '0.8rem' }} alt={car.name} src={car.imgPath} />

        } else {
            imageTag = <img style={{ width: '80%'}} alt={car.name} src={car.imgPath} />
        }

        car.imageTag = imageTag;

    });


    
    const listItems = carList.map((car) =>
        <div key={car.name} className="car-card">
            {car.imageTag}
            <p>{car.name}</p>
            <p>{car.year} - {car.seats}</p>
            <Link className="btn more-info-button"
                to={`/vehicle?id=${car.id}`}
                state={{ car }}
            >More Info</Link>
        </div>
    );


    return (
        <div>
            <Header />
            <div>
                <div className="fleet-div">
                        {listItems}
                    </div>
                </div>
            <Footer/>
        </div>
    );
}