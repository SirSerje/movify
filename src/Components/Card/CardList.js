import React from 'react';
import Card from './Card';
import style from '../../css/CardList.module.css';
import {Link} from "react-router-dom";


const CardList = ({moviesProp}) => { //destructuring
    return (
        <div className={style.container}>
            <div className={style.list}>
                {moviesProp.map(moveItem => {
                    const {id, title, image, description, genre} = moveItem;
                    return <Link to="/:id">
                        <div className={style.item}
                             key={id}>
                            <Card title={title}
                                  image={image}
                                  description={description}
                                  genre={genre}
                            />
                        </div>
                    </Link>
                })}
            </div>
        </div>
    );
};
export default CardList;