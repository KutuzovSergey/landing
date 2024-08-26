import { FC } from 'react';
import infoArrow from '../../images/icons/infoArrow.png';

import '../../styles/minComponentsStyles/info.scss';

type Props = {
    infoTitle: string,
    infoText: string,
    infoLinkText: string,
    infoTextSecond?: string
}

const Info: FC= (props: Props) => {
    return (
        <div className="info-block">
            <div className="info-block__title">
                <span>{props.infoTitle}</span>
            </div>
            <div className="info-block__text">
                <span>{props.infoText}</span>
                <span>{props.infoTextSecond}</span>
            </div>
            <div className="info-block__link">
                <a href="#">
                    <div className="info-block__link-text">
                        <span>{props.infoLinkText}</span>
                    </div>
                    <div className='info-block__img'>
                        <img src={infoArrow} alt="" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Info;