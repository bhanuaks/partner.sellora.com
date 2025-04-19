import React from 'react'
import LastFrequentlyAskedQuestionsSection from '../affiliate-program/affiliateProgramComponents/LastFrequentlyAskedQuestionsSection'
import WhyShouldYouJointheSelloraSection from '../affiliate-program/affiliateProgramComponents/WhyShouldYouJointheSelloraSection'
import BannerSection from './componentOfAssociate/BannerSection'
import KeyFeaturesSection from './componentOfAssociate/KeyFeaturesSection'

function page() {
  return (
    <>
    <BannerSection />
    <KeyFeaturesSection />
    <WhyShouldYouJointheSelloraSection />
    <LastFrequentlyAskedQuestionsSection />
    </>
  )
}

export default page