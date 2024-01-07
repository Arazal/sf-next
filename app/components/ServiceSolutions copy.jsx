'use client'

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'

// import courier from '@/public/courier.svg'
import courier from '@/public/delivery.svg'
import customs from '@/public/customs.svg'
import api from '@/public/api.svg'
import warehouse from '@/public/warehouse.svg'
import car from '@/public/sf-car.jpeg'
import plane from '@/public/sf-plane.jpeg'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const ServiceSolutions = () => {
    const aniContainerRef = useRef(null);
    const elementsRef = useRef([]);
    const apiRef = useRef(null)
    const warehouse1Ref = useRef(null)
    const warehouse2Ref = useRef(null)
    const car1Ref = useRef(null)
    const plane1Ref = useRef(null)
    const customs1Ref = useRef(null)
    const customs2Ref = useRef(null)
    const car2Ref = useRef(null)
    const plane2Ref = useRef(null)
    const courier2Ref = useRef(null)

    const el = useRef();
    // store the timeline in a ref.
    const tl = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: el.current,
              scrub: true,
              start: "top 80%",
              end: "top 20%",
              markers: true,
            }
          })
            .to("h4", {
              // x: 400,
            //   rotation: 360,
              scale: 1.2,
              stagger: 0.1,
              opacity:0.9,
            })
            .to('.api', {
            //   x: 400,
              rotation: 360,
              stagger: 0.1,
              // opacity:0.9,
            })
        }, el);
        // return () => ctx.revert();
      }, []);

  return (
    <>
    <h3 className='hero-text mt-20 text-center text-sfprimary opacity-85'>Express Service Solutions for Europe Client (From Europe)</h3>
    <h4 className='text-center'>Transit time CN/HK/MK: 3-5 working days</h4>
    <h4 className='text-center'>SEA: 3-6 working days</h4>
    <h4 className='text-center'>Other destinations: 4-9 working days</h4>
    <br />

    <div ref={el}  className='grid grid-cols-1'>
    {/* <div ref={aniContainerRef}  className='grid grid-cols-1 md:grid-cols-3'> */}
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className=''><span className=' text-sfsecondary'>1.</span> Place order via API/web</h4>
            <Image ref={apiRef} src={api} height={90} width={90} alt='courier' className='api ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4 className=''><span className=' text-sfsecondary'>2.</span>Labeling of SF Waybill</h4>
            <Image  ref={warehouse1Ref}src={warehouse} height={90} width={90} alt='warehouse' className=' ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4 className=''><span className=' text-sfsecondary'>3.</span>Delivery to SF warehouse</h4>
            <Image ref={car1Ref} src={car} height={90} width={90} alt='car' className='sf-car ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4><span className=' text-sfsecondary'>4.</span>SF Warehouse processing: data recheck& pick-up in SF system</h4>
            <Image ref={warehouse2Ref} src={warehouse} height={90} width={90} alt='warehouse' className='ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4 className=''><span className=' text-sfsecondary'>5.</span>Export customs clearance</h4>
            <Image ref={customs1Ref} src={customs} height={90} width={90} className='customs1 ani-item' alt='customs'/>
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4><span className=' text-sfsecondary'>6.</span>Air transportation to SF hub (CAN / HKG)</h4>
            <Image ref={plane1Ref} src={plane} height={120} width={120} alt='plane' className='plane1 ani-item' />
        </div>
        
        <div className='flex flex-col items-center m-3'>
            <h4><span className=' text-sfsecondary'>7.</span>Import customs clearance</h4>
            <Image ref={customs2Ref} src={customs} height={90} width={90} className='customs1' alt='customs'/>
        </div>
        

        <div className='flex flex-col items-center m-3'>
            <h4><span className=' text-sfsecondary'>8.</span>Airfreight from HKG to destination country / Ground&Air shipping from CAN to Mainland China</h4>
            
            <Image ref={plane2Ref} src={plane} height={120} width={120} alt='plane' className='plane2'/>
            <Image ref={car2Ref} src={car} height={120} width={120} alt='car' className='car-svg2'/>
        </div>

       
        <div className='flex flex-col items-center m-3'>
            <h4><span className=' text-sfsecondary'>9.</span>Last Mile - courier delivery</h4>
            <Image ref={courier2Ref} src={courier} height={90} width={90} alt='courier' />
        </div>

        
      </div>
      
    </>
      
  );
};

export default ServiceSolutions;
