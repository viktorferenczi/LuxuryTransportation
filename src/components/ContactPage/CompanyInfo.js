import { Mailer } from "./Mailer";
import logo from '../../store/img/logo.png'
import { Reviews } from "./Reviews";

export const CompanyInfo = () => {
    return (
        <div style={{display:'flex'} }>
            <div>
            </div>
            <div>
                <img style={{ width: "20%" }} src={logo} />
                <h3>5 Star Luxury Transportation</h3>
                <p>661 Ne 195th st Miami 33179</p>
                <Mailer />
                <p>+1 (305) 606-0139</p>
                <a target="_blank" className="fa fa-facebook-square fa-lg icon" aria-hidden="true" href="https://www.facebook.com/5starluxurytransportations/"></a>
                <a target="_blank" className="fa fa-google fa-lg icon" aria-hidden="true" href="https://www.google.com/search?q=5%20Star%20Luxury%20Transportation&sxsrf=AOaemvJ5_YRvmxD3eRPY6iAtPrkm_DQQFg%3A1640026657254&ei=IdLAYbHoDsn3kwXl2JagAw&ved=2ahUKEwii6IS3h_P0AhXH_KQKHVZYBYIQrMcEegQIAhAF&uact=5&oq=5%20star%20luxury%20transportation&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6CggAEEcQsAMQyQM6BwgAEEcQsANKBAhBGABKBAhGGABQ1g5Y1g5gzxNoAnACeACAAXuIAdkBkgEDMS4xmAEAoAEByAEJwAEB&sclient=gws-wiz&ludocid=4062371511699636735&lsig=AB86z5UScHHp5OnUR9qinnXyTeMe"></a>
                <a target="_blank" className="fa fa-map-marker fa-lg icon" aria-hidden="true" href="https://g.page/5starluxurytransportations?share"></a>
            </div>
        </div>
    );
}