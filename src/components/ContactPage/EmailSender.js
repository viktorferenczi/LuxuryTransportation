import React, { useState } from 'react';

import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'


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
            name:e.target.name.value,
            phone:e.target.phone.value,
            email:e.target.email.value,
            message:e.target.message.value
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
            <Alert show={show} variant="success">
                <Alert.Heading>Email Sent</Alert.Heading>
                <p>Thank you for your letter. We will contact you as soon as possible.</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        OK
                    </Button>
                </div>
            </Alert>
           
            <form onSubmit={handleSubmit} style={{ flexDirection: 'column', display: 'flex' }}>
                <label style={{ color: 'white', textAlign: 'left' }} htmlFor={"name"}>Full Name*</label>
                <input onChange={ (e) => handleChange(e,"name")} required type="text" id="name" name="name" value={name} placeholder={"Your name"}/>

                <label style={{ color: 'white', textAlign: 'left' }} htmlFor={"email"}>Email*</label>
                <input onChange={ (e) => handleChange(e,"email")} required type="email" id="email" name="email" value={email} placeholder={"Your email"}/>

                <label style={{ color: 'white', textAlign: 'left' }} htmlFor={"phone"}>Phone number*</label>
                <input onChange={ (e) => handleChange(e,"phone")} required type="text" id="phone" name="phone" value={phone} placeholder={"Your phone number"}/>

                <label style={{ color: 'white', textAlign: 'left' }} htmlFor={"message"}>Message*</label>
                <textarea onChange={ (e) => handleChange(e,"message")} required type="text" id="message" name="message" value={message} placeholder={"Your message"}/>

                <Button className="send-contact-mail-button" type={"submit"}>Send</Button>
            </form>
        </div>
    );
}