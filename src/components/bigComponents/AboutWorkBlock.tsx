import { FC } from 'react';
import HowWeWorkBlock from '../buildComponents/HowWeWorkBlock.tsx';
import ModelSearch from '../buildComponents/ModelSearch.tsx';
import ModelSelectionBlock from '../buildComponents/ModelSelectionBlock.tsx';
import OfOurServicesBlock from '../buildComponents/OfOurServicesBlock.tsx';
import AdditionalInfoBlock from '../buildComponents/AdditionalInfoBlock.tsx';

import '../../styles/bigComponentsStyles/aboutWorkBlock.scss';

const AboutWorkBlock: FC= () => {
    return (
        <div className="aboutWork">
            <HowWeWorkBlock />
            <ModelSearch />
            <ModelSelectionBlock />
            <OfOurServicesBlock />
            <AdditionalInfoBlock />
        </div>
    )
}

export default AboutWorkBlock;