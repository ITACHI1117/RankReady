import React, { useState } from 'react'
import Logo from "../../src/assets/images/Logo.png"
import { motion } from "motion/react"

function NavigationBar() {
    const [active, setActive] = useState(1)

  const links = [{id:1,content:"Home"},{id:2,content:"Feature",},{id:3, content:"Benefit"}, {id:4, content:"Contact"}]

  const handleActiveLink = (id) =>{
    setActive( id)
  console.log(active);
  
  }
  return (
    <>
     <nav className='z-10 flex flex-row w-full justify-between items-center font-Euclid '>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, type:"spring" }} >
        <img src={Logo} alt="" className='w-[100px] lg:w-[150px]' />
      </motion.div>

      <motion.ul initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 2, type:"spring" }} className='hidden lg:flex flex-row gap-5'>
        {links.map(({content, id}) =>{
          const isActive = id === active
          return(
            <li onClick={() => handleActiveLink(id)} key={id} className={isActive ? "text-white cursor-pointer" : "text-gray-400 cursor-pointer"}>{content}</li>
          )
        })}
      </motion.ul>

      <motion.div  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, type:"spring" }} className='hidden lg:flex flex-row gap-3 font-Euclid'> 
        <button className='text-white'>Login</button>
        <button className='bg-[#E3FFCC] p-2 pt-1 pb-1 rounded-xl '>Get Started</button>
      </motion.div>
    </nav>
    </>
  )
}

export default NavigationBar