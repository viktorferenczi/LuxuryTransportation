import '../../App.css';

import chevrolet from "../../store/img/fleet/chevrolet/chevrolet_small.png";
import mercedes from "../../store/img/fleet/mercedes_basic/mercedes_small.png";

export const CarChooser = () => {

    return (
        <div className='its-gone-now-for-mobile car-chooser-div'>
            <div className='background-image' style={{ zIndex: "-1" }}>
                <h1>CHOOSE FROM OUR FLEET</h1>
                <a href="/fleet">Fleet button</a>
            </div>
            <div style={{ position: "absolute", top: '97%', justifySelf: 'end', zIndex: '-1' }}>
                <img style={{ width: "35rem", marginRight: '5rem' }} src={mercedes}></img>
            </div>
            <div style={{ position: "absolute", top: '97%', zIndex: '-1' }}>
                <img style={{ width: "35rem", marginLeft: '5rem' }} src={chevrolet}></img>
            </div>
           
        </div>
    );
}