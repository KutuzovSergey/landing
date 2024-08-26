import { FC } from "react";

import "../../styles/minComponentsStyles/serviceCard.scss";

type Props = {
  id: string;
  nameService: string;
  deadline: string;
  price: string;
};

const ServiceCard: FC = (props: Props) => {
  return (
    <a className="service" id={props.id}>
      <div className="service__title">
        <span className="service__text">{props.nameService}</span>
      </div>
      <div className="service__block">
        <div className="service__deadline">
          <span className="service__text">{props.deadline}</span>
        </div>
        <div className="service__price">
          <span className="service__text">{props.price}</span>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
