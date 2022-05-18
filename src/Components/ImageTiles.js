import Image from './Image/Image';

const ImageTiles = ({ image, title, description }) => {
    return (
        <div className="image-tiles-item">
            <div className="image-tiles-img">
                <Image source={`./images/${image}.png`} alt={title} />
            </div>
            <p className="image-tiles-title">{title}</p>
            <p className="image-tiles-des">{description}</p>
        </div>
    );
}

export default ImageTiles;