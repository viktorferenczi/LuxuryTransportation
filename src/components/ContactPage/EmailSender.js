import React, { useState } from 'react';

import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

import Alert from 'react-bootstrap/Alert';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const EmailSender = () => {

    // Alert
    const [show,setShow] = useState(false);

    // Inputs
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");

    // we need to extract this data from here to somewhere safe and refact this code but its too late night for that sh*t

    //User ID    user_NI2YtL4qPeOue4aib0abR
    //Access Token de1d93e023ead83a86aef750ee23d4d7
    //Template ID template_u2b0o8d
    //Service ID service_nxyq4yu

    const handleChange = (e,input) => {
        switch (input) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;

            case "phone":
                setPhone(e.target.value);
                break;

            case "message":
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        
        e.preventDefault(); // Prevents default refresh by the browser
        const templateParams = {
            name:name,
            phone:phone,
            email:email,
            message:message
        };
        
        init("user_NI2YtL4qPeOue4aib0abR");

        emailjs.send('service_nxyq4yu','template_u2b0o8d', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
            .then((response) => {
               setShow(true);
            }, (err) => {
                alert('We were unable to send your message! Please call us!');
            });
    };

    return (
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Alert show={show} variant="success" style={{zIndex:3}}>
                <Alert.Heading>Email Sent</Alert.Heading>
                <p style={{color: 'black' }} >Thank you for your message. We will contact you as soon as possible.</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        OK
                    </Button>
                </div>
            </Alert>
           
            <form onSubmit={handleSubmit} style={{ flexDirection: 'column', display: 'flex' }}>
            <TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:1,
        width:"16rem"
      }} id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>handleChange(e,"name")}  value={name} />
            
            <TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:1,
        width:"16rem"
      }} type="email" id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>handleChange(e,"email")}  value={email} />


<TextField sx={{
        svg: { color: 'white' },
        input: { color: 'white' },
        label: { color: '#b1955a' },
        marginTop:1,
        width:"16rem"
      }} id="outlined-basic" label="Phone" variant="outlined" onChange={(e)=>handleChange(e,"phone")}  value={phone} />


<TextField
sx={{
    svg: { color: 'white' },
    input: { color: 'white' },
    label: { color: '#b1955a' },
    marginTop:3,
    width:"16rem",
    marginBottom:2,
    color:'white'
  }} 
  inputProps={{ style: { color: "white" } }}
  id="outlined-basic" label="Message" variant="outlined" placeholder='Your message...'
  multiline
  rows={2}
  onChange={(e)=>handleChange(e,"message")}  value={message}
/>

<Button onClick={handleSubmit}  variant="contained" type={"submit"} style={{backgroundColor:'#b1955a'}}>Send</Button>
              
            </form>
        </div>
    );
}