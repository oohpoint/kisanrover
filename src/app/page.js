import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutPage from '@/components/landingPage/about'
import BlogSection from '@/components/landingPage/Blog'
import ProductSlider from '@/components/Product'
import ShowcasingInnovation from '@/components/Showcasing'
import { Testimonials } from '@/components/Testimonial'
import WhatsAppButton from '@/components/Whatapp'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <ProductSlider />
      <AboutPage />
      <WhyChoose />
      <BlogSection />
      <ShowcasingInnovation />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default page