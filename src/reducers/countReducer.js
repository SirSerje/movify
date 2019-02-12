const initialState = 100;

const countReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "INCREMENT":
            console.log("state", state);
            console.log("payload", payload);
            return state + payload;

        case "DECREMENT":
            return state + payload;

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

export default countReducer;
