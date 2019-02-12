import React from 'react';
import {connect} from "react-redux";
import countActions from '../../actions/countActions';

const Blog = ({value, increment, decrement, reset}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const mapStateToProps = state => ({
    value: state.value,
});
console.log();
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(countActions.increment(5))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Blog);