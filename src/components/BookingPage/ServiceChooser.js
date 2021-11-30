import React, { useState } from 'react';
import Select from 'react-select';

import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'


export const ServiceChooser = () => {

    // Alert
    const [show,setShow] = useState(false);

    // Inputs
    const [service,setService] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");

    const options = [
        { value: 'ptp-miami-to-miami', label: 'Point to Point (Miami to Miami)' },
        { value: 'ptp-miami-to-broward', label: 'Point to Point (Miami to Broward)' },
        { value: 'pph', label: 'Pay/Hour' },
      ];
    

    // we need to extract this data from here to somewhere safe and refact this code but its too late night for that sh*t

    //User ID    user_NI2YtL4qPeOue4aib0abR
    //Access Token de1d93e023ead83a86aef750ee23d4d7
    //Template ID template_u2b0o8d
    //Service ID service_nxyq4yu

        //init("user_NI2YtL4qPeOue4aib0abR");

        //emailjs.send('service_nxyq4yu','template_u2b0o8d', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
         ////   .then((response) => {
          //     setShow(true);
          //  }, (err) => {
           //     alert('We were unable to send your message! Please call us!');
           // });
    

    const handleChange = (selectedOption) => {
        setService(selectedOption);
      };

    return (
        <div style={{ marginTop: '10rem' }}>
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
           
            <Select
                isSearchable
                placeholder={"Service..."}
                value={service}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
}