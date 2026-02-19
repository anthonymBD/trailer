
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
      <div id="about" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="compare" className="scroll-mt-20">
        <FeaturesOne className="bg-white text-primary" />
      </div>
      <div id="book" className="scroll-mt-20">
        <CtaOne
          data={ctaContent.main}
          images={ctaContent.images}
          variant="simple"
          className="h-full"
        />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials sectionId={1} className="bg-primary text-white" />
      </div>
      <div id="models" className="scroll-mt-20">
        <Models sectionId={1} className="bg-white" />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQ sectionId={1} className="bg-primary py-32" />
      </div>
</>
  )
}

export default Home