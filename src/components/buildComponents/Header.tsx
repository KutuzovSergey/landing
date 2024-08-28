import { FC } from 'react';
import Logo from '../minComponents/Logo.tsx';
import Menu from '../minComponents/Menu.tsx';
import MyButtonFirst from '../UI/MyButtonFirst/MyButtonFirst.tsx';
import Phone from '../UI/Phone/Phone.tsx';

import '../../styles/buildComponentsStyles/header.scss';

const Header: FC= () => {
    return (
        <div className="header">
            <Logo />
            <div className="header__menu">
                <Menu />
            </div>
            <Phone />
            <MyButtonFirst>Перезвонить мне</MyButtonFirst>
        </div>
    )
}

export default Header;