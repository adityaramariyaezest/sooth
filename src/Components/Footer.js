import React from 'react';
import FooterNav from './FooterNav';
import NewsLetter from './NewsLetter/NewsLetter';
import Logo from './Logo'
import SocialLinks from './SocialLinks';


function Footer() {
    return (
        <footer>
            <div className='footer container'>
                <div className='footer-form'>
                    <Logo />
                    <NewsLetter modifier="transparent" placeholder="Your email..." buttonClass="light" buttonText="subscribe" />
                </div>
                <FooterNav />

                <div className='footer-extra'>
                    <p>SOOTH ALL RIGHTS RESERVED</p>
                    <div className='footer-extra-wrapper'>
                        <ul className='footer-nav-links footer-nav-links--row'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>

                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;