import Product from "./ProductTeaser";
import ProductListHeader from "./ProductHeader";

const ProductList = ({ category, products, mobileCarousel }) => {
    return (
        <div className="product-wrapper container">
            <ProductListHeader category={category} />
            <div className="product-list" data-mobile-carousel={mobileCarousel}>
                {
                    products && products.map(({ id, img, offer, name, description, price }) => {
                        return (
                            <Product
                                name={name}
                                offer={offer}
                                description={description}
                                price={price}
                                img={img}
                                id={id}
                            />
                        )
                    }

                    )
                }
            </div>
        </div>
    )
}

export default ProductList;