
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping);

const Button = ({ text, classes, icon }) => {
    return (
        <button className={`btn btn-${classes}`} type="button">
            {icon ? <FontAwesomeIcon icon={faCartShopping} /> : null}
            {text}
        </button >
    );
}

export default Button;