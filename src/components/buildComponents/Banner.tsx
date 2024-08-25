import { FC } from 'react';
import MyButton from '../UI/MyButton/MyButton.tsx';
import phoneBanner from '../../images/content/phoneBanner.png';

import '../../styles/buildComponentsStyles/banner.scss';

const Banner: FC = () => {
    return (
        <div className="banner">
            <div className="banner__block-info">
                <div className="banner__title">
                    <h1>Ремонт <span className="banner__selected-text">OPPO</span> в Екатеринбурге любой сложности</h1>
                </div>
                <div className="banner__text">
                    <span>Ремонтируем устройства любой сложности в кратчайшие сроки и с гарантией до 3 месяцев</span>
                </div>
                <div className="banner__button">
                    <MyButton>Заказать ремонт</MyButton>
                </div>
            </div>
            <div className='banner__block-image'>
                <div className="banner__image">
                    <img src={phoneBanner} alt="phone" />
                </div>
            </div>
        </div>
    )
}

export default Banner;