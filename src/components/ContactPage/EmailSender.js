import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_NI2YtL4qPeOue4aib0abR");

export const EmailSender = () => {

    // we need to extract this data from here to somewhere safe and refact this code but its too late night for that sh*t

    //User ID    user_NI2YtL4qPeOue4aib0abR
    //Access Token de1d93e023ead83a86aef750ee23d4d7
    //Template ID template_u2b0o8d
    //Service ID service_nxyq4yu

    const handleSubmit = (e) => {
        
        e.preventDefault(); // Prevents default refresh by the browser

        const templateParams = {
            name:e.target.name.value,
            phone:e.target.phone.value,
            email:e.target.email.value,
            message:e.target.message.value
        };
        
        emailjs.send('service_nxyq4yu','template_u2b0o8d', templateParams, 'user_NI2YtL4qPeOue4aib0abR')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Full Name*</p>
                <input required type="text" name="name"/>

                <p>Email*</p>
                <input required type="email" name="email"/>

                <p>Phone*</p>
                <input required type="text" name="phone"/>

                <p>Message*</p>
                <textarea required type="text" name="message"/>

                <button type={"submit"}>Send</button>
            </form>
        </div>
    );
}