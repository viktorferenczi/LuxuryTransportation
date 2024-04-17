
import logo from '../../store/img/logo.png'

export const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <div className="footer">

            <div >
                <div>
                    <a target="_blank" className="fa fa-facebook-square fa-lg icon" aria-hidden="true" href="https://www.facebook.com/5starluxurytransportations/"></a>
                    <a target="_blank" className="fa fa-google fa-lg icon" aria-hidden="true" href="https://www.google.com/search?q=5%20Star%20Luxury%20Transportation&sxsrf=AOaemvJ5_YRvmxD3eRPY6iAtPrkm_DQQFg%3A1640026657254&ei=IdLAYbHoDsn3kwXl2JagAw&ved=2ahUKEwii6IS3h_P0AhXH_KQKHVZYBYIQrMcEegQIAhAF&uact=5&oq=5%20star%20luxury%20transportation&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6CggAEEcQsAMQyQM6BwgAEEcQsANKBAhBGABKBAhGGABQ1g5Y1g5gzxNoAnACeACAAXuIAdkBkgEDMS4xmAEAoAEByAEJwAEB&sclient=gws-wiz&ludocid=4062371511699636735&lsig=AB86z5UScHHp5OnUR9qinnXyTeMe"></a>
                    <a target="_blank" className="fa fa-map-marker fa-lg icon" aria-hidden="true" href="https://g.page/5starluxurytransportations?share"></a>
                </div>
                <div className="footer-social-div" >
                    <div>
                        <a style={{ textDecoration: 'unset' }} target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`}> <p className="email" >fivestar-inc@hotmail.com</p></a>
                    </div>
                </div>

            </div>
           
            <div>
                <p style={{ color: 'white', marginBottom: "0" }}>© {year} 5 Star Luxury Transportation. All Rights Reserved.</p>
            </div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </div>
        </div>
        
    );
}