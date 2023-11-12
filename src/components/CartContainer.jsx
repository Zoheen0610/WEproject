import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
import { RiRefreshFill} from 'react-icons/ri';

const CartContainer = () => {
  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[100]'>
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <motion.div whileTap={{scale:0.75}}>
            <MdOutlineKeyboardBackspace className='text-gray-300 text-3xl' />
            </motion.div>
            <p className='text-textColor text-lg font-semibold'> Cart</p>
            <motion.p whileTap={{scale:0.75}} className='flex items-center gap-2 p-1 px-2 my-2 ng-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>
                Clear<RiRefreshFill/>{""}</motion.p>
        
      </div>
      {/*bottom sec*/}
      <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            <div className='w-full p-1 px-2 rounded-lg bg-slate-200 flex items-center gap-2'>
                <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d5713.appspot.com/o/Images%2F%201699804181433-i5.png?alt=media&token=a785cda8-903e-40b6-a8ac-b93163057bca" alt="" />
                <div className='flex flex-col gap-2'>
                    <p classname='text-base text-white'> chocolate vanilla</p>
                    <p classname='text-sm block text-gray-300 font-semibold'> $5.00</p>
                </div>

                <div classname='group flex items-center gap-2 ml-auto cursor-pointer'>
                    <motion.div whileTap={{scale:0.75}}>

                    </motion.div>
                    <motion.div whileTap={{scale:0.75}}>

                    </motion.div>
                </div>
            
            </div>
        </div>

      </div>
    </div>);
}

export default CartContainer