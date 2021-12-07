import '../../App.css';

export const ChoosenService = (props) => {

    if(!props.date && !props.car && !props.service){
        return(
            <div style={{marginLeft:"15rem", height:"20rem", padding:"3rem", marginTop: '3rem', boxShadow: '12px 12px 2px 1px rgba(32, 32, 32, 0.747)', backgroundColor: '#37393d'}}>
              <h2>Your selected service details</h2>
              <p>You have no selected service yet.</p>
            </div>
        );
    } else {
        console.log(props)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"2-digit", minute:"2-digit" };
        return(
            <div style={{marginLeft:"15rem", height:"20rem", padding:"3rem", marginTop: '3rem', boxShadow: '12px 12px 2px 1px rgba(32, 32, 32, 0.747)', backgroundColor: '#37393d'}}>
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