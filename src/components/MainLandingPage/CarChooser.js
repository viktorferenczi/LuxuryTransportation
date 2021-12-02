import '../../App.css';

import chevrolet from "../../store/img/fleet/chevrolet/chevrolet_small.png";
import mercedes from "../../store/img/fleet/mercedes_basic/mercedes_small.png";

export const CarChooser = () => {

    return (
        <div style={{ display: "inline-grid",  height: '34rem', width:'90rem', marginBottom: '10rem', marginTop: '2rem'}}>
            <div className='background-image'>
                <h1>CHOOSE FROM OUR VEHICLES</h1>
                
            </div>
            <div style={{ position: "absolute", top: '97%', justifySelf: 'end' }}>
                <img style={{ width: "35rem", marginRight: '5rem' }} src={mercedes}></img>
            </div>
            <div style={{ position: "absolute", top: '97%' }}>
                <img style={{ width: "35rem", marginLeft: '5rem' }} src={chevrolet}></img>
            </div>
           
        </div>
    );
}