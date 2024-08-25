import { FC } from "react";

import "../../styles/minComponentsStyles/menu.scss";

const Menu: FC = () => {
  return (
    <nav className="menu">
          <ul className="menu__block">
        <li className="menu__item">
            <a className="menu__link" href="#company">Наши услуги</a>
        </li>
        <li className="menu__item">
            <a className="menu__link" href="#amenities">Бренды</a>
        </li>
        <li className="menu__item">
            <a className="menu__link" href="#certificates">Отзывы</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
