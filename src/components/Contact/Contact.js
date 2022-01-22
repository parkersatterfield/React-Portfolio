import './Contact.css'
import blob from './blob.svg'
import logo from '../Nav/logo.svg'
import axios from 'axios';
import {useState} from 'react';
import {motion} from 'framer-motion';

function Contact() {
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: top 120% left -250px;
        background-size: 160vh;
        transition: ease-in-out 0.5s;
    `;

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
        <motion.div 
            className = 'contact'
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}>
            <form className="formContainer">
                <div className = "form" onSubmit={submitForm}>
                    <div className="formSidebar">
                        <div className="linkContainer">
                            <div className= 'links'>
                                <div className="linksList">
                                    <div>
                                        <a class="fa fa-github" href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer"> </a>
                                        <p>GitHub</p>
                                    </div>
                                    <div>
                                        <a class="fa fa-linkedin"href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer"> </a>
                                        <p>LinkedIn</p>
                                    </div>
                                    <div>
                                        <a class="fa fa-instagram" href="https://www.instagram.com/parker_satterfield/" target="_blank" rel="noreferrer"> </a>
                                        <p>Instagram</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formMain'>
                        <div className='formHead'>
                            <h1>Hit me up!</h1>
                            <img src={logo} alt="" />
                        </div>
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
                            <button className='submitButton' disabled={submitting || formState.message==='' || formState.name === '' || formState.email ===''} onClick={submitForm}>
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </motion.div>
    )
}

export default Contact;
