

import React from 'react'
import BannerSection from './affiliateProgramComponents/bannerSection'
import ProgramOverview from './affiliateProgramComponents/ProgramOverview' 
import SelloraAffiliatePayoutStructure from './affiliateProgramComponents/SelloraAffiliatePayoutStructure'
import FrequentlyAskedQuestionsSection from './affiliateProgramComponents/FrequentlyAskedQuestionsSection'
import KeyFeaturesSection from './affiliateProgramComponents/KeyFeaturesSection'
import SelloraAffiliateProgramSection from './affiliateProgramComponents/SelloraAffiliateProgramSection'
import WhyShouldYouJointheSelloraSection from './affiliateProgramComponents/WhyShouldYouJointheSelloraSection'
import LastFrequentlyAskedQuestionsSection from './affiliateProgramComponents/LastFrequentlyAskedQuestionsSection'
 

function page() {
  return (
    <>
    <BannerSection />
    <ProgramOverview />
    <SelloraAffiliateProgramSection />
    {/* <RoleofAffiliates /> */}
    {/* <SelloraAffiliatePayoutStructure /> */}
    <FrequentlyAskedQuestionsSection />
    <WhyShouldYouJointheSelloraSection />
    <LastFrequentlyAskedQuestionsSection />
    {/* <KeyFeaturesSection /> */}
    </>
  )
}

export default page