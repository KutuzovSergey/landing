import { FC } from 'react';

import '../../styles/minComponentsStyles/modelCard.scss';

type Props = {
    title: string,
    image: any,
    id: string
}

const ModelCard: FC = (props: Props) => {
    
    return (
        <div className="model" key={props.id} id={props.id}>
            <div className="model__title">
                <a href="#">{props.title}</a>
            </div>
            <div className="model__image">
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default ModelCard;