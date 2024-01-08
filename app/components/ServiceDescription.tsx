'use client'

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDescription() {

    useEffect(() => {
        gsap.to('.api', {rotate: 360, scrollTrigger: {
            trigger: '.api',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
        gsap.to('.warehouse1', {scale: 1.1, scrollTrigger: {
            trigger: '.warehouse1',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
        gsap.set('.sf-car1', { opacity: 0, x: 300 });
        gsap.to('.sf-car1', {x: 0, opacity:1, scrollTrigger: {
            trigger: '.sf-car1',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                      
        }})
        gsap.to('.warehouse2', {scale: 1.1, scrollTrigger: {
            trigger: '.warehouse2',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
        gsap.to('.customs1', {scale: 1.1, scrollTrigger: {
            trigger: '.customs1',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
        gsap.set('.plane1', { opacity: 0, x: -300 });
        gsap.to('.plane1', {x: 0, opacity:1, scrollTrigger: {
            trigger: '.plane1',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                      
        }})
        gsap.to('.customs2', {scale: 1.1, scrollTrigger: {
            trigger: '.customs2',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
        gsap.set('.sf-car2', { opacity: 0, x: 300 });
        gsap.to('.sf-car2', {x: 0, opacity:1, scrollTrigger: {
            trigger: '.sf-car2',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                      
        }})
        gsap.set('.plane2', { opacity: 0, x: -300 });
        gsap.to('.plane2', {x: 0, opacity:1, scrollTrigger: {
            trigger: '.plane2',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                      
        }})
        gsap.to('.express-delivery', {scale: 1.1, scrollTrigger: {
            trigger: '.express-delivery',
                        start: 'top 80%', // Adjust the starting point as per your requirement
                        end: 'top 20%', // Adjust the ending point as per your requirement
                        scrub: true, // Enables scrubbing effect
                        // markers: true,
        }})
    }, [])


    return (
        <div className="md:w-4/5 ml-auto mr-auto btn-scrollto">
 

<h3 className='btn-scrollto hero-text mt-20 text-center text-sfprimary opacity-85 m-3'>Express Service Solutions for Europe Client (From Europe)</h3>
<h4 className='text-center'>Transit time CN/HK/MK: 3-5 working days</h4>
<h4 className='text-center'>SEA: 3-6 working days</h4>
<h4 className='text-center mb-5'>Other destinations: 4-9 working days</h4>
<h4 className='text-center mb-5'>Payments of Tax/Duty: DDP &DDU</h4>

<div className='grid grid-cols-1 '>
    <div className="border border-dashed ">
      <h4 className="text-center m-3 text-sfprimary opacity-65">Customer area</h4>
      <h4 className="text-center m-3 text-sfprimary opacity-65">With MRN document in case `{'>'}` € 1000</h4>
      <div className='flex flex-col items-center m-3'>
        <h4 className='m-3'><span className=' text-sfsecondary'>1.</span> Place order via API/web</h4>
         <img src='/api.svg' height="90px" width="90px" alt='api' className='api ani-item'/>
         <Link target="_blank" className="btn-getstarted  m-3 inline-block rounded bg-white  border-2 border-sfsecondary hover:bg-sfsecondary text-black px-12 pt-4 pb-3.5 text-sm font-bold uppercase leading-normal "
            data-te-ripple-init data-te-ripple-color="light" href="https://iuop.sf.global/#/" role="button">SF UUOP</Link>
        </div>
    
    <div className='flex flex-col items-center m-3'>
        <h4 className='m-3'><span className=' text-sfsecondary'>2.</span>Labeling of SF Waybill</h4>
        <img   src='/warehouse.svg' height="90px" width="90px" alt='warehouse' className='warehouse1'/>
    </div>
    
    <div className='flex flex-col items-center m-3'>
        <h4 className='m-3'><span className=' text-sfsecondary'>3.</span>Delivery to SF warehouse</h4>
        <img  src='/SFcarNew1.png' height="90px" width="120px" alt='car' className='sf-car1'/>
    </div>
    </div>
   
      <div className="sf-area border border-dashed mt-3">
        <h4 className="text-center m-3 text-sfprimary opacity-65">SF Express area</h4>
      <div className='flex flex-col items-center m-3'>
          <h4 className='m-3'><span className=' text-sfsecondary'>4.</span>SF Warehouse processing: data recheck& pick-up in SF system</h4>
          <img src='/warehouse.svg' height="90px" width="90px" alt='warehouse' className='warehouse2'/>
      </div>
      
      <div className='flex flex-col items-center m-3 '>
          <h4 className='m-3'><span className=' text-sfsecondary'>5.</span>Export customs clearance</h4>
          <img src='/customs.svg' height='90px' width='90px' className='customs1' alt='customs'/>
      </div>
      
      <div className='flex flex-col items-center m-3 '>
          <h4 className='m-3'><span className=' text-sfsecondary'>6.</span>Air transportation to SF hub (CAN / HKG)</h4>
          <img src="/plane.png" height='120px' width='120px' alt='plane' className='plane1' />
      </div>
      
      <div className='flex flex-col items-center m-3 mb-20'>
          <h4 ><span className=' text-sfsecondary'>7.</span>Import customs clearance</h4>
          <img src='/customs.svg' height='90px' width='90px' className='customs2' alt='customs'/>
      </div>
      

      <div className='flex flex-col items-center m-3 mb-20'>
          <h4 className='m-3'><span className=' text-sfsecondary'>8.</span>Airfreight from HKG to destination country / Ground&Air shipping from CAN to Mainland China</h4>
          
          <img src="/plane.png" height='120px' width='120px' alt='plane' className='plane2' />
          <img  src='/SFcarNew1.png' height="90px" width="120px" alt='car' className='sf-car2'/>
      </div>

     
      <div className='flex flex-col items-center m-3 mb-20'>
          <h4 ><span className=' text-sfsecondary'>9.</span>Last Mile - courier delivery</h4>
          <img  src='deliveryman2.svg' height='90px' width='90px' alt='courier' className='express-delivery'/>

          <Link target="_blank" className="btn-getstarted  m-5 inline-block rounded bg-white  border-2 border-sfsecondary hover:bg-sfsecondary text-black px-12 pt-4 pb-3.5 text-sm font-bold uppercase leading-normal "
            data-te-ripple-init data-te-ripple-color="light" href="https://www.sf-international.com/cn/en/support/querySupport/waybill" role="button">Tracking</Link>

      </div>

      
    </div>
    </div>

        </div>
    )
}