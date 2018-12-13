import React from 'react';
import style from './SearchField.module.css';

export const SearchField = ({filterProp, onChangeFilterProp}) => {
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   type="text"
                   value={filterProp}
                   onChange={onChangeFilterProp}
            />
        </div>
    );
};
