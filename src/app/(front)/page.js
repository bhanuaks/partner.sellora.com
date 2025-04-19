import React from 'react'
import Section1 from './frontComponets/HomePageComponents/Section1'
import SectionProgramOverview from './frontComponets/HomePageComponents/SectionProgramOverview'
import Section2 from './frontComponets/HomePageComponents/Section2'
import AffiliateProgram from './frontComponets/HomePageComponents/AffiliateProgram'
import AskedQuestions from './frontComponets/HomePageComponents/AskedQuestions'
import SelloraAssociateProgramSection from './frontComponets/HomePageComponents/SelloraAssociateProgramSection'
import FrequentlyAskedQuestionsSection from './frontComponets/HomePageComponents/FrequentlyAskedQuestionsSection'
 
function Page() {
  return (
    <>
     <Section1 />
     <Section2 />
     <SectionProgramOverview />
     <AffiliateProgram />
     <AskedQuestions />
     <SelloraAssociateProgramSection />
     <FrequentlyAskedQuestionsSection />
     </>
  )
}

export default Page