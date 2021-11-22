import './Contact.css'
// import blob from './blob.svg'
{/* <form className="form" */}
// style={{ 
//     backgroundImage: `url(${blob})`, 
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'top',
// }}>

function Contact() {
    return (
        <div className = 'contact'>
            <form className="formContainer"
            >
                <div className="form">
                    <h4>Hit me up!</h4>
                    <div className="singles">
                        <input placeholder="Email" type="email" />
                        <input placeholder="Name" type="text" />
                    </div>
                    <div className="multi">
                        <textarea placeholder="Message" type="text" />
                        <div className="buttonContainer">
                            <button>Send</button>

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
