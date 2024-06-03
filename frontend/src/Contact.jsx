import React, { useRef, useState } from 'react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formForEmail = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [sendingMethod, setSendingMethod] = useState('');
    const baseUrl = 'http://localhost:1337/api/user-queries';

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitForStrapi = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                data: formData
            };
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload) // Sending the modified payload
            });

            if (!response.ok) {
                toast.error("Something went wrong!!")
            }

            const result = await response.json();
            toast.success("Strapi - data sent successfuly!!")
            console.log(result);
        } catch (error) {
            console.error('Failed to send data:', error); // Improved error handling
        }
    };




    ////email Functionality/////////////////////////////

  const handleSubmitForEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wbqceei', 'template_jdqd0q3', formForEmail.current, {
        publicKey: 'SUQM_CxhSmZ28kBEx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email - data sent succesfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };


///////////////////////////////////////////////////////


    const handleSendToStrapi = async (event) => {
        event.preventDefault();
        setSendingMethod('Strapi');
        toast.info("Sending to Strapi!");

    };

    const handleSendToEmail = async (event) => {
        event.preventDefault();
        setSendingMethod('Email');
        // Handle email sending logic here
        toast.info("Sending to Email!");
    };

    return (
        <>
            <div>
                <div className="method">
                    <button onClick={handleSendToStrapi}>Send to Strapi</button>
                    <button onClick={handleSendToEmail}>Send to Email</button>
                </div>
                    <p style={{textAlign:'center'}}>*select a method of contact</p>
            </div>
            {sendingMethod === 'Strapi' &&
                <div className="contact">
                    <div className="component">
                        <form className="form-container" onSubmit={handleSubmitForStrapi}>
                            <h2>Sending method: {sendingMethod}</h2>
                            <div className="form-group">
                                <input type="text" id="firstName" name="firstName" placeholder='First Name' required onChange={handleChange} value={formData.firstName} />
                            </div>

                            <div className="form-group">
                                <input type="text" id="lastName" name="lastName" placeholder='Last Name' required onChange={handleChange} value={formData.lastName} />
                            </div>

                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder='E-mail' required onChange={handleChange} value={formData.email} />
                            </div>

                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" placeholder='Phone' required onChange={handleChange} value={formData.phone} />
                            </div>

                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" placeholder='Write your queriue here...' required onChange={handleChange} value={formData.message} />
                            </div>

                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            }
            {sendingMethod === 'Email' &&
                <div className="contact">
                    <div className="component">
                        <form className="form-container" ref={formForEmail} onSubmit={handleSubmitForEmail}>
                            <h2>Sending method: {sendingMethod}</h2>
                            <div className="form-group">
                                <input type="text" id="firstName" name="firstName" placeholder='First Name' required onChange={handleChange} value={formData.firstName} />
                            </div>

                            <div className="form-group">
                                <input type="text" id="lastName" name="lastName" placeholder='Last Name' required   />
                            </div>

                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder='E-mail' required  />
                            </div>

                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" placeholder='Phone' required  />
                            </div>

                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" placeholder='Write your queriue here...' required  />
                            </div>

                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    );
}
