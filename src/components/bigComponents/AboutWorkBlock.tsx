import { FC } from 'react';
import HowWeWorkBlock from '../buildComponents/HowWeWorkBlock.tsx';
import ModelSearch from '../buildComponents/ModelSearch.tsx';
import ModelSelectionBlock from '../buildComponents/ModelSelectionBlock.tsx';
import OfOurServicesBlock from '../buildComponents/OfOurServicesBlock.tsx';
import AdditionalInfoBlock from '../buildComponents/AdditionalInfoBlock.tsx';
import imageFirst from '../../images/content/imageFirst.png';
import imageTwo from '../../images/content/imageTwo.png';

import '../../styles/bigComponentsStyles/aboutWorkBlock.scss';

const AboutWorkBlock: FC= () => {
    return (
        <div className="aboutWork">
            <HowWeWorkBlock />
            <div className="aboutWork__wrapper-model">
                <div className="aboutWork__wrapper-search">
                    <ModelSearch />
                </div>
                <ModelSelectionBlock />
            </div>
            <OfOurServicesBlock />
            <AdditionalInfoBlock />
            <div className='aboutWork__image-first'>
                <img src={imageFirst} alt="" />
            </div>
            <div className='aboutWork__image-two'>
                <img src={imageTwo} alt="" />
            </div>
        </div>
    )
}

export default AboutWorkBlock;