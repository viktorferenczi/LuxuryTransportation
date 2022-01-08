import '../../App.css';

export const ChoosenService = (props) => {

    if(!props.date && !props.car && !props.service){
        return(
            <div className="service-details">
              <h2>Your selected service details</h2>
              <p>You have no selected service yet.</p>
            </div>
        );
    } else {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"2-digit", minute:"2-digit" };
        return(
            <div className="service-details">
            <h2>Your selected service details</h2>
            { props.date ?  
                <p>Date: {props.date.toLocaleDateString("en-US", options)}</p>
            : 
                <p>Please select a date.</p>
            }
           
            { props.service ?  
                 <p>Service type: {props.service.label}</p>
            : 
                <p>Please select a service.</p>
            }

             { props.car ?  
                 <p>Vehicle: {props.car.label}</p>
            : 
                <p>Please select a vehicle.</p>
            }
            </div>
        );
    }
}