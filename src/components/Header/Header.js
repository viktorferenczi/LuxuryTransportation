import logo from '../../store/img/logo.png';
import '../../App.css';

export const Header = () => {
    return(
        <div>
            <header className="header" >
                <img className="logo-image" src={logo} alt="Logo"/>
                <h3 className="header-h3" >Luxury Transportation</h3>
                <div className="header-contact">
                    <p className="contact">fivestar-inc@hotmail.com</p>
                    <p className="contact">(305) 606-0139</p>
                    <div className="social-div">
                        <p className="contact">fb</p>
                        <p className="contact">google</p>
                        <p className="contact">googlemaps</p>
                    </div>
                </div>
            </header>
            <div className="main-menu">
                <a href={"/"} className="first-menu-item">Home</a>
                {/*<a className="first-menu-item">Events</a>*/}
                <a href={"/prices"} className="main-menu-item">Prices</a>
                <a href={"/booking"} className="main-menu-item">Booking</a>
                <a href={"/contact"} className="main-menu-item">Contact</a>
            <div className="header" >
               
                <div className="main-menu">
                    <p className="first-menu-item">Home</p>
                    <p className="main-menu-item">Events</p>
                    <p className="main-menu-item">Prices</p>
                    <p className="main-menu-item">Booking</p>
                    <p className="main-menu-item">Contact</p>
                    <div className="phone-number-contact">
                        <p className="contact">(305) 606-0139</p>
                    </div>
                </div>
               
            </div>
            <div className="main-menu">
            </div>
        </div>
    );

     /*<p className="contact">fivestar-inc@hotmail.com</p>
      *  <h3 className="header-h3" >Luxury Transportation</h3>
                    <p className="contact">(305) 606-0139</p>
                    <div className="social-div">
                        <p className="contact">fb</p>
                        <p className="contact">google</p>
                        <p className="contact">googlemaps</p>
                    </div>*/
}