


import FeaturesOne from '../components/sections/FeaturesOne'
import { ctaContent } from '../../constants/cta'
import CtaOne from '../components/sections/ctaOne'
import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Models from '../components/sections/Models'


const Home = () => {
  return (
<>
 <FeaturesOne className="bg-white text-primary" />
      <Cta
        variant="simple"
        theme="dark"
        data={ctaContent.main}
      />
      <Testimonials sectionId={1}  className="bg-primary text-white" /> 
    
      <Models sectionId={1} className="bg-white" />
      <FAQ sectionId={1} className="bg-primary" />
</>
  )
}

export default Home