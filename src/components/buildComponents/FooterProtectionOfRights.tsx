import { FC } from 'react';

import '../../styles/buildComponentsStyles/footerProtectionOfRights.scss';

const FooterProtectionOfRights: FC= () => {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom__wrapper">
                <span className="footer-bottom__text">Copyright 2020. Все права защищены</span>
                <span className="footer-bottom__text">Дизайн, разработка, реклама by Axmobi 8961-098-81-11</span>
            </div>
        </div>
    )
}

export default FooterProtectionOfRights;