import React from 'react'
import Head from 'next/head'

import Hero from '../components/landing/hero'
import FAQ from '../components/landing/faq'
import Testimonial from '../components/landing/testimonial'
import Features from '../components/landing/features'

const Index = () => {
  return (
    <>
    <Head>
      <title>Welcome To Skiller</title>
    </Head>
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
    </>
  )
}

export default Index