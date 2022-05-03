import React, { useEffect, useState } from 'react';
//import Select from 'react-select';
import { useLocation } from "react-router";
import { Button } from '@mui/material';


import { DateTimePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';
import Alert from 'react-bootstrap/Alert';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Card } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';


export const ServiceChooser = (props) => {


    // Alert
    const [show,setShow] = useState(false);

    // Inputs
    const [service,setService] = useState("");
    const [car,setCar] = useState("");
    const [date,setDate] = useState(null);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const location = useLocation()
    const carId = location.search.split("=")[1];

    const [warningText,setWarningText] = useState(false);
    const [successText,setSuccessText] = useState(false);
   
    const selectServices = [
        { value: 'ptp-miami-to-miami', label: 'Point to Point (Miami to Miami)' },
        { value: 'ptp-miami-to-broward', label: 'Point to Point (Miami to Broward)' },
        { value: 'pph', label: 'Pay/Hour' },
    ];

    const selectCars = [
        { value: 'cs', label: 'Chevrolet Suburban SUV' },
        { value: 'ms', label: 'Mercedes Sprinter' },
        { value: 'mse', label: 'Mercedes Sprinter Executive' },
        { value: 'lms', label: 'Cadillac XTS Sedan' },
        { value: 'lms', label: 'Cadillac Escalade SUV' },
        { value: 'lms', label: 'Chrysler 300 Stretch Limo' },
        { value: 'cel', label: 'Cadillac Escalade Stretch Limo' },
    ];

    useEffect(() => {
       
        if(carId){
            if(selectCars[carId-1]){
                setCar(selectCars[carId-1].value);
                props.onSetCar(selectCars[carId-1]);
            }
        }
      }, []);

    const onChangeHandler = (event,type) => {
        setWarningText(false);
        setSuccessText(false);

        switch (type) {
            case 'date':
                setDate(event);
                props.onSetDate(event);
                break;
            case 'service':
                setService(event.target.value);
                let service = selectServices.find(element => element.value == event.target.value)
                props.onSetService(service);
                break;
            case 'car':
                setCar(event.target.value);
                let car = selectCars.find(element => element.value == event.target.value)
                props.onSetCar(car);
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
            car: selectCars.find(element => element.value == car).label,
            service: selectServices.find(element => element.value == service).label,
            date:date.toString()
        };
        
        init("user_NI2YtL4qPeOue4aib0abR");

        emailjs.send('service_nxyq4yu','template_5qzcb4c', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
            .then((response) => {
               setShow(true);
               setSuccessText(true);
            }, (err) => {
                alert('We were unable to send your message! Please call us!');
            });
    };

    return (
        <div style={{ marginTop: '3rem' }}>
            <Alert show={show} variant="success">
                <Alert.Heading>Email Sent</Alert.Heading>
                <p style={{ color: 'black' }}>Thank you for your request. We will contact you soon!</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        OK
                    </Button>
                </div>
            </Alert>
           
            <Card className = "service-chooser-main-div" sx={{backgroundColor:"#37393d", boxShadow:"12px 12px 2px 1px rgba(32, 32, 32, 0.747)"}}>
                <h2>Service details</h2>
                {warningText ? <p style={{ color: 'red' }}>Please give us all the informations for the proper booking!</p> : <p>Please choose the date carefully</p>}
                {successText ? <p style={{ color: 'green' }}>Thank you for your booking! We will contact you as soon as possible on the given phone number!</p> : <p>Our staff will call you after successful booking</p>}
                <div className = 'service-possibilities-div'>
                    <div className="service-date-chooser">
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    sx={{color:'#b1955a'}}
                                    toolbarTitle={"Select the date and time"}
                                    renderInput={(props) => <TextField {...props}  sx={{
                                        svg: { color: 'white' },
                                        input: { color: 'white' },
                                        label: { color: '#b1955a' },
                                    }} />}
                                    label="Date"
                                    value={date}
                                    minDate={new Date()}
                                    onChange={(e) => {
                                        onChangeHandler(e,"date");
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <p style={{marginTop:"2rem"}}>Please choose the date carefully! If you want to correct the booking after submitting, please contact us via email or phone.</p>
                    </div>
                    <div className="service-type-chooser">
                        
                        <div style={{}}>

                        <FormControl variant="filled" sx={{ minWidth: '16rem', marginBottom:"1rem" }}>
        <InputLabel sx={{color:'#b1955a'}} id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={service}
          sx={{color:'white'}}
          onChange={(e)=>onChangeHandler(e,"service")}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          
        {selectServices.map((selectService) =>
        
         <MenuItem sx={{ color:'black'}} value={selectService.value}>{selectService.label}</MenuItem>
        )}
    );

         
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ minWidth: '16rem' }}>
        <InputLabel sx={{color:'#b1955a'}} id="demo-simple-select-filled-label">Vehicle</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={car}
          sx={{color:'white'}}
          onChange={(e)=>onChangeHandler(e,"car")}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          
        {selectCars.map((selectCar) =>
        
         <MenuItem sx={{ color:'black'}} value={selectCar.value}>{selectCar.label}</MenuItem>
        )}
    );

         
        </Select>
      </FormControl>

      
                           
                        </div>
                    
                        <div style={{paddingTop:'1rem'}}>
                          
                        </div>

                        <div style={{}}>
                            <TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:2,
        width:"16rem"
      }} id="outlined-basic" label="Full name" variant="outlined"  onChange={(e)=>onChangeHandler(e,"name")} value={name} />
                            <TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:1,
        width:"16rem"
      }} id="outlined-basic" label="Phone" variant="outlined" onChange={(e)=>onChangeHandler(e,"phone")}  value={phone} />
                            <TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:1,
        width:"16rem"
      }} id="outlined-basic" label="Email" variant="outlined"  onChange={(e)=>onChangeHandler(e,"email")} value={email} />
                        </div>

                        <div style={{marginTop:15}}>
                            <Button onClick={handleSubmit}  variant="contained" style={{backgroundColor:'#b1955a'}}>Book Service</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}