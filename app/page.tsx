'use client'

import Image from 'next/image';
import Link from 'next/link'
import ServiceSolutions from '@/app/components/ServiceSolutions'
import Coverage from './components/Coverage';
import SFEuropeSecvice from './components/SFEuropeService';
import Table from './components/Table';
import ServiceDescription from './components/ServiceDescription';
import MapSF from './components/MapSF'
import Test from './components/CoverageNew'
import CoverageNew from './components/CoverageNew';
import Introduction from './components/Introduction';
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin)

export default function Home() {
  const handleButtonClick = () => {
    gsap.to(window, { duration: 4, scrollTo: { y: '.btn-scrollto', offsetY: 150 } });
  }

  return (
    <div className="container my-24 mx-auto md:px-6">

  <section className="mb-32">
  {/* transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95) */}
    {/* <div className="hero-banner relative overflow-hidden bg-cover bg-no-repeat bg-[50%]  h-[500px] "></div> */}
    <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%]  h-[500px] ">
      <MapSF />
    </div>
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center">
        <div
          className=" opacity-85 mt-[-350px] md:mt-[-150px] block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
          {/* className=" opacity-80 mt-[-350px] md:mt-[-150px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12"> */}
          <h1 className="hero-text pb-3 text-sfprimary mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          {/* <h1 className="hero-text pb-3 text-sfprimary mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"> */}
            Deliver <br /><span className=" text-sfsecondary">on our every promise</span>
          </h1>
          {/* <div className=' space-x-4'> */}
            <button  className="btn-getstarted  m-1"
               onClick={handleButtonClick}>GET STARTED</button>
            <a className="btn-getstarted m-1"
               href="mailto: laiweicai@sf-express.com">CONTACT US</a>
          {/* </div> */}
          
        </div>
      </div>
    </div>
  </section>
    {/* <ServiceSolutions /> */}
    {/* <MapSF /> */}
    {/* <Coverage /> */}
    <Introduction />
    <CoverageNew />
    <SFEuropeSecvice />
    <Table />
    <ServiceDescription />
    
    
</div>

  )
}

