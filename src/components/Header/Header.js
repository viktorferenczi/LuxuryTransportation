import logo from '../../logo.svg';
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
                <p className="first-menu-item">Home</p>
                <p className="main-menu-item">Events</p>
                <p className="main-menu-item">Prices</p>
                <p className="main-menu-item">Booking</p>
                <p className="main-menu-item">Contact</p>
            </div>
        </div>
    );
}