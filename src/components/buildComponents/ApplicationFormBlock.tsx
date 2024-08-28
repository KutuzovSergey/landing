import { FC } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.tsx';
import MyTitleSmall from '../UI/MyTitleSmall/MyTitleSmall.tsx';
import ApplicationForm from '../minComponents/ApplicationForm.tsx';

import '../../styles/buildComponentsStyles/applicationFormBlock.scss';

type Props = {
    titleText: string,
    titleSmallText: string,
}
const ApplicationFormBlock: FC = (props: Props) => {
    return (
        <div className="form-wrapper">
            <div className="form-wrapper__title">
                <MyTitle>{props.titleText}</MyTitle>
            </div>
            <div className="form-wrapper__title-small">
                <MyTitleSmall>{props.titleSmallText}</MyTitleSmall>
            </div>
            <div className="form-wrapper__form">
                <ApplicationForm />
            </div>
        </div>
    )
}

export default ApplicationFormBlock;