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
// import car from '@/public/SFcarNew1.png'
import plane from '@/public/plane.png'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const ServiceSolutions = () => {
    const aniContainerRef = useRef(null);
   
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
    const textScaleRef = useRef(null)

    const sectionsRef = useRef([])
    const elementsRef = useRef([]);
    const h1ref= useRef(null)


    
    // store the timeline in a ref.
    const tl = useRef();

    useLayoutEffect(()=> {
        const api = apiRef.current
        const car1 = car1Ref.current
        const plane1 = plane1Ref.current
        const car2 = car2Ref.current
        const plane2 = plane2Ref.current
        const h1r = h1ref.current
       
        const sections = sectionsRef.current;
    if (sections) {
        const elements = Array.from(sections.children);
        elementsRef.current = elements;

        if (elementsRef.current.length >= 8) {
            elementsRef.current.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: element,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                    // markers: true, 
                    // Animation for each element
                    onToggle: self => {
                        if (self.isActive) {
                            gsap.to(element, {
                                color: '#c8102e',
                                scale: 1.1,
                                duration: 1.5,
                                ease: 'sine.inOut',
                            });
                        } else {
                            // Reverse the animation or set back to initial state if needed
                            gsap.to(element, {
                                color: 'initial',
                                scale: 1,
                                duration: 1.5,
                                ease: 'sine.inOut',
                            });
                        }
                    },
                    // Add other ScrollTrigger options as needed
                });
            });
        }
    }


    gsap.to(h1r, {color: '#c8102e' , scrollTrigger: {
        trigger: h1r,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect

    }})
    gsap.to(api, {rotate: 360, scrollTrigger: {
        trigger: api,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                    // markers: true,

    }})
    // gsap.set(car1Ref.current, { opacity: 0, x: -1000 });
    gsap.set(car1Ref.current, { opacity: 0, x: 500 });
    gsap.to(car1, {x: 0, opacity:1, scrollTrigger: {
        trigger: car1,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                  
    }})
    gsap.set(car2Ref.current, { opacity: 0, x: 500 });
    gsap.to(car2, {x: 0, opacity:1, scrollTrigger: {
        trigger: car2,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                  
    }})
    gsap.set(plane1Ref.current, { opacity: 0, x: -500 });
    gsap.to(plane1, {x: 0, opacity:1, scrollTrigger: {
        trigger: plane1,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                  
    }})
    gsap.set(plane2Ref.current, {opacity: 0, x: -500 });
    gsap.to(plane2, {x: 0, opacity:1, scrollTrigger: {
        trigger: plane2,
                    start: 'top 80%', // Adjust the starting point as per your requirement
                    end: 'top 20%', // Adjust the ending point as per your requirement
                    scrub: true, // Enables scrubbing effect
                  
    }})



    }, [])


  return (
    <>
    <h3 ref={h1ref}  className='hero-text mt-20 text-center text-sfprimary opacity-85'>Express Service Solutions for Europe Client (From Europe)</h3>
    <h4 className='text-center'>Transit time CN/HK/MK: 3-5 working days</h4>
    <h4 className='text-center'>SEA: 3-6 working days</h4>
    <h4 className='text-center mb-5'>Other destinations: 4-9 working days</h4>
    <br />

    <div ref={sectionsRef}  className='grid grid-cols-1'>
    {/* <div ref={aniContainerRef}  className='grid grid-cols-1 md:grid-cols-3'> */}
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>1.</span> Place order via API/web</h4>
            <Image ref={apiRef} src={api} height={90} width={90} alt='courier' className='api ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>2.</span>Labeling of SF Waybill</h4>
            <Image   src={warehouse} height={90} width={90} alt='warehouse' className=' ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20' ref={textScaleRef}>
            <h4 className='m-3'><span className=' text-sfsecondary'>3.</span>Delivery to SF warehouse</h4>
            <Image unoptimized={true} ref={car1Ref} src='/SFcarNew1.png' height={90} width={120} alt='car' className='sf-car ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>4.</span>SF Warehouse processing: data recheck& pick-up in SF system</h4>
            <Image ref={warehouse2Ref} src={warehouse} height={90} width={90} alt='warehouse' className='ani-item'/>
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>5.</span>Export customs clearance</h4>
            <Image ref={customs1Ref} src={customs} height={90} width={90} className='customs1 ani-item' alt='customs'/>
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>6.</span>Air transportation to SF hub (CAN / HKG)</h4>
            <Image unoptimized={true} ref={plane1Ref} src={plane} height={120} width={120} alt='plane' className='plane1 ani-item' />
        </div>
        
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 ><span className=' text-sfsecondary'>7.</span>Import customs clearance</h4>
            <Image ref={customs2Ref} src={customs} height={90} width={90} className='customs1' alt='customs'/>
        </div>
        

        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 className='m-3'><span className=' text-sfsecondary'>8.</span>Airfreight from HKG to destination country / Ground&Air shipping from CAN to Mainland China</h4>
            
            <Image unoptimized={true} ref={plane2Ref} src={plane} height={120} width={120} alt='plane' className='plane2'/>
            <Image unoptimized={true} ref={car2Ref} src='/SFcarNew1.png' height={120} width={120} alt='car' className='car-svg2'/>
        </div>

       
        <div className='flex flex-col items-center m-3 mb-20'>
            <h4 ><span className=' text-sfsecondary'>9.</span>Last Mile - courier delivery</h4>
            <Image ref={courier2Ref} src={courier} height={90} width={90} alt='courier' />
        </div>

        
      </div>
      
    </>
      
  );
};

export default ServiceSolutions;
