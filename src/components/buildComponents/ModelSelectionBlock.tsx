import { FC } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.tsx';
import MyTitleSmall from '../UI/MyTitleSmall/MyTitleSmall.tsx';
import MyButton from '../UI/MyButton/MyButton.tsx';
import ModelCard from '../minComponents/ModelCard.tsx';
import { useSelector } from 'react-redux';

import '../../styles/buildComponentsStyles/modelSelectionBlock.scss';

const ModelSelectionBlock: FC = () => {

    const data = useSelector((state) => state.listModels);

    return (
        <div className="selection">
            <div className="selection__title">
                <MyTitle>Выберите модель</MyTitle>
            </div>
            <div className="selection__title-small">
                <MyTitleSmall>Выберите свою модель</MyTitleSmall>
            </div>
            <div className="selection__models">
                {
                    data.map(model => 
                        <ModelCard key={model.value} id={model.value} title={model.name} image={model.image } />
                     )
                }
            </div>
            <div className="selection__button">
                <MyButton>Показать еще</MyButton>
            </div>
        </div>
    )
}

export default ModelSelectionBlock;