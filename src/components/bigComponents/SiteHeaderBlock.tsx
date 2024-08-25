import { FC } from 'react';
import Header from "../buildComponents/Header.tsx";
import Banner from "../buildComponents/Banner.tsx";

import '../../styles/bigComponentsStyles/siteHeaderBlock.scss';

const SiteHeaderBlock: FC= () => {
    return (
        <div className="siteHeader">
            <Header />
            <Banner />
        </div>
    )
}

export default SiteHeaderBlock;