/*DESCRIBE ONE ELEMENT*/
import React from 'react';
import style from './Card.module.css'

//stateless component
const Card = ({title, image, description, genre}) => ( //props from
    <div className={style.wrapper}>
        <h2 className={style.header}>{title}</h2>
        <img className={style.image}
            src={image}
             alt='some text'
        />
        <p className={style.desc}>{description}</p>
        <p className={style.genre}>{genre}</p>
    </div>
);
export default Card;