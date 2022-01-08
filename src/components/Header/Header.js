import logo from '../../store/img/logo.png';
import '../../App.css';

export const Header = () => {
    return (
        <div>
            <header className="header" >

                <div className="logo-image-div">
                    <img className="logo-image" src={logo} alt="Logo" />
                </div>
                <div className="main-menu">
                    <a href={"/"} className="first-menu-item">Home</a>
                    <a href={"/fleet"} className="main-menu-item">Fleet</a>
                    <a href={"/booking"} className="main-menu-item">Booking</a>
                    <a href={"/contact"} className="main-menu-item">Contact</a>
                    <div className="phone-number-contact">
                        <p className="contact">
                            <i class="fa fa-phone phone-icon" aria-hidden="true"></i>
                            (305) 606-0139
                        </p>
                    </div>

                    <div className="social-div" >
                        <a target="_blank" className="fa fa-facebook-square fa-lg icon" aria-hidden="true" href="https://www.facebook.com/5starluxurytransportations/"></a>
                        <a target="_blank" className="fa fa-google fa-lg icon" aria-hidden="true" href="https://www.google.com/search?q=5%20Star%20Luxury%20Transportation&sxsrf=AOaemvJ5_YRvmxD3eRPY6iAtPrkm_DQQFg%3A1640026657254&ei=IdLAYbHoDsn3kwXl2JagAw&ved=2ahUKEwii6IS3h_P0AhXH_KQKHVZYBYIQrMcEegQIAhAF&uact=5&oq=5%20star%20luxury%20transportation&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6CggAEEcQsAMQyQM6BwgAEEcQsANKBAhBGABKBAhGGABQ1g5Y1g5gzxNoAnACeACAAXuIAdkBkgEDMS4xmAEAoAEByAEJwAEB&sclient=gws-wiz&ludocid=4062371511699636735&lsig=AB86z5UScHHp5OnUR9qinnXyTeMe"></a>
                        <a target="_blank" className="fa fa-map-marker fa-lg icon" aria-hidden="true" href="https://g.page/5starluxurytransportations?share"></a>
                    </div> 
                    <div>
                        <p className="email" >fivestar-inc@hotmail.com</p>
                        <a target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`} className="fa fa-envelope email-icon"></a>
                    </div>
                </div>

                <div className="hamburger-menu" >
                    <div>
                        <div class="center">
                            <div></div>
                        </div>
                        <div class="dropdown-content">
                            <a href={"/"} className="first-menu-item">Home</a>
                            <a href={"/fleet"} className="main-menu-item">Fleet</a>
                            <a href={"/prices"} className="main-menu-item">Prices</a>
                            <a href={"/booking"} className="main-menu-item">Booking</a>
                            <a href={"/contact"} className="main-menu-item">Contact</a>
                        </div>
                     
                    </div>
                   
                    <div className="social-div" >
                        <div>
                            <p className="email" >fivestar-inc@hotmail.com</p>
                            <a target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`} className="fa fa-envelope fa-lg email-icon"></a>
                        </div>
                        <div>
                            <a target="_blank" className="fa fa-facebook-square fa-lg icon" aria-hidden="true" href="https://www.facebook.com/5starluxurytransportations/"></a>
                            <a target="_blank" className="fa fa-google fa-lg icon" aria-hidden="true" href="https://www.google.com/search?q=5%20Star%20Luxury%20Transportation&sxsrf=AOaemvJ5_YRvmxD3eRPY6iAtPrkm_DQQFg%3A1640026657254&ei=IdLAYbHoDsn3kwXl2JagAw&ved=2ahUKEwii6IS3h_P0AhXH_KQKHVZYBYIQrMcEegQIAhAF&uact=5&oq=5%20star%20luxury%20transportation&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6CggAEEcQsAMQyQM6BwgAEEcQsANKBAhBGABKBAhGGABQ1g5Y1g5gzxNoAnACeACAAXuIAdkBkgEDMS4xmAEAoAEByAEJwAEB&sclient=gws-wiz&ludocid=4062371511699636735&lsig=AB86z5UScHHp5OnUR9qinnXyTeMe"></a>
                            <a target="_blank" className="fa fa-map-marker fa-lg icon" aria-hidden="true" href="https://g.page/5starluxurytransportations?share"></a>
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