import { FC } from "react";
import MyTitle from "../UI/MyTitle/MyTitle.tsx";

import "../../styles/bigComponentsStyles/infoBlock.scss";

const InfoBlock: FC = () => {
  return (
    <div className="info">
      
      <div className="info__wrapper">
        <div className="info__title">
          <MyTitle>Статистика</MyTitle>
        </div>
        
        <div className="info__text">
          <p>
            В своём стремлении улучшить пользовательский опыт мы упускаем, что
            базовые сценарии поведения пользователей формируют глобальную
            экономическую сеть и при этом - ограничены исключительно образом
            мышления. Дальнейшее развитие различных форм деятельности позволяет
            оценить значение благоприятных перспектив. Прежде всего, новая
            модель организационной деятельности играет определяющее значение для
            соответствующих условий активизации. Имеется спорная точка зрения,
            гласящая примерно следующее: непосредственные участники технического
            прогресса неоднозначны и будут объявлены нарушающими
            общечеловеческие нормы этики и морали. Банальные, но неопровержимые
            выводы, а также непосредственные участники технического прогресса и
            по сей день остаются уделом либералов, которые жаждут быть
            заблокированы в рамках своих собственных рациональных ограничений.
          </p>
          <p className="info__mobile-text">В своём стремлении улучшить пользовательский опыт мы упускаем, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом -  ограничены исключительно образом мышления. Дальнейшее развитие различных форм деятельности позволяет оценить значение благоприятных перспектив.</p>
        </div>

        <div className="info__block">
          <div className="info__circle-big">
            <div className="info__circle">
              <span>1500</span>
            </div>
          </div>
          <div className="info__inscription">
            <span>смартфонов OPPO</span>
            <span>отремонтировано</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
