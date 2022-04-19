import '../../App.css';
import servicePartiesIcon from "../../store/img/servicePartiesIcon.webp";
import serviceWeddingIcon from "../../store/img/serviceWeddingIcon.webp";
import serviceCasinoIcon from "../../store/img/serviceCasinoIcon.webp";
import serviceBirthdayIcon from "../../store/img/serviceBirthdayIcon.webp";
import servicePromotionAndNegotiationIcon from "../../store/img/servicePromotionAndNegotiationIcon.webp";
import serviceAirportIcon from "../../store/img/serviceAirportIcon.webp";

export const Services = () => {
    return (
        <div className='services'>
            <h1 style={{color: '#b1955a' }} >SERVICES</h1>
            <div style={{ display: 'inline-block', marginTop: '1rem' }}>
                <h2>WE SPECIALIZE IN MIAMI TRANSPORTATION SERVICE TO ORLANDO AND KEYS FROM FORT LAUDERDALE OR MIAMI AIRPORT</h2>
            </div>
            <div className='service-row'>
                <div className="service-main-div service-first-row" >
                    <div className="service-inner-div " style={{ paddingBottom: '1.5rem' }}>
                        <img className="service-icon-image" src={servicePartiesIcon} /> 
                        <h5 className="service-name" >PARTIES</h5>
                        <div className="description">
                            <p>   
                                The prerequisite of a wonderful experience is a good looking car with a well equipped luxury interior.
                                The best business events starts with 5 Star Luxury Transportation!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-main-div service-first-row">
                   
                    <div className="service-inner-div" style={{ paddingBottom: '3rem' }}>
                        <img className="service-icon-image" src={serviceAirportIcon} /> 
                        <h5 className="service-name">AIRPORT TRANSPORTATION</h5>
                        <div className="description">
                            <p >    
                                    If you have to arrive in time, or you just want to surprise your relatives with a luxury car in the airport we offer you a good choice!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-main-div service-first-row">
                    
                    <div className="service-inner-div">
                        <img className="service-icon-image " src={serviceWeddingIcon} /> 
                        <h5 className="service-name">WEDDINGS</h5>
                        <div className="description">
                            <p>   
                                The best moment in your life is your wedding, so I guess you want a perfect vehicle for yourself. The answer is 5 Star Luxury  Transportaton!  Courteous driver? Outstanding luxury? No probelm for us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-row'>
                <div className="service-main-div">
                   
                    <div className="service-inner-div" style={{ marginTop: '1.5rem' }}>
                        <img className="service-icon-image" src={serviceCasinoIcon} /> 
                        <h5 className="service-name">CASINO, BUSINESS</h5>
                        <div className="description">
                            <p>   
                                You have to pay attention for your business event, casino meeting which includes a luxury car. The first impression is important! Do you want a preferable appearance? Then you need our vehicles!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-main-div">
                    
                    <div className="service-inner-div" style={{ marginTop: '1.5rem', paddingBottom: '1.5rem'}}>
                        <img className="service-icon-image" src={serviceBirthdayIcon} /> 
                        <h5 className="service-name">BIRTHDAYS</h5>
                        <div className="description">
                            <p>   
                                Surprise your friend's birthday or you can actually surprise even yourself with a luxury car. You can find the best car here even if the party has a lot of members! 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-main-div">
                   
                    <div className="service-inner-div" style={{ marginTop: '1.5rem' }}>
                        <img className="service-icon-image" src={servicePromotionAndNegotiationIcon} /> 
                        <h5 className="service-name" >PROMOTIONS, NEGOTIATIONS</h5>
                        <div className="description">
                            <p>   
                                 A good bachelorette party must have a luxury car. Drinks, good music, huge party, your best friends. Warning: Great memories, do not miss it!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display:'inline-block', marginTop:"3rem"}}>

                <h1 style={{color: '#b1955a', paddingBottom:'1rem' }}>SERVICE TYPES</h1>

                <div className="type-main-div">
                    <div className="point-to-point-type" >
                        <h3 className="service-name" style={{ paddingBottom: '2rem' }}>POINT TO POINT SERVICES</h3>
                        <div className="description">
                            <p>
                                There will be two points given in this service, a starting point, and an ending point.
                                The transportation's route will be between these two locations.
                            </p>
                        </div>
                    </div>
                    <div className="pay-hour-type" >
                        <h3 className="service-name" style={{ paddingBottom: '2rem' }}>PAY/HOUR SERVICES</h3>
                        <div className="description">
                            <p>
                                There will be one point, which will be the ending location, and the payment will be charged hourly.
                            </p>
                        </div>
                    </div>
                </div>


                <div style={{ marginTop: "3rem" }}>
                    <h1 style={{ color: '#b1955a' }}>PRICES</h1>
                </div>

                <div style={{marginTop:"3rem"}}>

                    <div className="prices-row">
                        <div className="price-div">
                            <div className="prices-inner-div prices-inner-left">
                                <h3 className="service-name">Chevrolet Suburban</h3>
                                <h4 style={{ paddingBottom: '2rem' }}>(seats 1-6)</h4>
                                <div className="description">
                                    <p>
                                        Point to Point (Miami to Miami) - $165
                                    </p>
                                    <p>
                                        Point to Point (Miami to Broward) - $185
                                    </p>
                                    <p>
                                        Pay/Hour - $85/h (min. 3 hours)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="price-div">
                            <div className="prices-inner-div prices-inner-right">
                                <h3 className="service-name">Mercedes Sprinter Executive</h3>
                                <h4 className='mercedes-executive'>(seats 1-13)</h4>
                                <div className="description">
                                    <p>
                                        Point to Point (Miami to Miami) - $195
                                    </p>
                                    <p>
                                        Point to Point (Miami to Broward) - $245
                                    </p>
                                    <p>
                                        Pay/Hour - $115/h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prices-row">
                        <div className="price-div">
                            <div className="prices-inner-div prices-inner-left">
                                <h3 className="service-name">Mercedes Sprinter</h3>
                                <h4 style={{ paddingBottom: '2rem' }}>(seats 1-13)</h4>
                                <div className="description">
                                    <p>
                                        Point to Point (Miami to Miami) - $175
                                    </p>
                                    <p>
                                        Point to Point (Miami to Broward) - $195
                                    </p>
                                    <p>
                                            Pay/Hour - $95/h
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="price-div">
                            <div className="prices-inner-div prices-inner-right">
                                <h3 className="service-name">Cadillac XTS</h3>
                                <h4 style={{ paddingBottom: '2rem' }}>(seats 1-3)</h4>
                                <div className="description">
                                    <p>
                                        Point to Point (Miami to Miami) - $135
                                    </p>
                                    <p>
                                        Point to Point (Miami to Broward) - $155
                                    </p>
                                    <p>
                                        Pay/Hour - $65/h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prices-plus-info">
                    <div className="prices-credit-card">
                        <h3 className="service-name">Credit Card Payment Accepted!</h3>
                        <div>
                            <div className="description">
                                <p>
                                    If you willing to pay with Credit Card, we have to charge the CVC (Credit Service Charge)
                                    No hidden fees!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prices-charge">
                        <h4 className="service-name" style={{ width: '90%', marginLeft: '5%', textAlign: 'center' }}>WE WILL CHARGE EXTRA COST IN THE FOLLOWING SITUATIONS:</h4>
                        <div className="description">

                            <p>
                                - If the location is an Airport(+10$) + parking if it's inside pickup!
                            </p>
                            <p>
                                - If the location is Broward County or Ft.Lauderdale(+25$) 
                            </p>
                            <p>
                                    - If the customer wants a custom location (which is not the mentioned cities)
                                    the reconciliation process about the price should be in person or phone!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}