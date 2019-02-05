import axios from "axios";

export const SET_IMAGES='SET_IMAGES';
export const ADD_IMAGE="ADD_IMAGE";


export function setImages(images) {
    return {
        type: SET_IMAGES,
        images
    };
}
export function addImage(image) {
    return{
        type:ADD_IMAGE,
        image
    }
}


export function saveImage(data){

    return dispatch => {
        return axios.post(`http://localhost:49235/api/Image`, data)
          .then(resp => {
              console.log("---Data insert by Redux---", resp.data);
            dispatch(addImage(resp.data))
          });
      };
}

export function fetchImages() {
    return dispatch => {
        fetch('http://localhost:49235/api/Image')
        .then(res => res.json())
        .then(data => dispatch(setImages(data)))
        .catch(err => {
            console.log("-----Bad request----", err);
        });
    }
}