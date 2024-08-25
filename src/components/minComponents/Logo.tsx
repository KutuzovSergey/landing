import { FC } from 'react';
import logoImage from '../../images/logo.svg';

import '../../styles/minComponentsStyles/logo.scss';

const Logo: FC= () => {
    return (
        <div className="logo">
            <img src={logoImage} alt="АКСМОБИ" />
        </div>
    )
}

export default Logo;