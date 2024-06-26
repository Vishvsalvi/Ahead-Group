import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function Sports() {
  return (
    <div>
      

<section className=" body-font bg-[#fffff2] ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">

      <div className="sm:w-1/2 mb-10 px-4 hover:shadow-md transition-all duration-300 ease-in-out py-3 rounded-sm ">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" 
          width={500}
          height={500}
          src="/Images/AdventureImg.avif"/>
        </div>
        <h2 className="title-font text-2xl font-bold text-[#e3282c] mt-6 mb-3">Adventure Sports And Camps </h2>
        <p className="text-start leading-relaxed text-base text-[#572d27] ">Embark on thrilling adventures with Ahead Group Adventure Camps and Treks. Immerse yourself in the beauty of nature while experiencing adrenaline-pumping activities. Our camps are designed for both enthusiasts and beginners.</p>
        <button href="/adventure" className="text-center flex mx-auto mt-6 text-white bg-[#e3282c] border-0 py-2 px-5 focus:outline-none hover:bg-[#e3282c] rounded"> <Link href="/adventure" >Explore</Link> </button>
      </div>

      <div className="sm:w-1/2 mb-10 px-4 hover:shadow-md transition-all duration-300 ease-in-out py-3 rounded-sm">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full"
          width={500}
          height={500}
          src="/Images/Teakwondo.avif"/>
        </div>
        <h2 className="title-font text-2xl font-bold text-[#e3282c] mt-6 mb-3 ">Martial Arts</h2>
        <p className="text-start leading-relaxed text-base text-[#572d27] ">Join our Dragon Warriors, where martial arts meet discipline and fitness. Our expert instructors provide top-notch training, fostering a sense of strength, focus, and self-confidence in every participant.</p>
        <button className="flex mx-auto mt-6 text-white bg-[#e3282c] border-0 py-2 px-5 focus:outline-none   rounded">Explore</button>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}
