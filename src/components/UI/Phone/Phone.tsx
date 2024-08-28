import React from 'react';

import cl from './Phone.module.scss';

const Phone:React.FC= () => {
    return (
        <div className={cl.phone}>
            <span>+8 (343) 311-21-11</span>
        </div>
    )
}

export default Phone;