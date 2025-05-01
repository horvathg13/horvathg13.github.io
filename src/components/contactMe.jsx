import Success from "../successPopUp/success";
import {useState} from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";
const ContactMe=()=>{
    const {t}=useTranslation();
    /*Form fields*/
    const [email, setEmail]=useState();
    const [subject, setSubject]=useState();
    const [messages, setMessage]=useState();
    const [name, setName]=useState();

    /*Event Handling*/
    const [success, setSuccess]=useState(false);

    /*EmailJs*/
    const serviceId = 'service_5w8p83p';
    const templateId = 'template_0ekfba8';
    const publicKey ='sla9D683fWhKs5eu2';

    const templateParams={
        from_name:name,
        from_email:email,
        subject:subject,
        message:messages
    }
    /*Methods*/
     const sendEmail=async(e)=> {
        e.preventDefault();
         emailjs.send(serviceId, templateId, templateParams, publicKey).then(() => {
             setName('');
             setEmail('');
             setSubject('');
             setMessage('');
             setSuccess(true);
             setTimeout(()=>{
                 setSuccess(false)
             },1500)
         }).catch(error=>{
             console.log('FAILED...', error);
         })
    }
    return (
        <div className="contact-me-main">
            <Success success={success}/>
            <div className="title"><h1>{t('contact.title')}</h1></div>
            <form onSubmit={(e) => sendEmail(e)}>
                <div className="field">
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="emial">{t('contact.form.email')}</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="subject">{t('contact.form.subject')}</label>
                    <input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea
                        id="message"
                        value={messages}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>

        </div>
    )
}
export default ContactMe