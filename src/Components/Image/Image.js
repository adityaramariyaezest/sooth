const Image = ({ source, alt }) => {
    return (
        <img className="img-responsive" src={source} alt={alt} />
    );
}

export default Image;