import React from 'react';
import style from '../../css/Post.module.css'

export default ({post: {title, body, id}, onDelete}) => {
    return (
        <div className={style.wrapper}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button className="btn btn-danger"
                    type="button"
                    onClick={() => onDelete(id)}>Remove
            </button>
        </div>
    );
};