
import React, {useState} from "react";
// import './Contact.css';


const Contact  = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''

    })


    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add logic to send the form data to a server or API
    setFormData({ name: '', email: '', message: '' }); // Reset form after 
};

return (
    <div className="contact-container">
        <h2 className='contact-title'>Get in Touch</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                />
            </div>

            <div className="form-group"> 
                <label htmlFor='message'>Message:</label>
                <textarea 
                    id='message' 
                    name='message' 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your message"
                    required
                ></textarea>
            </div>
            <button type='submit' className="submit-button">
                Submit
            </button> 
        </form>
    </div>
);

}

export default Contact;


