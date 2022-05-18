// @flow 
import * as React from 'react';
import Button from '../../Button/Button';
import Offer from '../../Offer';
// import '../../../scss/_heroBanner.scss';

const HeroBanner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='hero-banner'>
                    <div className='hero-banner-image'></div>
                    <div className='hero-banner-content'>
                        <Offer offer="New" classes='hero-banner-category' />
                        {/* <span className='hero-banner-category'>New!</span> */}
                        <h1>All Natural <br /> Skin Remedies.</h1>
                        <p>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
                        <div className='hero-banner-button'>
                            <Button text="shop products"></Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;