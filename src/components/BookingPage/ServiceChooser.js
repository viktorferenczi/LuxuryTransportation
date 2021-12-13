import React, { useState } from 'react';
import Select from 'react-select';

import DateTimePicker from 'react-datetime-picker';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';


export const ServiceChooser = (props) => {


    // Alert
    const [show,setShow] = useState(false);

    // Inputs
    const [service,setService] = useState("");
    const [car,setCar] = useState("");
    const [date,setDate] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const [warningText,setWarningText] = useState(false);
   
    const selectServices = [
        { value: 'ptp-miami-to-miami', label: 'Point to Point (Miami to Miami)' },
        { value: 'ptp-miami-to-broward', label: 'Point to Point (Miami to Broward)' },
        { value: 'pph', label: 'Pay/Hour' },
    ];

    const selectCars = [
        { value: 'cs', label: 'Chevrolet Suburban' },
        { value: 'mse', label: 'Mercedes Sprinter Executive' },
        { value: 'ms', label: 'Mercedes Sprinter' },
        { value: 'lms', label: 'Lincoln MKZ Sedan' },
    ];

    const onChangeHandler = (event,type) =>{
        setWarningText(false);
        switch (type) {
            case 'date':
                setDate(event);
                props.onSetDate(event);
                break;
            case 'service':
                setService(event);
                props.onSetService(event);
                break;
            case 'car':
                setCar(event);
                props.onSetCar(event);
                break;
            case 'name':
                setName(event.target.value);
                break;
            case 'phone':
                setPhone(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            default:
                break;
        }
    }


    const handleSubmit = () => {
        
        if(!name || !phone || !email || !car || !service || !date){
            setWarningText(true);
           return;
        }
       
        const templateParams = {
            name:name,
            phone:phone,
            email:email,
            car:car.label,
            service:service.label,
            date:date
        };
        console.log(templateParams)
        
        init("user_NI2YtL4qPeOue4aib0abR");

        emailjs.send('service_nxyq4yu','template_5qzcb4c', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
            .then((response) => {
               setShow(true);
            }, (err) => {
                alert('We were unable to send your message! Please call us!');
            });
    };

    return (
        <div style={{ marginTop: '3rem' }}>
            <Alert show={show} >
                <Alert.Heading>Email Sent</Alert.Heading>
                <p>Thank you for your request. We will contact you soon!</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        OK
                    </Button>
                </div>
            </Alert>
           
            <div className = "service-chooser-main-div">
                <h2>Service details</h2>
                {warningText ? <p style={{ color: 'red' }}>Please give us all the informations for the proper booking!</p> : <p>Please choose the date carefully</p>}
                <div className = 'service-possibilities-div'>
                    <div className="service-date-chooser">
                        <div>
                            <DateTimePicker
                                minDate={new Date()}
                                dayPlaceholder={'dd'}
                                hourPlaceholder={'hh'}
                                minutePlaceholder={'mm'}
                                yearPlaceholder={'YYYY'}
                                monthPlaceholder={'MM'}
                                onChange={(e)=>onChangeHandler(e,"date")}
                                value={date}
                            />
                        </div>
                        <p style={{marginTop:"2rem"}}>Please choose the date carefully! If you want to correct the booking after submitting, please contact us via email or phone.</p>
                    </div>
                    <div className="service-type-chooser">
                        
                        <div style={{paddingTop:'1rem'}}>
                            <Select
                                isSearchable
                                placeholder={"Select service"}
                                value={service}
                                onChange={(e)=>onChangeHandler(e,"service")}
                                options={selectServices}
                            />
                        </div>
                    
                        <div style={{paddingTop:'1rem'}}>
                            <Select
                                isSearchable
                                placeholder={"Select vehicle"}
                                value={car}
                                onChange={(e)=>onChangeHandler(e,"car")}
                                options={selectCars}
                            />
                        </div>
                        <div>
                            <input placeholder={'Full name'} value={name} onChange={(e)=>onChangeHandler(e,"name")} className="user-data" type='text'/>
                            <input placeholder={'Phone'} value={phone} onChange={(e) => onChangeHandler(e, "phone")} className="user-data" type='text'/>
                            <input placeholder={'Email'} value={email} onChange={(e) => onChangeHandler(e, "email")} className="user-data" type='email'/>
                        </div>
                        <a className="submit-service-button btn" onClick={handleSubmit} >Book Service</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}