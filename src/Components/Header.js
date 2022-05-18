import React, { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);


const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!isActive);
    }

    return (
        <header id='header' className={isActive ? 'header-open' : null}>
            <div className='container'>
                <input id="menu-toggle" type="checkbox" onClick={toggleMenu} />
                <label class="menu-button-container" for="menu-toggle">
                    <div class="menu-button" ></div>
                </label>
                <a href='#' className='header-logo'>Sooth</a>

                <ul className='header-nav'>
                    <li>
                        <a href='#'><FontAwesomeIcon icon={faSearch} /></a>
                    </li>
                    <li>
                        <a href='#'>Cart</a>
                    </li>
                    <li>
                        <a href='#'>Login</a>
                    </li>
                </ul>

                {/* <div className='main-navigation'> */}

                <ul className='header-nav header-nav--block'>
                    <li>
                        <a href='#'>Acne</a>
                    </li>
                    <li>
                        <a href='#'>Sun</a>
                    </li>
                    <li>
                        <a href='#'>Ezcema</a>
                    </li>
                    <li>
                        <a href='#'>Psoriasis</a>
                    </li>
                    <li>
                        <a href='#'>Vitiligio</a>
                    </li>
                </ul>

                <ul className='header-nav header-nav--secondary'>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Consultation</a>
                    </li>
                </ul>
                {/* </div> */}

            </div>
        </header>
    );
}

export default Header;