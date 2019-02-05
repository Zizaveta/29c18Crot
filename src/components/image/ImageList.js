import React from 'react';
import ImageCard from './ImageCard';


class ImageList extends React.Component {
    render() {
        console.log("---------Image list props--------", this.props);
        const { images } = this.props;
        const emptyMessage = (
            <p>Список пустий</p>
        );
        const imageList = (
            <div className="row">
                {images.map(item => <ImageCard image={item} key={item.id} />)}
            </div>
        );
        return (
            <div>
                {images.length === 0 ? emptyMessage : imageList}
            </div>
        );

    }
}

export default ImageList; 