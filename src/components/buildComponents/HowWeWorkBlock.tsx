import { FC } from 'react';
import MyTitle from '../UI/MyTitle/MyTitle.tsx';
import JobCards from '../buildComponents/JobCards.tsx';

import '../../styles/buildComponentsStyles/howWeWorkBlock.scss';

const HowWeWorkBlock: FC= () => {
    return (
        <div className="howWeWork">
            <MyTitle>Как мы работаем?</MyTitle>
            <JobCards/>
        </div>
    )
}

export default HowWeWorkBlock;