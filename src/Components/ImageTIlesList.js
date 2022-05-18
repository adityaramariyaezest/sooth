import ImageTiles from "./ImageTiles";

const ImageTilesList = ({ tiles }) => {
    return (
        <div className="image-tiles-wrapper container">
            <h2>We use the best ingredients</h2>
            <p>Explore our innovative skincare products</p>
            <div className="image-tiles-list">
                {
                    tiles && tiles.map(({ id, image, title, description }) => {
                        return (
                            <ImageTiles
                                image={image}
                                title={title}
                                description={description}
                                id={id}
                            />
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}

export default ImageTilesList;