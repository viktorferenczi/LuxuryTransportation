import '../../App.css';

import chevrolet from "../../store/img/fleet/chevrolet/chevrolet_small.png";
import mercedes from "../../store/img/fleet/mercedes_basic/mercedes_small.png";

export const CarChooser = () => {

    return (
        <div style={{ display: "inline-grid" }}>
            <div className='background-image'>
                <h1>CHOOSE FROM OUR VEHICLES</h1>
                <img src={chevrolet}></img>
                <img src={mercedes}></img>
            </div>
        </div>
    );
}