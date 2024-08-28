import { FC } from 'react';
import ApplicationFormBlock from '../buildComponents/ApplicationFormBlock.tsx';

import '../../styles/bigComponentsStyles/consultationBlock.scss';

const ConsultationBlock: FC= () => {
    return (
        <div className="consultation">
            <ApplicationFormBlock
                titleText='Нужна консультация?'
                titleSmallText='Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.' />
        </div>
    )
}

export default ConsultationBlock;