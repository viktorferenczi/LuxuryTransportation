import React, { useState } from 'react';
import Select from 'react-select';

import DateTimePicker from 'react-datetime-picker';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'


export const ServiceChooser = (props) => {

    // Alert
    const [show,setShow] = useState(false);

    // Inputs
    const [service,setService] = useState("");
    const [car,setCar] = useState("");
    const [date,setDate] = useState("");
    const [name,setName] = useState("");
    const [phone,setEmail] = useState("");
    const [email,setPhone] = useState("");
   
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

    return (
        <div style={{ marginTop: '3rem' }}>
            <Alert show={show} variant="success">
                <Alert.Heading>Email Sent</Alert.Heading>
                <p>Thank you for your request. We will contact you soon!</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        OK
                    </Button>
                </div>
            </Alert>
           
            <div style={{width:'50rem', boxShadow: '12px 12px 2px 1px rgba(32, 32, 32, 0.747)', backgroundColor: '#37393d', padding:'2rem'}}>
                <h2>Service details</h2>
                <p>Please choose the date carefully</p>
                <div style={{display:'flex',flexDirection:'row', marginTop:'2rem'}}>
                    <div style={{width:'23rem', marginLeft:"3rem"}}>
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
                    <div style={{width:'19rem', marginLeft:"3rem"}}>
                        
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
                                placeholder={"Select car"}
                                value={car}
                                onChange={(e)=>onChangeHandler(e,"car")}
                                options={selectCars}
                            />
                        </div>
                        <div>
                            <input placeholder={'Full name'} value={name} onChange={(e)=>onChangeHandler(e,"name")} style={{borderRadius:6, height:'2.3rem', width:'19rem', marginTop:'1rem'}} type='text'/>
                            <input placeholder={'Phone'} value={phone} onChange={(e)=>onChangeHandler(e,"phone")} style={{borderRadius:6, height:'2.3rem', width:'19rem', marginTop:'1rem'}} type='text'/>
                            <input placeholder={'Email'} value={email} onChange={(e)=>onChangeHandler(e,"email")} style={{borderRadius:6, height:'2.3rem', width:'19rem', marginTop:'1rem'}} type='text'/>
                        </div>
                        <Button style={{marginTop:'1rem'}}>Book Service</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}