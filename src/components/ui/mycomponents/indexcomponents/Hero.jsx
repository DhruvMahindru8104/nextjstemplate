import React from 'react'
import { Card3dBlock } from '../thirdpartyblocks/acceternityblocks/3dcardBlock'
import Image from 'next/image'
function Hero() {
  return (
   <>
   <div className=' flex w-full justify-center  items-center '>
    
    <div className='w-[50%] text-4xl'>
        <h1>hello how are you </h1>
    </div>
    <div className='w-[50%]'>
<Card3dBlock/>
    </div>
   </div>

   <div className="w-[10%] bg-fuchsia-500 aspect-mobile relative">
  <Image 
    alt="hello"
    src={'/girl.jpg'}
    fill
    className="object-cover"  
  />
</div>



   </>
  )
}
export default Hero