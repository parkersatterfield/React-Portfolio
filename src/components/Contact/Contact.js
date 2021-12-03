import './Contact.css'
import blob from './blob.svg'
import axios from 'axios';
import {useState} from 'react';

{/* <form className="form" */}
// style={{ 
//     backgroundImage: `url(${blob})`, 
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'top',
// }}>

function Contact() {
    const formId = '9oEYMWJB';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }

    const postSubmission = async () => {
        const payload = {
            name: formState.name,
            email: formState.email,
            message: formState.message
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({
                text:'Thanks for the message!',
                color: 'red'
            });
            setFormState({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            console.error(error);
            setMessage({
                text: 'Something went wrong. Please try again.',
                color: 'green'
            })
        }
    }

    const updateFormControl = (event) => {
        const {id, value} = event.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey]= value;
        setFormState(updatedFormState);
    }

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState({
        text: '',
        color: ''
    });

    return (
        <div className = 'contact'
        style={{ 
            backgroundImage: `url(${blob})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100vh'
            }}>
            <form className="formContainer">
                <div>
                    <div className = "form" onSubmit={submitForm}>
                        <h4>Hit me up!</h4>
                        {message && 
                        <div className={`message ${message.color}`}>
                            {message.text}
                        </div>}
                        <div className="singles">
                            <div className="singleInput">
                                <label>Email</label>
                                <input id='email' type="email" value={formState.email} onChange={updateFormControl}/>
                            </div>
                            <div className="singleInput">
                                <label>Name</label>
                                <input id='name'type="text" value={formState.name} onChange={updateFormControl}/>
                            </div>
                        </div>
                        <div className="multi">
                            <label>Message</label>
                            <textarea id='message' type="text" value={formState.message} onChange={updateFormControl}/>
                            <div className="buttonContainer">
                                <button disabled={submitting || formState.message==='' || formState.name === '' || formState.email ===''} onClick={submitForm}>
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="linkContainer">

                <div className= 'links'>
                    <h4>Contact</h4>
                    <div className="linksList">
                        <a href="mailto:parkers205@gmail.com">Email</a>
                        <a href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer">LinkedIn</a>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
