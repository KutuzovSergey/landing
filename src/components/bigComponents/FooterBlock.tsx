import { FC } from 'react';
import OfferAgreementBlock from '../buildComponents/OfferAgreementBlock.tsx';
import FooterMenuBlock from '../buildComponents/FooterMenuBlock.tsx';
import FooterProtectionOfRights from '../buildComponents/FooterProtectionOfRights.tsx';

import '../../styles/bigComponentsStyles/footerBlock.scss';

const FooterBlock: FC = () => {
    return (
        <div className="footer">
            <OfferAgreementBlock />
            <FooterMenuBlock />
            <FooterProtectionOfRights />
        </div>
    )
}

export default FooterBlock;