<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../image/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({flag, data=[], scrollValue}) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([])

  const[{cartItems}, dispatch] = useStateValue();

  const addtocart = () => {
      
      dispatch({
        type : actionType.SET_CARTITEMS,
        cartItems : items, 
      });
      localStorage.setItem("cartItems" , JSON.stringify(items));
  };
  useEffect(() => {
    rowContainer.current.scrollLeft +=scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart()
  } , [items]);
  return (
    <div 
     ref={rowContainer}
     className={`w-full flex items-center bg-orange-100 my-1 scroll-smooth ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center '}`}>
    { data && data.length > 0 ? 
        (data.map((item) => (
          <div
          key={item?.id}
          className='w-275 h-[200px] min-w-[275px] md:min-w-[320px] bg-cardOverlay my-12 mx-2 rounded-lg py-2 p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
          <div className='w-full flex items-center justify-between'>
              <motion.div className='w-40 h-40 -mt-8 drop-shadow-2xl'
                whileHover={{scale: 1.20}} >
              <img 
                src={item?.imageURL} alt="img" 
                className='w-full h-full object-contain'/>
              </motion.div>
           
            <motion.div 
                whileTap={{scale: 0.70 }} 
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                onClick={() => setItems ([...cartItems , item])}>
            <MdShoppingBasket className='text-white' />
            </motion.div>
          </div>
          <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg '>
               {item?.title}
            </p>
            <p className='mt-1 text-sm text-gray-500'>{item?.calories}</p>
               <div className='flex items-center gap-8'>
                  <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span>{item?.price} </p>
               </div>
          </div>
        </div>)
    )):( 
      <div className='w-full flex flex-col items-center justify-center'>
        <img src={NotFound} className='h-340' alt="img" />
        <p className='text-xl text-textColor my-2'>Items not available</p>
      </div>
    )} 
        
    </div>
  ); 
};

export default RowContainer;
=======
import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../image/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({flag, data=[], scrollValue}) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([])

  const[{cartItems}, dispatch] = useStateValue();

  const addtocart = () => {
      
      dispatch({
        type : actionType.SET_CARTITEMS,
        cartItems : items, 
      });
      localStorage.setItem("cartItems" , JSON.stringify(items));
  };
  useEffect(() => {
    rowContainer.current.scrollLeft +=scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart()
  } , [items]);
  return (
    <div 
     ref={rowContainer}
     className={`w-full flex items-center bg-orange-100 my-1 scroll-smooth ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center '}`}>
    { data && data.length > 0 ? 
        (data.map((item) => (
          <div
          key={item?.id}
          className='w-275 h-[200px] min-w-[275px] md:min-w-[320px] bg-cardOverlay my-12 mx-2 rounded-lg py-2 p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
          <div className='w-full flex items-center justify-between'>
              <motion.div className='w-40 h-40 -mt-8 drop-shadow-2xl'
                whileHover={{scale: 1.20}} >
              <img 
                src={item?.imageURL} alt="img" 
                className='w-full h-full object-contain'/>
              </motion.div>
           
            <motion.div 
                whileTap={{scale: 0.70 }} 
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                onClick={() => setItems ([...cartItems , item])}>
            <MdShoppingBasket className='text-white' />
            </motion.div>
          </div>
          <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg '>
               {item?.title}
            </p>
            <p className='mt-1 text-sm text-gray-500'>{item?.calories}</p>
               <div className='flex items-center gap-8'>
                  <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span>{item?.price} </p>
               </div>
          </div>
        </div>)
    )):( 
      <div className='w-full flex flex-col items-center justify-center'>
        <img src={NotFound} className='h-340' alt="img" />
        <p className='text-xl text-textColor my-2'>Items not available</p>
      </div>
    )} 
        
    </div>
  ); 
};

export default RowContainer;
>>>>>>> 8147932 (Initial commit with all project files)
