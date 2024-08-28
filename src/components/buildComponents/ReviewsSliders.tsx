import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import arrowLeft from "../../images/icons/arrowLeft.svg";
import arrowRight from "../../images/icons/arrowRight.svg";
import ReviewsSlider from "../minComponents/ReviewsSlider.tsx";
import { useSlider } from "../../hooks/useSlider.ts"
  ;
import "../../styles/buildComponentsStyles/reviewsSliders.scss";

const ReviewsSliders: FC = () => {
  const reviews = useSelector((state) => state.userReviews);

  const myBlock = useRef(null);

  const [onClickLeft, onClickRight] = useSlider(myBlock);

  return (
    <div class="reviews-sliders">
      <div class="reviews-sliders__switches" onClick={() => onClickLeft()}>
        <img src={arrowLeft} alt="" />
      </div>

      <div className="reviews-sliders__wrapper">
        <div class="reviews-sliders__block" ref={myBlock}>
          {reviews.map((review) => (
            <ReviewsSlider
              userName={review.userName}
              userOpinion={review.userOpinion}
            />
          ))}
        </div>
      </div>

      <div class="reviews-sliders__switches" onClick={() => onClickRight()}>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
};

export default ReviewsSliders;
