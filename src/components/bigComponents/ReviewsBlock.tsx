import { FC } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.tsx';
import ReviewsSliders from '../buildComponents/ReviewsSliders.tsx';

import '../../styles/bigComponentsStyles/reviewsBlock.scss';

const ReviewsBlock: FC= () => {
    return (
        <div className="reviews">
            <div className="reviews__wrapper">
                <MyTitle>Отзывы</MyTitle>
                <ReviewsSliders />
            </div>
        </div>
    )
}

export default ReviewsBlock;