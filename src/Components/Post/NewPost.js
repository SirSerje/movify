import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost} from '../../actions/postAction'

class NewPost extends Component {
    state = {
        title: "",
        body: "",
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleReset = () => {
        this.setState({
            title: "",
            body: "",
        })
    };

    render() {
        return (
            <div>
                <form onChange={this.handleSubmit}>
                    <div>
                        <input type="text"
                               placeholder="Title"
                               className="form-control"
                               name="title"
                               onChange={this.handleInputChange}
                               value={this.state.title}
                        />
                    </div>
                    <div>
                        <textarea name="body"
                                  id=""
                                  cols="20"
                                  rows="10"
                                  placeholder="Body"
                                  className="form-control"
                                  onChange={this.handleInputChange}
                                  value={this.state.body}>
                        </textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Add Post</button>
                        <button type="button"
                                className="btn btn-warning"
                                onChange={this.handleReset}>Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddPost: post => {
        dispatch(createPost(post))
    }
});

export default connect(
    null,
    mapDispatchToProps)(NewPost);