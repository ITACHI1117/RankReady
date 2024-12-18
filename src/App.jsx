import { useState } from 'react'
import './App.css'
import heroImage from "../src/assets/images/hero.png"
import heroHeader from "../src/assets/images/heroHeader.png"
import Logo0 from "../src/assets/images/logos/Logo0.png"
import Logo1 from "../src/assets/images/logos/Logo1.png"
import Logo2 from "../src/assets/images/logos/Logo2.png"
import Logo3 from "../src/assets/images/logos/Logo3.png"
import Logo4 from "../src/assets/images/logos/Logo4.png"
import Logo5 from "../src/assets/images/logos/Logo5.png"
// import Logo1 from "../src/assets/images/logos/Logo1.png"
import NavigationBar from './components/NavigationBar'

function App() {

  const LogoImages = [
    { id: 0, logo: Logo0, alt:"Trusted partners logo" },
    { id: 1, logo: Logo1, alt:"Trusted partners logo" },
    { id: 2, logo: Logo2, alt:"Trusted partners logo" },
    { id: 3, logo: Logo3, alt:"Trusted partners logo" },
    { id: 4, logo: Logo4, alt:"Trusted partners logo" },
    { id: 5, logo: Logo5, alt:"Trusted partners logo" },
    // { id: 6, logo: Logo1, alt:"Trusted partners logo" },
  ]


  return (
    <>
    <section className='flex justify-center w-full h-screen '>
    <img src={heroImage} alt="hero-image" className='absolute w-full -z-10'/>
    <section className='p-10 w-full max-w-7xl items-center  flex flex-col'>
    <NavigationBar />
    <div className='flex flex-row items-center justify-between w-full mt-14'>
    <article className='w-[50%] flex flex-col gap-5' >
      <h1>Rank Higher on Google.</h1>
      <h1>Get more Traffic.</h1>
      <h1>Grow Your Business.</h1>
      <p className='text-white w-[60%]'>Our data driven SEO strategies have helped over 500 business dominate
        search results. Lets do the same for you.
      </p>
      <div className='gap-3 flex flex-row items-center'>
        <button className='bg-[#E3FFCC] hover:bg-blue-700  pl-3 pr-3 pt-1 pb-1 rounded-2xl'>Claim Your Free SEO Audit</button>
        <a href='#' className='underline text-white '>See How We Rank Websites</a>
      </div>
    </article>
    <div className='w-[50%] flex items-end justify-end'>
    <img src={heroHeader} alt="Seo Illustration" className='h-[25rem]'/>
    </div>
    </div>
    <article className='mt-28 flex flex-wrap w-full items-center justify-center'>
      <h2 className='text-white text-2xl font-bold'>Trusted Partners</h2>
      <div className='flex flex-row gap-3 mt-10'>
       {LogoImages.map(({id, logo, alt}) =>{
        return(
          <div key={id} className='bg-[#E3FFCC] p-3 pl-14 pr-14'>
          <img src={logo} alt={alt} />
        </div>
        )
       })}
      </div>
    </article>
    </section>
    </section>
    </>
  )
}

export default App
