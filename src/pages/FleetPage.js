import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Link } from "react-router-dom";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import cadillac from './../store/img/fleet/cadillac/cadillac_xts_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

import cars from '../fleet.json';
import Helmet from "react-helmet";

export const FleetPage = () => {

    let carList = Object.values(cars);

    carList.forEach(car => {

        let imageTag;

        switch (car.imgPath) {
            case "chevrolet":
                car.imgPath = chevrolet;
                break;
            case "cadillac":
                car.imgPath = cadillac;
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

        if (car.id > 1 && car.id < 4) {
            imageTag = <img style={{ width: '80%', marginBottom: '2.3rem' }} alt={car.name} src={car.imgPath} />

        } else if (car.id == 4) {
            imageTag = <img style={{ width: '80%' }} alt={car.name} src={car.imgPath} />
        } else {
            imageTag = <img style={{ width: '80%', marginBottom: '1.3rem'}} alt={car.name} src={car.imgPath} />
        }

        car.imageTag = imageTag;

    });


    
    const listItems = carList.map((car) =>
        <div key={car.name} className="car-card">
            <Link
                to={`/vehicle?id=${car.id}`}
                state={{ car }}
                style={{ textDecoration: 'none' }}
            >            
                {car.imageTag}
                <p>{car.name}</p>
                <p>{car.year} - {car.seats}</p>
            </Link>
        </div>
    );


    return (
        <div>
            <Helmet>
                <title>5 Star Luxury Transportation - Luxury vehicles for your needs!</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="Well equipped and luxury vehicles, 3-12 seats vehicles to choose from! Take a look at our fleet!" />
                <meta name="keywords" content="luxury transportation, limo service, limousine service, luxury transportation Miami, limo service Miami, transportation service Miami, luxury transport fleet, transport fleet, limo fleet"></meta>       
            </Helmet>
            <Header/>
            <div style={{ marginTop: "10rem" }}>
                
                <div className="fleet-div">
                        {listItems}
                    </div>
                </div>
                <div className="fleet-intruduction">
                    <p style={{ textAlign: 'left' }}>Elegant, comfortable, executive-level style across the board, our Sedans and SUVs are all accompanied by a professional and experienced chauffeur. Vehicle makes offered include Lincoln, Cadillac, Mercedes, and Chevrolet. Sedans are perfect for 3 passengers while SUVs may accommodate up to 6 passengers.</p>
                    <p style={{ textAlign: 'left' }}> Some vehicles have WiFi, for specific requests or further assistance choosing the right vehicle for your needs, please call our reservations team.</p>
                </div>
            <Footer/>
        </div>
    );
}