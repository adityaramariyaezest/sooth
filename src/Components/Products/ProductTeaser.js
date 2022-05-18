import Button from '../Button/Button';
import Offer from '../Offer';
import Image from '../Image/Image';


const Product = ({ id, img, offer, name, description, price }) => {
    if (typeof offer === 'number') {
    }

    return (
        <div className="product-item" key={id}>
            <div className="product-image">
                <Image source={`images/${img}.png`} alt={name} />
                {offer ? <Offer classes="product-offer" offer={offer} /> : null}
            </div>
            <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="product-des">{description}</p>
                <p className="product-price">{price}</p>
                <Button classes='block' icon="cart" text="Add to cart" />
            </div>
        </div>

    );
}

export default Product;