import React from 'react'
import Logo0 from "../../src/assets/images/logos/Logo0.png"
import Logo1 from "../../src/assets/images/logos/Logo1.png"
import Logo2 from "../../src/assets/images/logos/Logo2.png"
import Logo3 from "../../src/assets/images/logos/Logo3.png"
import Logo4 from "../../src/assets/images/logos/Logo4.png"
import Logo5 from "../../src/assets/images/logos/Logo5.png"
import { motion } from "motion/react"


function LogosContainer() {
    
  const LogoImages = [
    { id: 0, logo: Logo0, alt:"Trusted partners logo", delay:0.1 },
    { id: 1, logo: Logo1, alt:"Trusted partners logo",  delay:0.2 },
    { id: 2, logo: Logo2, alt:"Trusted partners logo" , delay:0.3 },
    { id: 3, logo: Logo3, alt:"Trusted partners logo", delay:0.1},
    { id: 4, logo: Logo4, alt:"Trusted partners logo", delay:0.2 },
    { id: 5, logo: Logo5, alt:"Trusted partners logo", delay:0.3 },

  ]
  return (
    <>
    {LogoImages.map(({id, logo, alt, delay}) =>{
        return(
          <motion.di initial={{ scale:0, opacity:0 }} whileInView={{scale:1, opacity:1 }} transition={{ duration: 1.5, delay:delay,  type:"spring" }} key={id} className='items-center flex justify-center bg-[#E3FFCC] p-3 pl-10 pr-10 lg:pl-14 lg:pr-14'>
          <img src={logo} alt={alt} />
        </motion.di>
        )
       })}
    </>
  )
}

export default LogosContainer