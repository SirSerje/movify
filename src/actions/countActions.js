const increment = value => ({
    type: "INCREMENT",
    payload: value,
});

const decrement = value => ({
   type: "DECREMENT" ,
    payload: value,
});

const reset = () => ({
   type: "RESET",
});

export default {increment, decrement, reset};