import { FC } from "react";
import Logo from "../minComponents/Logo.tsx";
import Menu from "../minComponents/Menu.tsx";
import Phone from "../UI/Phone/Phone.tsx";
import MyButtonSecond from "../UI/MyButtonSecond/MyButtonSecond.tsx";
import telephone from "../../images/icons/telephone.svg";

import "../../styles/buildComponentsStyles/footerMenuBlock.scss";

const FooterMenuBlock: FC = () => {
  return (
    <div className="footerMenu">
      <div className="footerMenu__wrapper">
        <div className="footerMenu__logo">
          <Logo />
        </div>
        <div className="footerMenu__menu">
          <Menu />
        </div>
        <div className="footerMenu__tel">
          <div className="footerMenu__tel-image">
            <img src={telephone} alt="" />
          </div>
          <Phone />
        </div>
        <MyButtonSecond>Перезвонить мне</MyButtonSecond>
      </div>
    </div>
  );
};

export default FooterMenuBlock;
