import '../../App.css';

export const FounderInfo = () => {
    return (
        <div className="founder-info" >
            <h1 style={{ color: '#ffbb00' }}>Welcome</h1>
            <div className="intruduction">
                <h6>
                    <span> Welcome to our page, I am Zsolt Molnar, the founder of </span>
                </h6>
                <h6>
                    <span> MIAMI TRANSPORTATION. </span>
                </h6>
                <p style={{ textAlign: 'left', marginBottom: '0' }}>
                    We have been in this business for years, and we developed a way to satisfy all your needs in miami transportation.
                </p>
                <p style={{ textAlign: 'left' }}>
                    From the start we used Chevrolet SUVs and later we expanded our collection with Mercedes Sprinters, Lincoln MKZs, and more.
                </p>
                <p style={{ textAlign: 'left', marginBottom: '4rem'}}>
                    You can take a look at our vehicles online anytime. If you want to see the car in person, call us, and we will be at your service to preview the vehicle before <a style={{ textDecoration: 'underline' }} >booking</a>.
                </p>
            </div>
           <div>
                <div className="why-us">
                    <h4 style={{ textAlign: 'left', marginBottom: '2rem', marginLeft: '1rem' }} >Why Miami Suv Transportation?</h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>With several years of professional experience</li>
                        <li>Reliable, continuously maintained cars</li>
                        <li>Vehicles for special needs: weddings, partys, birthdays, business events</li>
                        <li>Professional drivers, with demanding appearance</li>
                        <li>Fully licensed and insured vehicles</li>
                    </ul>
                    <p style={{ textAlign: 'left' }}>Choose your favorite vehicle, and one of our services, and we're going to provide an unforgettable ride!</p>
                    <p style={{ textAlign: 'left' }}>Travel with us, we are looking forward for your call!</p>
                    <p className="farawell-message">Best Regards:</p>
                    <p style={{ textAlign: 'right' }}>Zsolt Molnar</p>
                </div>
            </div>
        
           
        </div>
    );
}