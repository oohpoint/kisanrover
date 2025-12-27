import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductSlider from '@/components/Product'
import ShowcasingInnovation from '@/components/Showcasing'
import { Testimonials } from '@/components/Testimonial'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <ProductSlider />
      <WhyChoose />
      <ShowcasingInnovation />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page