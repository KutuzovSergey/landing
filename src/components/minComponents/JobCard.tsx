import { FC } from 'react';

import '../../styles/minComponentsStyles/jobCard.scss';

type Props = {
    numberCard: string,
    imageCard: any,
    textCard: string
}

const JobCard: FC = (props: Props ) => {
    return (
        <div className="job">
            <div className="job__number">
                <span className="job__number__text">{props.numberCard}</span>
            </div>
            <div className="job__wrapper__img">
                <div className="job__image">
                    <img src={props.imageCard} alt="" />
                </div>
            </div>
            <div className="job__text">
                <span>{props.textCard}</span>
            </div>
        </div>
    )
}

export default JobCard;