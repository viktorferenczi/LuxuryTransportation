import '../../App.css';
import logo from '../../store/img/logo.png'

export const Footer = () => {
    return(
        <div style={{backgroundColor:'gray'}}>
          <img style={{width:200, height:100}} src={logo}/>
            <p style={{color:'white'}}>© 2021 5 Star Luxury Transportation. All Rights Reserved.</p>
            <p style={{color:"darkgray"}}>AVSoftware</p>
        </div>
    );
}