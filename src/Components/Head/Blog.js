import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, {Component} from 'react';
import NewPost from "../../NewPost";
// import {connect} from "react-redux";

// import countActions from '../../actions/countActions';

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <NewPost/>
                    </div>
                    <div className="col-md-6">
                        Display Post
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;


/*
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
    mapDispatchToProps)(Blog);*/
