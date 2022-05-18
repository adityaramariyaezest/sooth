import Button from '../Components/Button/Button';
import Image from './Image/Image';

const Teaser = ({ modifier, title, description, image, buttonClass }) => {
    return (
        <div className={`teaser teaser--${modifier}`}>
            <div className="teaser-container container">
                <div className='teaser-content'>
                    <h2 className="teaser-title">{title}</h2>
                    <p className='teaser-description'>{description}</p>
                    <Button text="shop more" classes={buttonClass} />
                </div>
                <div className='teaser-image'>
                    <Image source={`./images/${image}.png`} alt={title} />
                </div>
            </div>

        </div>
    );
}

export default Teaser;