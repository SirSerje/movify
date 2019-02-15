import React from 'react';
import Post from "./Post";
import {deletePost} from "../../actions/postAction";
import {connect} from "react-redux";

function PostList({posts, onDelete}) {
    return (
        <div>
            {posts.map(post => {
                return (
                    <Post post={post}
                          key={post.id}
                          onDelete={onDelete}
                    />
                )
            })}
        </div>
    );
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => {
        dispatch(deletePost(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(PostList);