import { ADD_POST, DELETE_POST } from "../actions/types";

const postReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_POST:
            return [...state, payload];//create clone of state and push object in it

        case DELETE_POST:
            return state.filter(post => post.id !== payload.id);

        default:
            return state;
    }
};

export default postReducer;
