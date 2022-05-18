
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter, faYoutube);

const SocialLinks = () => {
    return (
        <ul className="social-links">
            <li>
                <a href="#">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
            </li>

            <li>
                <a href="#">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            </li>

            <li>
                <a href="#">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
            </li>

            <li>
                <a href="#">
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                </a>
            </li>
        </ul>
    );
}

export default SocialLinks;