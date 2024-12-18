import React from 'react'
import Logo0 from "../../src/assets/images/logos/Logo0.png"
import Logo1 from "../../src/assets/images/logos/Logo1.png"
import Logo2 from "../../src/assets/images/logos/Logo2.png"
import Logo3 from "../../src/assets/images/logos/Logo3.png"
import Logo4 from "../../src/assets/images/logos/Logo4.png"
import Logo5 from "../../src/assets/images/logos/Logo5.png"

function LogosContainer() {
    
  const LogoImages = [
    { id: 0, logo: Logo0, alt:"Trusted partners logo" },
    { id: 1, logo: Logo1, alt:"Trusted partners logo" },
    { id: 2, logo: Logo2, alt:"Trusted partners logo" },
    { id: 3, logo: Logo3, alt:"Trusted partners logo" },
    { id: 4, logo: Logo4, alt:"Trusted partners logo" },
    { id: 5, logo: Logo5, alt:"Trusted partners logo" },

  ]
  return (
    <>
    {LogoImages.map(({id, logo, alt}) =>{
        return(
          <div key={id} className='bg-[#E3FFCC] p-3 pl-14 pr-14'>
          <img src={logo} alt={alt} />
        </div>
        )
       })}
    </>
  )
}

export default LogosContainer