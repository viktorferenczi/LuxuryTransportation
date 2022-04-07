import logo from '../../store/img/logo.png';
import '../../App.css';

export const Header = (props) => {

    return (
        <div>
            <header className="header" >

                <div className="logo-image-div">
                    <a href='/'>
                        <img className="logo-image" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="main-menu">
                    <a href={"/"} className="first-menu-item">Home</a>
                    <a href={"/fleet"} className="main-menu-item">Fleet</a>
                    <a href={"/booking"} className="main-menu-item">Booking</a>
                    <a href={"/contact"} className="main-menu-item">Contact</a>
                    <div className="phone-number-contact">
                        <p className="contact">
                            <i className="fa fa-phone phone-icon" aria-hidden="true"></i>
                            (305) 606-0139
                        </p>
                    </div>
                    <div className="contact-email">
                        <a style={{ textDecoration: 'unset' }} target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`}> <p className="email" >fivestar-inc@hotmail.com</p></a>
                    </div>
                </div>

                <div className="hamburger-menu" >
                    <div>
                        <div className="center">
                            <div></div>
                        </div>
                        <div className="dropdown-content">
                            <a href={"/"} className="first-menu-item">Home</a>
                            <a href={"/fleet"} className="main-menu-item">Fleet</a>
                            <a href={"/booking"} className="main-menu-item">Booking</a>
                            <a href={"/contact"} className="main-menu-item">Contact</a>
                        </div>
                     
                    </div>
                   
                    <div className="social-div" >
                        <div className="contact-email">
                            <a style={{ textDecoration: 'unset' }} target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`}> <p className="email" >fivestar-inc@hotmail.com</p></a>
                        </div>
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