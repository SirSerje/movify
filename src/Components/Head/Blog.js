import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, {Component} from 'react';
import NewPost from "../NewPost";

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