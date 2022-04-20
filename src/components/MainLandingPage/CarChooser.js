import '../../App.css';

import chevrolet from "../../store/img/fleet/chevrolet/chevrolet_small.png";
import mercedes from "../../store/img/fleet/mercedes_basic/mercedes_small.png";

import { Button } from '@mui/material';

export const CarChooser = () => {

    return (
        <div className='its-gone-now-for-mobile car-chooser-div'>
            <div className='background-image' style={{ zIndex: "-1", borderStyle:'solid', borderWidth:5, borderColor:'black' }}>
                <h1 style={{color:'#b1955a', fontWeight:800}}>CHOOSE FROM OUR FLEET</h1>
            </div>

            <div className="main-page-fleet-button-div" >
                <Button href='/fleet' className='main-page-fleet-button-div'  variant="contained" style={{backgroundColor:'#b1955a'}}>get started</Button>
            </div>
            <div className="car-mercedes-div" >
                <img className="car-mercedes-img" src={mercedes}></img>
            </div>
            <div className="car-chevrolet-div" >
                <img className="car-chevrolet-img"src={chevrolet}></img>
            </div>
           
        </div>
    );
}