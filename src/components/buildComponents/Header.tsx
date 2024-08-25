import { FC } from 'react';
import Logo from '../minComponents/Logo.tsx';
import Menu from '../minComponents/Menu.tsx';
import MyButtonFirst from '../UI/MyButtonFirst/MyButtonFirst.tsx';

import '../../styles/buildComponentsStyles/header.scss';

const Header: FC= () => {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <div className="header__phone">
                <span>+8 (343) 311-21-11</span>
            </div>
            <MyButtonFirst>Перезвонить мне</MyButtonFirst>
        </div>
    )
}

export default Header;