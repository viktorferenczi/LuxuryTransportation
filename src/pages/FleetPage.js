import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import lincoln from './../store/img/fleet/lincoln/lincoln_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

export const FleetPage = () => {

    let carList = [
        {
            name:'CHEVROLET SUBURBAN',
            year: '2020',
            seats: '6 seats',
            imgPath: chevrolet,
        },
        {
            name:'MERCEDES SPRINTER',
            year: '2020',
            seats: '6 seats',
            imgPath:mercedes_basic
        },
        {
            name:'MERCEDES SPRINTER EXECUTIVE',
            year: '2020',
            seats: '13 seats',
            imgPath:mercedes_basic
        },
        {
            name:'LINCOLN MKZ SEDAN',
            year: '2020',
            seats: '6 seats',
            imgPath: lincoln
        },
    ]

    
    const listItems = carList.map( (car) =>
        <div key={car.name}>
            <img alt={car.name} src={car.imgPath}/>
            <p>{car.name}</p>
            <p>{car.year} - {car.seats}</p>
            <a href="/vehicle">More Info</a>
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