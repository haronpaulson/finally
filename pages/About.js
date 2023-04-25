import React from 'react';
import Image from 'next/image';
import {BiArrowBack} from "react-icons/bi";
import Link from "next/link";


function About() {
    const prefix = "/author-web";
  return (
    <div className='  h-screen  back bg-black pt-4 '>
        <Link href="/">
           
           <button type="text" className="border-4 text-white text-lg justify-center absolute  right-3 w-24 bottom-28 items-center flex  h-10 bg-slate-700 font-bold font-serif shadow-xl shadow-yellow-700 lg:top-8 md:text-2xl md:w-32 md:bottom-32 md:h-12 md:right-5 hover:bg-black rounded-lg "> <BiArrowBack className='mr-1  '/>Home</button></Link>
        <div >
            <div className='mb-5  shadow-md    shadow-orange-200 p-4 w-52 ml-[20%] md:ml-[36%] lg:ml-[42%] rounded-full'>
                <img src= "/author1.jpeg" alt="autho" className='w-40  rounded-full object-contain '/>
            
               
            </div>
            <div>
                <h1 className='text-xl text-center font-serif font-extrabold mb-3 text-green-200 decoration-clone '>Jyotindra Nath Prasad</h1>
            </div>
            <div className='  text-white w-3/4 ml-[13%] text-xs m-1 rounded-md   md:text-lg lg:text-sm xl:text-2xl'>
                <h1 className='text-center space-y-4 p-2 pt-5 md:pt-12 '>
                Author Jyotindra Nath Prasad was born in village Enkhaun in Dulhin

Bazar of Bihta in Patna district of Bihar province in India on May 9,1955. He graduated in English from Patna College in Patna University in 1976.He is married and has one son and one daughter. He is journalist and litterateur.He lives in Patna.He has been staff reporter of Hindustan Times.

His books including 'Fashionwad Zindabad' and 'Phir Subah Hogi' are podcast on Kuku FM Radio. The audio books can be had by installing Kuku FM App.

He writes his views on contemporary issues in different journals. He contributes his literary pieces to the Hindi magazines. .
                </h1>
            </div>
        </div>
        <div className='absolute bottom-0 w-screen' >
            
            <Footer/>
        </div>
      
    </div>
  )
}

export default About
