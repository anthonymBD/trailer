
import Hero from '@/components/sections/Hero'

import FeaturesOne from '../components/sections/FeaturesOne'

import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Models from '../components/sections/Models'
import CtaOne from '@/components/sections/ctaOne'
import { ctaContent } from '../../constants/cta'



const Home = () => {
  return (
<>
<Hero />
 <FeaturesOne className="bg-white text-primary" />
 
      <Testimonials sectionId={1}  className="bg-primary text-white" /> 
      <CtaOne data={ctaContent.main} variant='simple' />
      <Models sectionId={1} className="bg-white" />
      <FAQ sectionId={1} className="bg-primary" />
</>
  )
}

export default Home