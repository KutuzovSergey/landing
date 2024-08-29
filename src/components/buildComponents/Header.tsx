import { FC } from 'react';
import phone from '../../images/icons/telephone.svg';
import Logo from '../minComponents/Logo.tsx';
import Menu from '../minComponents/Menu.tsx';
import MyButtonFirst from '../UI/MyButtonFirst/MyButtonFirst.tsx';
import Phone from '../UI/Phone/Phone.tsx';
import Sandwich from '../UI/Sandwich/Sandwich.tsx';

import '../../styles/buildComponentsStyles/header.scss';

const Header: FC= () => {
    return (
        <div className="header">
            <div className="header__sandwich">
                <Sandwich/>
            </div>
            <Logo />
            <div className="header__menu">
                <Menu />
            </div>
            <div className="header__phone">
                <Phone />
            </div>
            <div className="header__call-back">
                <MyButtonFirst>Перезвонить мне</MyButtonFirst>
            </div>
            <div className="header__call-back-image">
                <img src={phone} alt="" />
            </div>
            
        </div>
    )
}

export default Header;