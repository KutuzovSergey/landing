import { FC } from "react";
import Logo from "../minComponents/Logo.tsx";
import Menu from "../minComponents/Menu.tsx";
import Phone from "../UI/Phone/Phone.tsx";
import MyButtonSecond from "../UI/MyButtonSecond/MyButtonSecond.tsx";
import telephone from "../../images/icons/telephone.svg";

import "../../styles/buildComponentsStyles/footerMenuBlock.scss";

const FooterMenuBlock: FC = () => {
  return (
    <div className="footer-menu">
      <div className="footer-menu__wrapper">
        <div className="footer-menu__logo">
          <Logo />
        </div>
        <div className="footer-menu__menu">
          <Menu />
        </div>
        <div className="footer-menu__tel">
          <div className="footer-menu__tel-image">
            <img src={telephone} alt="" />
          </div>
          <Phone />
        </div>
        <div className="footer-menu__button">
          <MyButtonSecond>Перезвонить мне</MyButtonSecond>
        </div>
      </div>
    </div>
  );
};

export default FooterMenuBlock;
