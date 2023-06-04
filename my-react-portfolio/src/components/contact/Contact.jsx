import './contact.css';

import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ardelvito@gmail.com</h5>
                        <a href='mailto:adminjohn@gmail.com' target='_blank' rel="noreferrer">Send Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>ardel vito</h5>
                        <a href='https://www.messenger.com' target='_blank' rel="noreferrer">Send Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>+6281234567890</h5>
                        <a href='https://api.whatsapp.com/send?phone=+6281234567890' target='_blank' rel="noreferrer">Send Email</a>
                    </article>
                </div>
                {/* End of Contact Options */}
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' required></input>
                    <input type='email' name='email' placeholder='Your Email' required></input>
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
