import { SET_IMAGES, ADD_IMAGE } from "../actions";
export default function images(state=[], action={}) {
    switch(action.type) {
        case SET_IMAGES:
            return action.images;
        case ADD_IMAGE:
            return [
                ...state,
                action.image
            ];
        default: return state;
    }
}