import React from 'react';
import Delivery from "../image/delivery.png";
import HeroBg from '../image/heroBg.png';
import { heroData } from '../utils/data';



const HomeContainer = () => {
  return (
    <section id="home" 
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
    <div className='py-2 flex-1 flex flex-col items-start justify-start gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-600 font-semibold'>
          Bike Delivery</p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} 
           className='w-full h-full object-contain'
           alt="delivery" />
        </div>
        
      </div>

      <p className='text-[2.5rem] font-bold tracking-wide lg:text-[4.5rem] text-headingColor'>The Fastest Delivery in <span className='text-orange-700 text-[3rem] lg:text-[5rem]'>Your city</span></p>
      <p className='text-base text-gray-600 text-center md:text-left md:w-[80%]'>Welcome to Food-en Route, where flavors meet convenience! Order now for a delightful journey of culinary delights delivered right to your doorstep.</p>

      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg md:w-auto hover: shadow-lg transition-all ease-in-out duration-100'>Order now!</button>
    
    </div>

    
    <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650'
         alt="herobg"/>
           

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
        {heroData && heroData.map((n)=>(
                <div key={n.id} 
                     className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                <img src={n.imageSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt="i1"/>
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.description}</p>

                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
            </div>
            ))}
            
        </div>
    </div>
  
  </section>
  )
}

export default HomeContainer
