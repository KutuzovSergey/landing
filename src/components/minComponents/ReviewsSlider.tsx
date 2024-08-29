import { FC } from 'react';
import userPhoto from '../../images/content/userPhoto.svg';

import '../../styles/minComponentsStyles/reviewsSlider.scss';

type Props = {
    id: number,
    userName: string,
    userOpinion: string,
}

const ReviewsSlider: FC= (props: Props) => {
    return (
        <div className="reviews-slider">
            <div className="reviews-slider__block">
                <div className="reviews-slider__image">
                    <img src={userPhoto} alt="фото" />
                </div>
                <div className="reviews-slider__user-name">
                    <span>{props.userName}</span>
                </div>
            </div>
            
            <div className="reviews-slider__text">
                <span>{props.userOpinion}</span>
            </div>
            
        </div>
    )
}

export default ReviewsSlider;