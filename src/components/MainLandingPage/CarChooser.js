import '../../App.css';

import chevrolet from "../../store/img/fleet/chevrolet/chevrolet_small.png";
import mercedes from "../../store/img/fleet/mercedes_basic/mercedes_small.png";

export const CarChooser = () => {

    return (
        <div className='its-gone-now-for-mobile car-chooser-div'>
            <div className='background-image' style={{ zIndex: "-1" }}>
                <h1>CHOOSE FROM OUR FLEET</h1>
                
            </div>
            <div style={{ position: 'absolute', marginTop: '4rem', width:'5rem', justifySelf: 'center', background: '#b1955a', height: '2rem', borderRadius: '2rem' }}>
                <a style={{ textDecoration: 'unset', color: 'white', verticalAlign:'middle' }} href="/fleet">Fleet</a>
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