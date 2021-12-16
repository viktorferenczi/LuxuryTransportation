import '../../App.css';

export const FounderInfo = () => {
    return (
        <div className="founder-info" >
            <div className="main-banner"> </div>
            <h1 style={{ color: '#b1955a',  textShadow: "5px 5px rgba(32, 32, 32, 0.747)" }}>Welcome</h1>
            <div className="founder-infos">
                    <div className="intruduction">
                        <h6>
                            <span style={{ color: '#b1955a', fontSize:'1.5rem'}}> Miami Luxury Transportation Professionals</span>
                        </h6>
                        <p style={{ textAlign: 'left', marginBottom: '0' }}>
                            We have been in this business for years, and we developed a way to satisfy all your needs in luxury transportation.
                        </p>
                        <p style={{ textAlign: 'left' }}>
                            From the start we used only SUVs, since then we expanded our collection with other vehicles, and we are only developing to provide even more vehicle types to our customers!
                        </p>
                        <p style={{ textAlign: 'left', marginBottom: '4rem'}}>
                        You can take a look at our vehicles online anytime. If you want to see the car in person, call us, and we will be at your service to preview the vehicle before <a href="/booking" style={{ color:'#b1955a', textDecoration: 'underline' }} >booking</a>.
                        </p>
                    </div>

                    <div className="why-us">
                        <h4 style={{ textAlign: 'left', marginBottom: '2rem', marginLeft: '1rem', color: '#b1955a' }} >Why 5 Star Luxury Transportation?</h4>
                        <ul style={{ textAlign: 'left' }}>
                            <li>With several years of professional experience</li>
                            <li>Reliable, continuously maintained cars</li>
                            <li>Vehicles for special needs: weddings, partys, birthdays, business events</li>
                            <li>Professional drivers, with demanding appearance</li>
                            <li>Fully licensed and insured vehicles</li>
                            <li>Customer focused service</li>
                        </ul>
                        <p style={{ textAlign: 'left' }}>Choose your favorite vehicle, and one of our services, and we're going to provide an unforgettable ride!</p>
                        <p style={{ textAlign: 'left' }}>Travel with us, we are looking forward for your call!</p>
                    </div>
                </div>
        </div>
    );
}