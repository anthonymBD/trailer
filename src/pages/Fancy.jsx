
import Hero from '@/components/sections/Hero'

import FeaturesOne from '../components/sections/FeaturesOne'

import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Models from '../components/sections/Models'
import CtaOne from '@/components/sections/ctaOne'
import { ctaContent } from '../../constants/cta'



const Fancy = () => {
  return (
<>
      <div id="about" className="scroll-mt-20">
        <Hero />
      </div>
          <div id="book" className="scroll-mt-20">
              <CtaOne
                  data={ctaContent.main}
                  images={ctaContent.images}
                  variant="feature"
                  className="h-full"
              />
          </div>
      <div id="compare" className="scroll-mt-20">
        <FeaturesOne className="bg-primary text-white" />
      </div>
     
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials sectionId={1} className="bg-white text-primary" />
      </div>
      <div id="models" className="scroll-mt-20">
        <Models sectionId={1} className="bg-zinc-50" />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQ sectionId={1} className="bg-primary" />
      </div>
</>
  )
}

export default Fancy