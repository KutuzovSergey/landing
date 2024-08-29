import { FC } from 'react';

import '../../styles/minComponentsStyles/setting.scss';

type Props = {
    icon: any,
    iconAdaptive: any,
    textFirst: string,
    textSecond: string,
}

const Setting: FC= (props: Props) => {
    return (
        <div className="setting">
            <div className="setting__image">
                <img src={props.icon} alt="" className="setting__icon"/>
                <img src={props.iconAdaptive} alt="" className="setting__icon-adaptive" />
            </div>
            <div className="setting__block">
                <span>{props.textFirst}</span>
                <span>{props.textSecond}</span>
            </div>
        </div>
    )
}

export default Setting;