import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const PricesPage = () => {
    return(
        <div>
            <Header/>
            <h1>Prices and Service types</h1>

            <div>
                <h2>Service types</h2>

                <div>
                    <h3>POINT TO POINT SERVICES</h3>
                    <p>
                        There will be two points given in this service, a starting point, and an ending point.
                        The transportation's route will be between these two locations.
                    </p>
                </div>

                <div>
                    <h3>PAY/HOUR SERVICES</h3>
                    <p>
                        There will be one point, which will be the ending location, and the payment will be charged hourly.
                    </p>
                </div>
            </div>

            <div>
                <h2>Prices</h2>

                <div>
                    <h3>Chevrolet Suburban (seats 1-6)</h3>
                    <p>
                        Point to Point (Miami to Miami) - $165
                    </p>
                    <p>
                        Point to Point (Miami to Broward) - $185
                    </p>
                    <p>
                        Pay/Hour - $85/h
                    </p>
                </div>

                <div>
                    <h3>Mercedes Sprinter Executive (seats 1-13)</h3>
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

                <div>
                    <h3>Mercedes Sprinter (seats 1-13)</h3>
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

                <div>
                    <h3>Lincoln MKZ Sedan (seats 1-3)</h3>
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


            <div>
                <h3>Credit Card Payment Accepted!</h3>
                <p>
                    If you willing to pay with Credit Card, we have to charge the CVC (Credit Service Charge)
                    No hidden fees!
                </p>
            </div>

            <div>
                    <h3>WE WILL CHARGE EXTRA COST IN THE FOLLOWING SITUATIONS:</h3>
                    <p>
                        - If the location is an Airport(+10$) + parking if it's inside pickup!
                        - If the location is Broward County or Ft.Lauderdale(+25$)
                        - If the customer wants a custom location
                        (which is not the mentioned cities) the reconciliation process about the price should be in person or phone!
                    </p>
                </div>
            <Footer/>
        </div>
    )
}