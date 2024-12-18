import { useState } from 'react'
import './App.css'
import heroImage from "../src/assets/images/hero.png"
import heroHeader from "../src/assets/images/heroHeader.png"
import Testimonial from "../src/assets/images/testimonial.png"
import RankedImg from "../src/assets/images/RankedImg.png"
import Send from "../src/assets/images/icons/send.png"
import SendWhite from "../src/assets/images/icons/sendWhite.png"
import NavigationBar from './components/NavigationBar'
import LogosContainer from './components/LogosContainer'
import results from './results'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <>
    <section className='flex flex-col justify-center items-center w-full'>
    <img src={heroImage} alt="hero-image" className='absolute top-0 w-full h-[850px] -z-10'/>
    <section className='p-10 w-full max-w-7xl items-center flex flex-col'>
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
    <article className='mt-28 flex flex-wrap  items-center justify-center'>
      <h2 className='text-white text-2xl font-bold'>Trusted Partners</h2>
      <div className='flex flex-row gap-3 mt-10'>
       <LogosContainer />
      </div>
    </article>
    </section>
    {/* Ranked Section */}
    <section className='mt-28 w-full max-w-7xl p-10 flex flex-col  '>
      <div className='flex flex-row gap-14 justify-between w-[100%]'>
        <img src={RankedImg} alt="" className='w-[40%]' />
        <article className='flex flex-col h-full w-[50%] justify-between'>
          <div className='flex flex-col gap-2'>
          <h6 className='text-[#274531] text-lg'>Benefit</h6>
          <h2 className='text-4xl text-[#274531]'>Why Businesses Trust Us for SEO Success.</h2>
          </div>
          <div className='mt-12 flex flex-col gap-6 w-[575px]'>
          <p className='text-2xl text-[#274531]'><span className='font-bold '>Customized Strategies: </span>Tailored SEO plans that fit your industry and goals.</p>
          <p className='text-2xl text-[#274531]'><span className='font-bold'>Proven Results: </span>Our clients see an average 200% increase in organic traffic within 6 months.</p>
          <p className='text-2xl text-[#274531]'><span className='font-bold'>Expert Team: </span>Certified SEO specialists with 10+ years of experience.</p>
          </div>
        </article>
      </div>
    </section>
    {/* SEO Audit form */}
    <section className='bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09]  mt-28 w-full p-10 flex flex-col items-center'>
      <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl'>Free SEO Audit Form</h1>
      <h2 className='text-white'>Get a Feee SEO Audit - See What's Holding Your Website Back.</h2>
      <form action="" className='flex flex-col gap-3 mt-6 w-[100%] items-center'>
        <input type="text" className='h-14 w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]' placeholder='Business Name' />
        <input type="text" className='h-14 w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]' placeholder='Website URL' />
        <input type="text" className='h-14 w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]' placeholder='Email Address' />
        <input type="text" className='h-14 w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]' placeholder='Current Traffic' />
        <input type="text" className='h-14 w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]' placeholder='SEO Goals (e.g “More Traffic”, “Better Ranking”)' />
        <button className='bg-[#E3FFCC] w-[60%] h-14 rounded-2xl'><p className='text-bold font-bold'>Analyze My Site</p></button>
      </form>
      </div>
    </section>
    {/* Results and case studies */}
    <section className='bg-white  mt-3 w-full p-10 flex flex-col items-center font-Euclid'>
      <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl text-[#274531]'>Result and Case Studies</h1>
      <h2 className='text-[#274531]'>Real Results for Real Businesses</h2>
      <div className='flex flex-row gap-4'>
        {results.map(({id,icon,title,result}) => {
          // returning on the first 3 items in the results array for the results section
          if (id <= 3){
            return (
              <div key={id} className='bg-[#F0FFED] border-[#B5E6AC] border-[1px] p-7 rounded-xl w-80 h-64'>
              <div className='flex flex-row justify-between'>
               <img src={icon} alt="" className='w-[20px] h-[20px]' />
               <img src={Send} alt="" className='w-[20px] h-[20px]' />
              </div>
              <h3 className='mt-7 text-[#274531] text-xl'>{title}</h3>
              <ul className='list-disc mt-4 '>
               {result.map((item) =>{
                 return <li key={results} className='text-[#274531] text-[15px]'>{item}</li>
               })}
              </ul>
              </div>
                 )
          }
          
        })}
      </div>
      </div>
    </section>
    {/* Four Step process */}
    <section className='bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09]  mt-28 w-full p-10 flex flex-col items-center'>
      <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-2 mt-5'>
      <h1 className='text-4xl'>Our 4-Step SEO Process</h1>
      <h2 className='text-white'>Simplified Process.</h2>
      <div>
      <div className='mt-6 grid grid-cols-2 gap-8'>
        {results.map(({id,icon,title,result}) => {
          if (id > 3){
            return (
              <div key={id} className='bg-[#e4e4e410]  p-7 rounded-xl w-80 h-64'>
              <div className='flex flex-row justify-between'>
               <img src={icon} alt="" className='w-[20px] h-[20px]' />
               <img src={SendWhite} alt="" className='w-[20px] h-[20px]' />
              </div>
              <h3 className='mt-7 text-[white] text-xl'>{title}</h3>
              <ul className='list-disc mt-4 '>
               {result.map((item) =>{
                 return <li key={results} className='text-[white] text-[15px]'>{item}</li>
               })}
              </ul>
              </div>
                 )
          }
        })}
      </div>
      </div>
      </div>
    </section>
    {/* Testimonials */}
    <section className='bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09] pt-12 w-full p-10 flex flex-col items-center'>
    <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-2 mt-5'>
      <h1 className='text-4xl'>Testimonials and Reviews</h1>
      <h2 className='text-white'>Here's What Our Clients Are Saying</h2>
      <div className='w-[90%] mt-20 flex flex-row justify-center items-center'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={{clickable:true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {results.map(({id}) =>{
        return(
<SwiperSlide key={id}>
        <div className='flex flex-row w-[100%] h-[500px] gap-9 bg-[#0F2616] rounded-3xl overflow-hidden'>
      <div className=' w-[50%] bg-black '>
     <img src={Testimonial} alt="" className='w-full h-full object-cover' />
      </div>
     <div className='w-[50%] h-[100%] flex flex-col items-center justify-center'>
      <article className='gap-5 flex flex-col'>
        <p className='text-4xl text-[#FAAA4C]'>★★★★★</p>
        <h2 className='text-white font-bold'>Exceptional SEO Services with Real Results</h2>
        <p className='text-white w-[85%] font-[100] font-Euclid_Light'>Working with <span className='font-bold'>RankReady</span> has been a game-changer for our business. In just a few months, they helped us climb search engine rankings, fix technical website issues, and attract high-quality organic traffic. Their tailored strategy, clear communication, and data-driven approach made all the difference. We now rank on the first page for key search terms, leading to increased visibility and more leads. If you’re looking for an SEO partner that delivers measurable results, RankReady is the one to trust. Highly recommended!</p>
      <div>
      <h3 className='text-white font-bold'>Abiola Ayinke</h3>
      <h4 className='text-white font-Euclid_Light'>MD, Chopa’lot</h4>
      </div>
      </article>
     </div>
    </div>
      </SwiperSlide>
        )
      })}
      
      ...
    </Swiper>
   
    {/* <div className='flex flex-row w-[80%] h-[500px] gap-9 bg-[#e4e4e410] rounded-3xl overflow-hidden'>
      <div className=' w-[50%] bg-black '>
     <img src={Testimonial} alt="" className='w-full h-full object-cover' />
      </div>
     <div className='w-[50%] h-[100%] flex flex-col items-center justify-center'>
      <article className='gap-5 flex flex-col'>
        <p className='text-4xl text-[#FAAA4C]'>★★★★★</p>
        <h2 className='text-white font-bold'>Exceptional SEO Services with Real Results</h2>
        <p className='text-white w-[85%] font-[100] font-Euclid_Light'>Working with <span className='font-bold'>RankReady</span> has been a game-changer for our business. In just a few months, they helped us climb search engine rankings, fix technical website issues, and attract high-quality organic traffic. Their tailored strategy, clear communication, and data-driven approach made all the difference. We now rank on the first page for key search terms, leading to increased visibility and more leads. If you’re looking for an SEO partner that delivers measurable results, RankReady is the one to trust. Highly recommended!</p>
      <div>
      <h3 className='text-white font-bold'>Abiola Ayinke</h3>
      <h4 className='text-white font-Euclid_Light'>MD, Chopa’lot</h4>
      </div>
      </article>
     </div>
    </div> */}
      </div>
     
    </div>
    </section>
    </section>

   
    </>
  )
}

export default App
