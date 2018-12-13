import React from 'react';
import {Card} from './Card';
import style from './CardList.module.css';

export const CardList = ({moviesProp}) => { //destructuring
    return (
        <div className={style.container}>
            <div className={style.list}>
                {moviesProp.map(moveItem => (
                    <div className={style.item}
                        key={moveItem.id}>
                        <Card title={moveItem.title}
                              image={moveItem.image}
                              description={moveItem.description}
                              genre={moveItem.genre}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};
