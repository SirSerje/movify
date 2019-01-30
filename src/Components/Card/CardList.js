import React from 'react';
import Card from './Card';
import style from './CardList.module.css';
import {Link} from "react-router-dom";


const CardList = ({moviesProp}) => { //destructuring
    return (
        <div className={style.container}>
            <div className={style.list}>
                {moviesProp.map(moveItem => (
                    <Link to="/:id">
                        <div className={style.item}
                             key={moveItem.id}>
                            <Card title={moveItem.title}
                                  image={moveItem.image}
                                  description={moveItem.description}
                                  genre={moveItem.genre}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default CardList;