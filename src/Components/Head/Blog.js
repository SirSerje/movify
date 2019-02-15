import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, {Component} from 'react';
import PostList from "../Post/PostList";
import NewPost from "../Post/NewPost";

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <NewPost/>
                    </div>
                    <div className="col-md-6">
                        <PostList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;