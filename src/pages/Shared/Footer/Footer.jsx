import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className='w-24' src={logo} alt="" />
                    <p>Musicy Industries Ltd.<br />Providing reliable music instrument since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Follow Us</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/profile.php?id=100008684070891'><FaFacebookF className='w-6 h-6'></FaFacebookF></Link>
                        <Link to='https://www.linkedin.com/in/foysal-hossain-07b611211/'><FaLinkedinIn className='w-6 h-6'></FaLinkedinIn></Link>
                        <Link to='https://www.youtube.com/'><FaYoutube className='w-6 h-6'></FaYoutube></Link>
                    </div>
                </div>
            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by MUSICY Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;