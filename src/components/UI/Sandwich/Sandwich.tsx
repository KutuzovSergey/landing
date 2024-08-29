import React from 'react';

import cl from './Sandwich.module.scss';

const Phone:React.FC= () => {
    return (
        <div className={cl.sandwich}>
            <span className={cl.sandwich__item}></span>
            <div className={cl.sandwich__wrapper}>
                <div className={cl.sandwich__block_first}>
                    <span className={cl.sandwich__item}></span>
                </div>
                <div className={cl.sandwich__block_second}>
                    <span className={cl.sandwich__item}></span>
                </div>
            </div>
            <span className={cl.sandwich__item}></span>
        </div>
    )
}

export default Phone;