import React from 'react';
import SiteHeaderBlock from "./components/bigComponents/SiteHeaderBlock.tsx";
import SettingsBlock from "./components/bigComponents/SettingsBlock.tsx";
import AboutWorkBlock from "./components/bigComponents/AboutWorkBlock.tsx";
import InfoBlock from "./components/bigComponents/InfoBlock.tsx";
import LeavingContactsBlock from "./components/bigComponents/LeavingContactsBlock.tsx";
import ReviewsBlock from "./components/bigComponents/ReviewsBlock.tsx";
import ConsultationBlock from "./components/bigComponents/ConsultationBlock.tsx";
import FooterBlock from "./components/bigComponents/FooterBlock.tsx";

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <SiteHeaderBlock />
      <SettingsBlock />
      <AboutWorkBlock />
      <InfoBlock />
      <LeavingContactsBlock />
      <ReviewsBlock />
      <ConsultationBlock />
      <FooterBlock />
    </div>
  );
}

export default App;
