const ProductHeader = ({ category }) => {
    return (
        <div className="product-header">
            <p>{category}</p>
            <a href="#">Shop all products</a>
        </div>
    );
}

export default ProductHeader;