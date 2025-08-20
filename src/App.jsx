import { useState } from "react";
import "./App.css";
import heroImage from "../src/assets/images/hero.png";
import heroHeader from "../src/assets/images/heroHeader.png";
import Testimonial from "../src/assets/images/testimonial.png";
import PersGrid from "../src/assets/images/PersGrid.png";
import RankedImg from "../src/assets/images/RankedImg.png";
import Lines from "../src/assets/images/lines.png";
import Send from "../src/assets/images/icons/send.png";
import SendWhite from "../src/assets/images/icons/sendWhite.png";
import NavigationBar from "./components/NavigationBar";
import LogosContainer from "./components/LogosContainer";
import Logo from "../src/assets/images/Logo.png";
import results from "./results";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { PiHeadphonesFill } from "react-icons/pi";
import { motion } from "motion/react";

function App() {
  // Submit form function
  function handleFormSubmission(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full">
        <img
          src={heroImage}
          alt="hero-image"
          className="absolute top-0 w-full h-[850px] z-10"
        />
        <section className="bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09] p-5 lg:p-10 w-full max-w-7xl items-center flex flex-col">
          <NavigationBar />
          <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between w-full mt-14 z-20">
            <article className="w-[100%]lg:w-[50%] flex flex-col gap-4 lg:gap-5">
              <motion.h1
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, type: "spring" }}
                className="text-2xl lg:text-5xl font-bold"
              >
                Rank Higher on Google.
              </motion.h1>
              <motion.h1
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 0.1, type: "spring" }}
                className="text-2xl lg:text-5xl font-bold"
              >
                Get more Traffic.
              </motion.h1>
              <motion.h1
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
                className="text-2xl lg:text-5xl font-bold"
              >
                Grow Your Business.
              </motion.h1>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-[#ffffffb7] w-[100%] lg:w-[60%]"
              >
                Our data driven SEO strategies have helped over 500 business
                dominate search results. Lets do the same for you.
              </motion.p>
              <div className="gap-3 flex flex-col w-[100%] lg:flex-row items-center">
                <motion.button
                  initial={{ x: -1000, y: 200 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, type: "tween" }}
                  className="w-[100%] lg:w-[40%] bg-[#E3FFCC]  pl-3 pr-3 pt-1 pb-1 rounded-2xl font-bold font-Euclid"
                >
                  Claim Your Free SEO Audit
                </motion.button>
                <motion.a
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, type: "tween" }}
                  href="#"
                  className="underline text-white "
                >
                  See How We Rank Websites
                </motion.a>
              </div>
            </article>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="w-[50%] flex items-end justify-end"
            >
              <img
                src={heroHeader}
                alt="Seo Illustration"
                className="hidden lg:h-[25rem] lg:flex"
              />
            </motion.div>
          </div>
          {/* Trusted Partners */}
          <article className="mt-28 flex flex-wrap  items-center justify-center z-20">
            <motion.h2
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-white text-2xl font-bold"
            >
              Trusted Partners
            </motion.h2>
            <div className="grid grid-cols-3 lg:flex lg:flex-row gap-3 mt-10">
              <LogosContainer />
            </div>
          </article>
        </section>
        {/* Ranked Section */}
        <section className="mt-28 w-full max-w-7xl p-5 lg:p-10 flex flex-col ">
          <div className="flex flex-col lg:flex-row gap-14 justify-between w-[100%] lg:mt-0 mt-10">
            <img src={RankedImg} alt="" className="lg:w-[40%] w-[100%]" />
            <article className="flex flex-col h-full w-[100%] lg:w-[50%] justify-between">
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="flex flex-col gap-2"
              >
                <h6 className="text-[#274531] text-lg">Benefit</h6>
                <h2 className="text-4xl text-[#274531]">
                  Why Businesses Trust Us for SEO Success.
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                className="mt-12 flex flex-col gap-6 w-full lg:w-[575px]"
              >
                <p className="text-2xl text-[#274531]">
                  <span className="font-bold ">Customized Strategies: </span>
                  Tailored SEO plans that fit your industry and goals.
                </p>
                <p className="text-2xl text-[#274531]">
                  <span className="font-bold">Proven Results: </span>Our clients
                  see an average 200% increase in organic traffic within 6
                  months.
                </p>
                <p className="text-2xl text-[#274531]">
                  <span className="font-bold">Expert Team: </span>Certified SEO
                  specialists with 10+ years of experience.
                </p>
              </motion.div>
            </article>
          </div>
        </section>
        {/* SEO Audit form */}
        <section className="bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09] mt-28 w-full p-5 lg:p-10 flex flex-col items-center">
          <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-2">
            <motion.h1
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className=" text-3xl lg:text-4xl"
            >
              Free SEO Audit Form
            </motion.h1>
            <motion.h2
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.1, type: "spring" }}
              className="text-[#ffffffc7] lg:3xl text-[12px] text-center"
            >
              Get a Feee SEO Audit - See What's Holding Your Website Back.
            </motion.h2>
            <form
              action="submit"
              className="flex flex-col gap-3 mt-6 w-[100%] items-center"
            >
              <input
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                type="text"
                className="h-14 w-full lg:w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]"
                placeholder="Business Name"
              />
              <input
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                type="text"
                className="h-14 w-full lg:w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]"
                placeholder="Website URL"
              />
              <input
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                type="text"
                className="h-14 w-full lg:w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]"
                placeholder="Email Address"
              />
              <input
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                type="text"
                className="h-14 w-full lg:w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]"
                placeholder="Current Traffic"
              />
              <input
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, type: "spring" }}
                type="text"
                className="h-14 w-full lg:w-[60%] rounded-2xl p-5 bg-[#5656564c] text-white outline-none placeholder-[#ffffffa1]"
                placeholder="SEO Goals (e.g “More Traffic”, “Better Ranking”)"
              />
              <button
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, type: "spring" }}
                onClick={(e) => handleFormSubmission(e)}
                className="bg-[#E3FFCC] w-full lg:w-[60%] h-14 rounded-2xl"
              >
                <p className="text-bold font-bold">Analyze My Site</p>
              </button>
            </form>
          </div>
        </section>
        {/* Results and case studies */}
        <section className="bg-white mt-3 w-full p-5 lg:p-10 flex flex-col items-center font-Euclid">
          <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-2">
            <motion.h1
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-2xl lg:text-4xl text-[#274531]"
            >
              Result and Case Studies
            </motion.h1>
            <motion.h2
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-[#274531]"
            >
              Real Results for Real Businesses
            </motion.h2>
            <div className="flex flex-col lg:flex-row gap-4">
              {results.map(({ id, icon, title, result, delay }) => {
                // returning on the first 3 items in the results array for the results section
                if (id <= 3) {
                  return (
                    <motion.div
                      initial={{ x: -200 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: id, type: "spring" }}
                      key={id}
                      className="bg-[#F0FFED] border-[#B5E6AC] border-[1px] p-7 rounded-xl w-80 h-64"
                    >
                      <div className="flex flex-row justify-between">
                        <img src={icon} alt="" className="w-[20px] h-[20px]" />
                        <img src={Send} alt="" className="w-[20px] h-[20px]" />
                      </div>
                      <h3 className="mt-7 text-[#274531] text-xl">{title}</h3>
                      <ul className="list-disc mt-4 ">
                        {result.map((item) => {
                          return (
                            <li
                              key={results}
                              className="text-[#274531] text-[15px]"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  );
                }
              })}
            </div>
          </div>
        </section>
        {/* Four Step process */}
        <section className="bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09]  mt-28 w-full p-5 lg:p-10 flex flex-col items-center">
          <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-2 mt-5">
            <motion.h1
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className=" text-3xl lg:text-4xl"
            >
              Our 4-Step SEO Process
            </motion.h1>
            <motion.h2
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-white"
            >
              Simplified Process.
            </motion.h2>
            <div>
              <div className="mt-6 flex flex-col lg:grid lg:grid-cols-2 gap-8">
                {results.map(({ id, icon, title, result }) => {
                  if (id > 3) {
                    return (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, type: "spring" }}
                        key={id}
                        className="bg-[#e4e4e410]  p-7 rounded-xl w-80 h-64"
                      >
                        <div className="flex flex-row justify-between">
                          <img
                            src={icon}
                            alt=""
                            className="w-[20px] h-[20px]"
                          />
                          <img
                            src={SendWhite}
                            alt=""
                            className="w-[20px] h-[20px]"
                          />
                        </div>
                        <h3 className="mt-7 text-[white] text-xl">{title}</h3>
                        <ul className="list-disc mt-4 ">
                          {result.map((item) => {
                            return (
                              <li
                                key={results}
                                className="text-[white] text-[15px]"
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-gradient-to-r from-[#011A09] via-[#03220E] to-[#011A09] pt-12 w-full p-5 lg:p-10 flex flex-col items-center relative">
          <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-2 mt-5">
            <motion.h1
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-2xl lg:text-4xl"
            >
              Testimonials and Reviews
            </motion.h1>
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="text-white lg:text-xl text-sm"
            >
              Here's What Our Clients Are Saying
            </motion.h2>
            <div className="w-full lg:w-[90%] mt-10 lg:mt-20 flex flex-row justify-center items-center">
              <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  clickable: true,
                  prevEl: "#custom-prev",
                  nextEl: "#custom-next",
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {results.map(({ id }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.8, type: "spring" }}
                        className="flex flex-col lg:flex-row w-[100%] lg:h-[500px] gap-3  lg:gap-9 bg-[#0F2616] rounded-3xl overflow-hidden"
                      >
                        <div className="lg:w-[50%] w-full h-[300px] lg:h-full bg-black ">
                          <img
                            src={Testimonial}
                            alt=""
                            className="lg:w-full lg:h-full w-full h-full object-cover"
                          />
                        </div>
                        <div className=" w-full lg:w-[50%] lg:h-[100%] p-2 lg:p-0 flex flex-col items-center justify-center">
                          <article className="gap-2 lg:gap-5 flex flex-col p-2 lg:p-0">
                            <p className=" hidden lg:flex text-4xl text-[#FAAA4C]">
                              ★★★★★
                            </p>
                            <h2 className="text-white text-sm font-bold">
                              Exceptional SEO Services with Real Results
                            </h2>
                            <p className="text-white text-sm lg:w-[85%] font-[100] font-Euclid_Light">
                              Working with{" "}
                              <span className="font-bold">RankReady</span> has
                              been a game-changer for our business. In just a
                              few months, they helped us climb search engine
                              rankings, fix technical website issues, and
                              attract high-quality organic traffic. Their
                              tailored strategy, clear communication, and
                              data-driven approach made all the difference. We
                              now rank on the first page for key search terms,
                              leading to increased visibility and more leads. If
                              you’re looking for an SEO partner that delivers
                              measurable results, RankReady is the one to trust.
                              Highly recommended!
                            </p>
                            <div>
                              <h3 className="text-white font-bold">
                                Abiola Ayinke
                              </h3>
                              <h4 className="text-white font-Euclid_Light">
                                MD, Chopa’lot
                              </h4>
                            </div>
                          </article>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                ...
              </Swiper>
              {/* Swiper buttons */}
              <div className="hidden lg:flex w-[100%] max-w-[85rem] flex flex-row absolute justify-between pl-8 pr-8 z-20">
                {/* <div><p className='text-white'>arrow-left</p></div>
                 */}
                <motion.span
                  initial={{ x: 150 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  id="custom-prev"
                  className="w-[30px] h-[30px] bg-[#C9FCBE] flex  items-center justify-center rounded-full"
                >
                  <IoChevronBackOutline className="text-[20px] rounded-full" />
                </motion.span>
                <motion.span
                  initial={{ x: -150 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  id="custom-next"
                  className="w-[30px] h-[30px] bg-[#C9FCBE] flex  items-center justify-center rounded-full"
                >
                  <IoChevronForward className="text-[20px]" />
                </motion.span>
              </div>
            </div>
            {/* Swiper buttons mobile */}
            <div className="lg:hidden w-[100%] max-w-[85rem] flex flex-row lg:absolute items-center justify-center gap-8 pl-8 pr-8 z-20">
              {/* <div><p className='text-white'>arrow-left</p></div>
               */}
              <span
                id="custom-prev"
                className="w-[30px] h-[30px] bg-[#C9FCBE] flex  items-center justify-center rounded-full"
              >
                <IoChevronBackOutline className="text-[20px] rounded-full" />
              </span>
              <span
                id="custom-next"
                className="w-[30px] h-[30px] bg-[#C9FCBE] flex  items-center justify-center rounded-full"
              >
                <IoChevronForward className="text-[20px]" />
              </span>
            </div>

            <img
              src={PersGrid}
              className="w-[100%] h-[300px] absolute bottom-0"
              alt=""
            />
          </div>
        </section>
        {/* Contact a SEO Specialist */}
        <section className="bg-white mt-3 w-full p-5 lg:p-10 flex flex-col items-center font-Euclid relative mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.8, type: "spring" }}
            className="max-w-7xl w-full flex flex-col items-center justify-center gap-2"
          >
            <h1 className=" text-3xl lg:text-4xl text-[#274531]  w-full lg:w-[60%] text-center leading-[35px] lg:leading-[55px] ">
              Make the First Step Toward Better Rankings and More Traffic.
            </h1>
            <h2 className="text-[#274531] text-xl lg:text-3xl text-center">
              Let’s create a custom SEO plan that grows your business.
            </h2>
            <div className="w-[100%] flex flex-col lg:flex-row gap-5 items-center justify-center pt-5">
              <button className="bg-[#011A09] w-full lg:w-[300px] p-2 pl-5 pr-5 rounded-2xl text-white">
                Claim Your Free SEO Audit
              </button>
              <button className="flex flex-row w-full lg:w-[300px] items-center justify-center p-2 pl-5 pr-5 rounded-2xl gap-1 border-[1px] border-black">
                <PiHeadphonesFill /> Speak with an SEO Specialist
              </button>
            </div>
          </motion.div>
          <div className="w-[100%] max-w-7xl relative">
            <img src={Lines} alt="" className="absolute left-0" />
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-black  flex flex-col justify-center items-center w-full">
        <div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.8, type: "spring" }}
          className="max-w-7xl w-full flex flex-col items-center justify-center gap-2 p-5 lg:p-10"
        >
          <div className="mt-6 flex flex-col lg:grid lg:grid-cols-4 gap-8">
            <img src={Logo} alt="" className="w-[150px]" />
            <article className="flex flex-col gap-1 lg:gap-3">
              <h5 className="text-white font-bold">Quick link</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Feature</a>
                </li>
                <li>
                  <a href="">Benefit</a>
                </li>
                <li>
                  <a href="">Cources</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-1">
              <h5 className="text-white font-bold">Company</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Legal</a>
                </li>
              </ul>
            </article>
            <div className="flex flex-col items-center lg:items-center gap-1">
              <h6 className="text-white text-center lg:text-center w-[80%]">
                Be the first to get notification about our upcoming event
              </h6>
              <form action="">
                <div className="flex flex-row bg-white gap-3 pl-2  rounded-lg relative w-full">
                  <form action="">
                    <input
                      type="email"
                      placeholder="Email"
                      className="outline-none placeholder:text-[#8A8A8A] pr-1"
                    />
                    <button
                      onClick={(e) => handleFormSubmission(e)}
                      className="bg-[#C9FCBE] text-[#011A09] h-[100%] text-sm font-bold p-2 rounded-md font-Euclid_Light border border-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.8, type: "spring" }}
          className="w-full h-20"
        >
          <hr />
          <p className="text-[#ffffffaa] mt-5 w-full text-center">
            © 2024, Rank Ready. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
