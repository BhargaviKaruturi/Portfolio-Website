import React from 'react'
import image from '../assets/image.png'
import TextChange from '../Textchanges'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'> 
          <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>< TextChange/></h1>
          <p className='text-sm md:text-2xl tracking-tight '>Hi! I'm Bhargavi Karuturi, a BTech 3rd-year student specializing in Computer Science with Big Data at SRM AP.
             I'm passionate about problem-solving, algorithms, and building web applications. I have hands-on experience with C, C++, Java, JavaScript, and web development technologies like HTML, CSS, and React.</p>
          <button className='mt-5 md:md-10 text-white py02 px-3 text:sm md:text-lg md:py-2 md:px-4 hover:opacity-85
          duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        </div>
        <div><img className="w-4/5" src={image} alt=""/></div>
    </div>
  )
}

export default Home;