import '../../App.css';

export const ChoosenService = (props) => {
    console.log(props)
    return(
        <div style={{marginLeft:"15rem", height:"20rem", padding:"3rem", marginTop: '3rem', boxShadow: '12px 12px 2px 1px rgba(32, 32, 32, 0.747)', backgroundColor: '#37393d'}}>
          <h2>Your selected service details</h2>
          <p>Date: {props.date.toString()}</p>
          <p>Service type: {props.service.label}</p>
          <p>Vehicle: {props.car.label}</p>
        </div>
    );
}