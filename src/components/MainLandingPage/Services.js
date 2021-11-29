import '../../App.css';
import servicePartiesIcon from "../../store/img/servicePartiesIcon.webp";

export const Services = () => {
    return(
        <div>
            <h1 style={{color: '#b1955a' }} >SERVICES</h1>
            <p>...</p>
            <div>
                <div className="service-main-div">
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name" >PARTIES</h5>
                        <p style={{ marginTop: '2rem' }}>   
                            The prerequisite of a wonderful experience is a good looking car with a well equipped luxury interior.
                            The best business events starts with 5 Star Luxury Transportation!
                        </p>
                    </div>
                </div>
                <div className="service-main-div">
                   
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name">AIRPORT TRANSPORTATION</h5>
                        <p >    
                             If you have to arrive in time, or you just want to surprise your relatives with a luxury car in the airport we offer you a good choice!
                        </p>
                    </div>
                </div>
                <div className="service-main-div">
                    
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name">WEDDINGS</h5>
                        
                        <p style={{ marginTop: '2rem' }}>   
                            The best moment in your life is your wedding, so I guess you want a perfect vehicle for yourself. The answer is 5 Star Luxury  Transportaton!  Courteous driver? Outstanding luxury? No probelm for us!
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="service-main-div">
                   
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name">CASINO, BUSINESS</h5>
                        <p style={{ marginTop: '2rem' }}>   
                             You have to pay attention for your business event, casino meeting which includes a luxury car. The first impression is important! Do you want a preferable appearance? Then you need our vehicles!
                        </p>
                    </div>
                </div>
                <div className="service-main-div">
                    
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name">BIRTHDAYS</h5>
                        <p style={{ marginTop: '2rem' }}>   
                            Surprise your friend's birthday or you can actually surprise even yourself with a luxury car. You can find the best car here even if the party has a lot of members! 
                        </p>
                    </div>
                </div>
                <div className="service-main-div">
                   
                    <div className="service-inner-div">
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name">PROMOTIONS, NEOGITATIONS</h5>
                        <p >   
                             A good bachelorette party must have a luxury car. Drinks, good music, huge party, your best friends. Warning: Great memories, do not miss it!
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'inline-block' }}>
                <h2>WE SPECIALIZE IN MIAMI TRANSPORTATION SERVICE TO ORLANDO AND KEYS FROM FORT LAUDERDALE OR MIAMI AIRPORT</h2>
            </div>
        </div>
    );
}