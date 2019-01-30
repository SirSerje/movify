import React from 'react';
import Card from './Card';
import style from './CardList.module.css';
import {Link} from "react-router-dom";


const CardList = ({moviesProp}) => { //destructuring
    return (
        <div className={style.container}>
            <div className={style.list}>
                {moviesProp.map(moveItem => {
        //sorry for wrong styling
                    const {id, title, image, description, genre} = movieItem;
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
