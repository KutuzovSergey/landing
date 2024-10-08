import { FC } from 'react';
import Setting from '../minComponents/Setting.tsx';
import dollar from '../../images/icons/setting/dollar.svg';
import wheel from '../../images/icons/setting/wheel.svg';
import key from '../../images/icons/setting/key.svg';
import dollarAdaptive from '../../images/icons/setting/dollarAdaptive.svg';
import wheelAdaptive from '../../images/icons/setting/wheelAdaptive.svg';
import keyAdaptive from '../../images/icons/setting/keyAdaptive.svg';

import '../../styles/bigComponentsStyles/settingsBlock.scss';

const SettingsBlock: FC= () => {
    return (
        <div className="settings">
            <Setting icon={key} iconAdaptive={keyAdaptive} textFirst="Ремонт  и консультация" textSecond="на месте"/>
            <Setting icon={dollar} iconAdaptive={dollarAdaptive} textFirst="Нет скрытых платежей" textSecond="и переплат"/>
            <Setting icon={wheel} iconAdaptive={wheelAdaptive} textFirst="Собственный склад" textSecond="запчастей"/>
        </div>
    )
}

export default SettingsBlock;