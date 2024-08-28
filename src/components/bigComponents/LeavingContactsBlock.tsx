import { FC } from 'react';
import ApplicationFormBlock from '../buildComponents/ApplicationFormBlock.tsx';

import '../../styles/bigComponentsStyles/leavingContactsBlock.scss';


const LeavingContactsBlock: FC = () => {

    return (
        <div className="contacts-form">
            <ApplicationFormBlock
                titleText='Заберем ваш сломанный смартфон прямо из дома'
                titleSmallText='Оставьте Ваш номер телефона и мы перезвоним Вам прямо сейчас.'
                />
        </div>
    )
}

export default LeavingContactsBlock;