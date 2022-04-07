import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer"
import { useLocation } from "react-router";

import chevrolet from './../store/img/fleet/chevrolet/chevrolet_small.png';
import cadillac from './../store/img/fleet/cadillac/cadillac_xts_small.png';
import mercedes_basic from './../store/img/fleet/mercedes_basic/mercedes_small.png';
import mercedes_premium from './../store/img/fleet/mercedes_premium/mercedes_small.png';

import fleet from '../fleet.json';
import { PhotoGallery } from "../components/VehiclePage/PhotoGallery";
import Helmet from "react-helmet";
import { Button } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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

            displayedCar = car;
        }
    });

    if(!displayedCar){
        window.location.href = "/";
    }

    const handleNextButton = () => {
        let intCarId = parseInt(carId);
        window.location= "/vehicle?id=" + (intCarId+1);
    }

    const handlePrevButton = () => {
        let intCarId = parseInt(carId);
        window.location= "/vehicle?id=" + (intCarId-1);
    }

    const handleBooking = () => {
        window.location = "/booking?id=" + carId;
    }

    const listItems = displayedCar.carInfo.split("-").map((element) =>
        <p>{element}</p> 
    );

    return(
        <div style={{marginTop:'7rem'}}>
            <Helmet>
                <title>5 Star Luxury Transportation - Choose your luxury vehicle!</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="Take a look at our well equipped luxury car! Book it easily and enjoy your ride!" />
                <meta name="keywords" content="luxury transportation, limo service, limousine service, luxury transportation Miami, limo service Miami, transportation service Miami"></meta>
            </Helmet>
            <Header location="vehicle"/>
            <div className="vehicle-main-div">
                <PhotoGallery displayedCar={displayedCar}/>
                <Card className="vehicle-info" sx={{backgroundColor:"#37393d"}}>
                    <CardContent>
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
                           
                            {listItems}
                        </div>
                    </CardContent>

                    <CardActions style={{justifyContent:'center'}}>
                        
                        {carId != 1 ? <Button onClick={handlePrevButton}  variant="contained" style={{backgroundColor:'#b1955a'}}>Previous vehicle</Button> : <></> }
                        {carId != 4 ? <Button onClick={handleNextButton}  variant="contained" style={{backgroundColor:'#b1955a'}}>Next vehicle</Button> : <></> }  
                        
                       
                        <Button onClick={handleBooking}  variant="contained" style={{backgroundColor:'green'}}>Book this vehicle</Button>
                    </CardActions>
                </Card>
            </div>
            <Footer/>
        </div>
    )
}