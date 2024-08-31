import { FC } from 'react';
import JobCard from '../minComponents/JobCard.tsx';
import card01 from '../../images/content/cards/card01.png';
import card02 from '../../images/content/cards/card02.png';
import card03 from '../../images/content/cards/card03.png';
import card04 from '../../images/content/cards/card04.png';
import { JobCardsArrType } from '../../type/typesMain';
import SwitchSlider from '../UI/SwitchSlider/SwitchSlider.tsx';

import '../../styles/buildComponentsStyles/jobCards.scss';

const jobCardsArr: JobCardsArrType  = [
    {
        number: '01',
        image: card01,
        text: 'Уточняем проблему и проводим диагностику',
    },
    {
        number: '02',
        image: card02,
        text: 'Согласовываем цену и сроки ремонта',
    },
    {
        number: '03',
        image: card03,
        text: 'Осуществляем ремонт',
    },
    {
        number: '04',
        image: card04,
        text: 'Отдаем устройство с ноыми деталями',
    },
]
const JobCards: FC = () => {
    return (
        <div className="cards">
            <div className="cards__wrapper">
                {
                    jobCardsArr.map(card => 
                        <JobCard
                            key={card.number}
                            numberCard={card.number}
                            imageCard={card.image }
                            textCard={card.text}
                    />)
                }
            </div>
            <div className="cards__switch">
                <SwitchSlider/>
            </div>
            
        </div>
    )
}

export default JobCards;