import React, { useState } from 'react';


import {motion} from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {App} from "../firebase.config";
import {MdShoppingCart, MdAdd, MdLogout  } from 'react-icons/md';
import logo from '../image/logo.png';
import avatar from '../image/avatar.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {
  const firebaseAuth=getAuth(App);
  const provider= new GoogleAuthProvider();

  const [{user , cartShow, cartItems},dispatch]=useStateValue();

  const[isMenu, setIsMenu] = useState(false);
  const login=async() =>{
        if (!user){
          const {user:{refreshToken, providerData}} = await  signInWithPopup(firebaseAuth, provider);
          dispatch(
            {
              type: actionType.SET_USER,
              user: providerData[0],
            }
          );
          localStorage.setItem("user", JSON.stringify(providerData[0]));
        }
        else{
          setIsMenu(!isMenu);
        }
  };

  const logout= () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart=() =>{
    dispatch(
      {
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      }
    );
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/*desktop and tablet */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={logo} className="w-8 object-cover" alt="logo"/> {/*LOGO*/}
                <p className="text-headingColor text-xl font-bold">city </p>
            </Link>

        <div className='flex items-center gap-8 '>
          <motion.ul 
            initial={{opacity:0, x:200}} 
            animate={{opacity:1, x:0}} 
            exit={{opacity:0, x:200}} 
            className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
          </motion.ul>

        <div className="relative flex items-center justify-center" onClick={showCart}>
          <MdShoppingCart className="text-textColor text-2xl"/>
          {cartItems && cartItems.length >0 && (
                  <div className=' absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                  <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                  </div>
                )}
         </div>

        <div className="relative">
            <motion.img 
            whileTap={{scale:0.6}}
            src={user ? user.photoURL : avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer rounded-full' 
            alt="user profile"
            onClick={login}/>
            {
              isMenu && (
                <motion.div 
                      initial={{opacity: 0, scale:0.6 }} 
                      animate={{opacity: 1, scale:1 }} 
                      exit={{opacity: 0, scale:0.6 }} 
                      className='w-40 bg-red-200 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  '>
                 {
                  user && user.email ==="zoheen.shahz@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer
                         hover:bg-red-100 transition-all duration-100 ease-in-out text-textColor 
                          text-base'
                          onClick={() => setIsMenu(false)}
                          >
                          New Item<MdAdd/></p></Link>
                  )
                 }
                 <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-100 transition-all duration-100 ease-in-out text-textColortext-base'
                 onClick={logout}>
                 Logout<MdLogout/></p>
            </motion.div>
              )
            }
            </div>
            </div>
        </div>
        {/*mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full ">
            
            <div className="relative flex items-center justify-center" onClick={showCart}>
                <MdShoppingCart className="text-textColor text-2xl"/>
                {cartItems && cartItems.length >0 && (
                  <div className=' absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                  <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                  </div>
                )}
            </div>

            <Link to={"/"} className='flex items-center gap-2'>
                <img src={logo} className="w-8 object-cover" alt="logo"/> {/*LOGO*/}
                <p className="text-headingColor text-xl font-bold">city </p>
            </Link>
            
            <div className="relative">
            <motion.img 
            whileTap={{scale:0.6}}
            src={user ? user.photoURL : avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer rounded-full' 
            alt="user profile"
            onClick={login}/>
            {
              isMenu && (
                <motion.div 
                      initial={{opacity: 0, scale:0.6 }} 
                      animate={{opacity: 1, scale:1 }} 
                      exit={{opacity: 0, scale:0.6 }} 
                      className='w-40 bg-slate-200 shadow-xl rounded-lg flex flex-col absolute top-12 right-0  '>
                 {
                  user && user.email ==="zoheen.shahz@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer
                         hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor 
                          text-base'>
                          New Item<MdAdd/>
                      </p>
                    </Link>
                  )
                 }
                 <ul 
                    
                    className="flex flex-col ">
                      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2  " 
                        onClick={() => setIsMenu(false)}
                        >Home</li>
                      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2 "
                        onClick={() => setIsMenu(false)}
                        >Menu</li>
                      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2 "
                        onClick={() => setIsMenu(false)}
                        >About us</li>
                      <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2 "
                        onClick={() => setIsMenu(false)}
                        >Service</li>
                  </ul>
                 <p className='m-2 rounded-md shadow-md px-4 py-2 flex items-center justify-center bg-slate-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColortext-base'
                 onClick={logout}>
                  Logout<MdLogout/></p>
            </motion.div>
              )
            }
            </div>
        </div>
    </header>
    );
};


export default Header;
