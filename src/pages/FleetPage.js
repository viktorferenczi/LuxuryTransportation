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
            <div style={{ marginTop: "6rem" }}>
                <div className="fleet-banner">
                    <h4 style={{ color: '#b1955a', paddingTop:"3rem", fontSize:"3rem" }}>5 Star Fleet</h4>
                </div>
                <div className="fleet-div">
                        {listItems}
                    </div>
                </div>
                <div className="fleet-intruduction">
                    <p style={{ textAlign: 'left' }}>Elegant, comfortable, executive-level style across the board, our Sedans and SUVs are all accompanied by a professional and experienced chauffeur. Vehicle makes offered include Lincoln, Mercedes, and Chevrolet. Sedans are perfect for 3-4 passengers while SUVs may accommodate up to 7 passengers.</p>
                    <p style={{ textAlign: 'left' }}> Some vehicles have WiFi, for specific requests or further assistance choosing the right vehicle for your needs, please call our reservations team.</p>
                </div>
            <Footer/>
        </div>
    );
}