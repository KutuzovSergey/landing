import React from "react";
import jobArrowLeft from '../../../images/icons/jobArrowLeft.svg';
import jobArrowRight from '../../../images/icons/jobArrowRight.svg';

import cl from "./SwitchSlider.module.scss";

const SwitchSlider: React.FC = () => {
  return (
    <div className={cl.switch}>
      <div className={cl.switch__arrow_wrapper}>
        <div className={cl.switch__arrow}>
          <img src={jobArrowLeft} alt="" />
        </div>
      </div>
      <div className={cl.switch__text}>
        <span className={cl.switch__text_first}>01</span>
        <span className={cl.switch__text_second}>/09</span>
      </div>
      <div className={cl.switch__arrow_wrapper}>
        <div className={cl.switchif__arrow}>
          <img src={jobArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SwitchSlider;
