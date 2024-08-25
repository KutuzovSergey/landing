import { FC } from 'react';
import MyButton from '../UI/MyButton/MyButton.tsx';

import '../../styles/buildComponentsStyles/modelSelectionBlock.scss';

const ModelSelectionBlock: FC = () => {
    return (
        <div className="selection">
            <div className="selection__title">
                <span></span>
            </div>
            <div className="selection__selection-field"></div>
            
            <div className="selection__button">
                <MyButton>Поиск</MyButton>
            </div>
        </div>
    )
}

export default ModelSelectionBlock;