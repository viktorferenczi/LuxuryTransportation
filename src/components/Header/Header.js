import logo from '../../store/img/logo.png';
import '../../App.css';

export const Header = () => {
    return (
        <div>
            <header className="header" >
                
                <div className="main-menu">
                    <img className="logo-image" src={logo} alt="Logo" />
                    <a href={"/"} className="first-menu-item">Home</a>
                    {/*<a className="first-menu-item">Events</a>*/}
                    <a href={"/prices"} className="main-menu-item">Prices</a>
                    <a href={"/booking"} className="main-menu-item">Booking</a>
                    <a href={"/contact"} className="main-menu-item">Contact</a>
                    <div className="phone-number-contact">
                        <p className="contact">
                            <i class="fa fa-phone phone-icon" aria-hidden="true"></i>
                            (305) 606-0139
                        </p>
                    </div>

                    <div className="social-div" >
                        <i className="fa fa-facebook-square fa-lg icon" aria-hidden="true"></i>
                        <i className="fa fa-google fa-lg icon" aria-hidden="true"></i>
                        <i className="fa fa-map-marker fa-lg icon" aria-hidden="true"></i>
                    </div> 
                    <div>
                        <p className="email" >fivestar-inc@hotmail.com</p>
                        <i className="fa fa-envelope email-icon"></i>
                    </div>
                   
                   
                </div>
            </header>
           
        </div>
    );
        

}


            {/*<p className="contact">fivestar-inc@hotmail.com</p>
            <h3 className="header-h3" >Luxury Transportation</h3>
            <p className="contact">(305) 606-0139</p>
            <div className="social-div">
                <p className="contact">fb</p>
                <p className="contact">google</p>
                <p className="contact">googlemaps</p>
            </div>
            <h3 className="header-h3" >Luxury Transportation</h3>*/}