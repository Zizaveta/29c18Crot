import React from 'react';

class ImageCard extends React.Component {
    render() {
        console.log("----------Image Card props----------", this.props)
        return (
            <div>
                <h1>Image Card</h1>
            </div>
        );
    }
}

export default ImageCard; 