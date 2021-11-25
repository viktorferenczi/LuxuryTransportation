import { Mailer } from "./Mailer";
import logo from '../../store/img/logo.png'

export const CompanyInfo = () => {
    return(
        <div>
            <img style={{width:"20%"}} src={logo}/>
            <h3>5 Star Luxury Transportation</h3>
            <p>661 Ne 195th st Miami 33179</p>
            <Mailer/>
            <p>+1 (305) 606-0139</p>
            <a href='https://facebook.com'>Facebook</a>
            <a href='https://facebook.com'>Google</a>
            <a href='https://facebook.com'>Insta</a>
            <a href='https://facebook.com'>Yelp</a>
        </div>
    );
}