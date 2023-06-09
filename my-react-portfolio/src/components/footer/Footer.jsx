import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
function Footer() {
    return (
        <footer>
            <a href='#' className='footer__logo'>Ardel Vito</a>
            <ul className='permalinks'>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#experience'>Experiences</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF/></a>
                <a href='https://instagram.com'><FiInstagram/></a>
                <a href='https://twitter.com'><FiTwitter/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; John Doe. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;
