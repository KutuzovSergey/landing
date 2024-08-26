import { FC } from 'react';
import phone from '../../images/icons/phone.svg';
import brokenPhone from '../../images/content/brokenPhone.png';
import microcircuit from '../../images/content/microcircuit.png';
import Info from '../minComponents/Info.tsx';

import '../../styles/buildComponentsStyles/additionalInfoBlock.scss';

const AdditionalInfoBlock: FC= () => {
    return (
        <div className="additional-info">
            <div className="additional-info__block-top">
                <div className="additional-info__block additional-info__block-min additional-info_parts">
                    <Info
                        infoTitle="Слишком сильные повреждения?"
                        infoText="Сдайте ваше устройство на запчасти"
                        infoLinkText="Разобрать на запчасти"
                        infoTextSecond="обратившись в наш сервис" />
                    <div className="additional-info__img-fon1">
                        <img src={microcircuit} alt="" />
                    </div>
                    
                </div>
                <div className="additional-info__block additional-info__background1 additional-info__block-min additional-info_prices">
                    <div className="additional-info__title">
                        <span>Ознакомится с более точными ценами</span>
                    </div>
                    <div className="additional-info__phone">
                        <div className="additional-info__phone-icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="additional-info__phone-text">
                            <span>89610988111</span>
                        </div>
                    </div>
                    <div className="additional-info__img-fon2">
                        <img src={brokenPhone} alt="" />
                    </div>
                </div>
            </div>
            <div className="additional-info__block additional-info__bottom ">
                <Info
                    infoTitle="Покупайте запчасти онлайн"
                    infoText="Комплектующие на различные девайсы прямо со склада"
                    infoLinkText="Посмотреть" />
            </div>
        </div>
    )
}

export default AdditionalInfoBlock;