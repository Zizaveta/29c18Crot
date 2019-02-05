import React from 'react';
import ImageList from './ImageList';
import { connect } from "react-redux";
import { fetchImages } from "../actions";


class ImagePage extends React.Component {
    
    state = {  }

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        console.log("----------Image Page props----------", this.props)
        return (
            <div>
                <h1>Page Images</h1>
                <ImageList images={this.props.images} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.images
    }; 
}
 
export default connect(mapStateToProps, {fetchImages})(ImagePage);