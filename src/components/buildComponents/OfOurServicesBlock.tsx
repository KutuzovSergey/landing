import { FC } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.tsx';
import MyTitleSmall from '../UI/MyTitleSmall/MyTitleSmall.tsx';
import ServiceCard from '../minComponents/ServiceCard.tsx';
import { useSelector } from 'react-redux';
import { ServicesType } from '../../type/typesMain.ts';

import '../../styles/buildComponentsStyles/ofOurServicesBlock.scss';

const OfOurServicesBlock: FC = () => {
    
    const data: ServicesType = useSelector((state) => state.services);

    return (
        <div className="services">
            <div className="services__title">
                <MyTitle>Наши услуги</MyTitle>
            </div>
            <div className="services__title-small">
                <MyTitleSmall>Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</MyTitleSmall>
            </div>
            <div className="services__models">
                {
                    data.map(service =>
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            nameService={service.nameService}
                            deadline={service.deadline}
                            price={service.price} />
                    )
                }
                <div className="services__auxiliary-first services__auxiliary-block"></div>
                <div className="services__auxiliary-second services__auxiliary-block"></div>
                <div className="services__auxiliary-third services__auxiliary-block"></div>
                <div className="services__auxiliary-fourth services__auxiliary-block"></div>
                <div className="services__auxiliary-fifth services__auxiliary-block"></div>
                <div className="services__auxiliary-fifth services__auxiliary-block"></div>
            </div>
        </div>
    )
}

export default OfOurServicesBlock;