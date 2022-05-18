
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faCartArrowDown, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faHouseChimney, faCartArrowDown, faPhone);

const Service = () => {
    return (
        <div className='container'>
            <div className='service-wrapper'>
                <div className="service-item">
                    <FontAwesomeIcon icon={faHouseChimney} />
                    <div className="service-description">We’re offering new ways to shop.</div>
                    <a href="#">Store locator</a>
                </div>
                <div className="service-item">
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <div className="service-description">Buy online, pickup in store</div>
                    <a href="#">Learn More</a>
                </div>
                <div className="service-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="service-description">Curbside pickup</div>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default Service;