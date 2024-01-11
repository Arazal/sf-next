'use client'

import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Guidance() {
    const guidance = useRef(null)
    useEffect(() => {
        
        const ctx = gsap.context(() => {
            gsap.to('.rot', {
                rotate: 360,
                transformOrigin: 'center center',
                duration: 4,
                repeat: -1
            })
            gsap.to('#car1-new', {
                duration: 10, 
                repeat: -1,
                // repeatDelay: 3,
                //   yoyo: true,
                  ease: "power1.inOut",
                // ease: 'none',
                motionPath:{
                    path: '#path1-new',
                    align: '#path1-new',
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5]
                }
        })
        gsap.to('#car2-new', {
            duration: 10, 
            repeat: -1,
            repeatDelay: 2,
            //   yoyo: true,
              ease: "power1.inOut",
            // ease: 'none',
            motionPath:{
                path: '#path2-new',
                align: '#path2-new',
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            }
    })
        gsap.to('#car3-new', {
            duration: 10, 
            repeat: -1,
            repeatDelay: 3,
            //   yoyo: true,
              ease: "power1.inOut",
            // ease: 'none',
            motionPath:{
                path: '#path3-new',
                align: '#path3-new',
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            }
    })
    gsap.to('#plane1-new', {
        duration: 10, 
        repeat: -1,
        repeatDelay: 1,
        
        //   yoyo: true,
          ease: "power1.inOut",
        // ease: 'none',
        motionPath:{
            path: '#path4-new',
            align: '#path4-new',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
})
    gsap.to('#plane2-new', {
        duration: 10, 
        repeat: -1,
        repeatDelay: 2,
        
        //   yoyo: true,
          ease: "power1.inOut",
        // ease: 'none',
        motionPath:{
            path: '#path5-new',
            align: '#path5-new',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
})
gsap.to('#car4-new', {
    duration: 10, 
    repeat: -1,
    repeatDelay: 1,
    //   yoyo: true,
      ease: "power1.inOut",
    // ease: 'none',
    motionPath:{
        path: '#path6-new',
        align: '#path6-new',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
})
gsap.to('#car5-new', {
    duration: 10, 
    repeat: -1,
    repeatDelay: 2,
    //   yoyo: true,
      ease: "power1.inOut",
    // ease: 'none',
    motionPath:{
        path: '#path7-new',
        align: '#path7-new',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
})

        }, guidance)

        return () => ctx.revert() 

    }, [])
    return (
        
        <div className='container'>  
       <div className="flex flex-col justify-center h-[70vh] w-screen bg-gradient-to-tr from-sfprimary to-sfprimary-new1-600">
                    <h3 className="text-center text-white">Using Guidance of Economy Express (International) from Netherlands</h3>
                </div>
                <div className="h-3 bg-sfsecondary"></div>
                {/* <div className="flex flex-row justify-between items-center m-3 h-[30vh]">
                    <div><a href='http://sf-international.com'>www.sf-international.com</a></div>
                    <div><Image src={'/sf-international-logo.png'} alt='logo' width={180} height={90}/></div> 
                </div> */}

                <section className=' m-3 bg-white max-w-max px-4 py-2 mx-auto rounded shadow-md text-center  grid grid-cols-1 gap-3 md:grid-cols-4'>
                    <Link href='#'>01 Definitions</Link>
                    <Link href='#'>02 Coverage and Zone Area</Link>
                    <Link href='#'>03 Product Selling points andRatesPolicy</Link>
                    <Link href='#'>04 SOP of Using Guidance</Link>
                </section>

                <div ref={guidance} className='w-5/6 mx-auto grid grid-cols-1'>
                {/* <defs>
    <image id="image" width="300" height="195" xlinkHref="/plane.png"/>
    <image id="image-2" width="400" height="267" xlinkHref="/SFcarNew1reversed.png"/>
  </defs> */}
              
<div className='col-start-1 row-start-1  '></div>
{/* <svg className='z-10 col-start-1 row-start-1' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1229 621.31"> */}

<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1281.17 512.86">
  <defs>
    <image id="image-2" width="300" height="195" xlinkHref="/plane.png"/>
    <image id="image" width="400" height="267" xlinkHref="/SFcarNew1reversed.png"/>
  </defs>
  <g id="consumer">
    <g>
      <path d="m29.39,450.57c.79,1.74,2.93,2.94,5.39,2.8,2.7-.16,4.91-2.16,4.91-4.35v-1.08s-9.12,2.43-9.12,2.43c-.38.1-.78.17-1.18.21Z"/>
      <ellipse cx="40.87" cy="370.79" rx="9.18" ry="7.41"/>
      <path d="m16.82,425.76c-.52-1.83.29-3.64,1.97-4.77l-.81-1.98-.84,2.06-.87-.23c-1.39-.37-2.9.18-3.48,1.26l-10.64,19.9c-.66,1.23.14,2.65,1.71,3.07l10.89,2.89c1.58.42,3.26-.34,3.64-1.65l2.18-7.55-3.74-12.98s0,0,0-.01Z"/>
      <path d="m91.21,435.24l-17.8-16.22c-.97-.88-2.62-1.03-3.8-.32l-.74.44-1.59-1.74v2.09c2.03.65,3.51,2.17,3.72,4.04,0,0,0,0,0,.01l1.46,13.28,4.99,6.62c.86,1.15,2.76,1.45,4.1.65l9.23-5.49c1.34-.8,1.54-2.35.44-3.35Z"/>
      <path d="m67.9,423.74c-.13-1.18-1.35-2.08-2.82-2.09h-.87s0-3.09,0-3.09c1.86-.56,3.09-2.09,2.85-3.76-.16-1.09-3.61-25.03-3.77-26.12-.18-4.54-4.82-8.2-10.49-8.2h-23.88c-5.72,0-10.4,3.78-10.42,8.43v.03c0,1.04.08,25.34.08,26.3,0,1.42,1.03,2.64,2.5,3.22l1.55,3.82-.87.23c-1.38.37-2.19,1.54-1.86,2.69l6.06,21.15c.38,1.31,2.06,2.07,3.62,1.65l10.83-2.9c1.56-.42,2.36-1.84,1.7-3.08l-10.58-19.93c-.58-1.09-2.08-1.64-3.46-1.27l-.87.23-1.28-3.16c.9-.66,1.47-1.61,1.47-2.67,0-.99-.07-25.27-.08-26.29,0-.24.96-.42,1.25-.43.29,0,.53.19.53.42l-.03,25.86h.03v2.73l.26.65c2.22.11,4.19,1.23,5.09,2.9l5.24,9.84v-16.11h2.37v20.4l3.09,5.77c1.3,2.42-.06,5.25-3.09,6.32v1.71c0,2.22,2.06,4.13,4.8,4.34,2.99.23,5.54-1.54,5.81-3.85-1.84-1.02-2.75-2.72-2.57-4.4l2.74-23.14s-.4-3.5-.48-32.85c0-.39.37-.72.86-.75s1.16.25,1.23.64v.06c.05.29,1.5,10.66,3.77,26.6.11.77.51,1.45,1.1,1.98v4.02s-.91,0-.91,0c-1.45,0-2.65.9-2.78,2.07l-2.38,21.54c0,.08-.01.16-.01.24.02,1.24,1.27,2.24,2.79,2.24l11.42.11h0c1.66,0,2.97-1.15,2.82-2.49l-2.38-21.64Z"/>
    </g>
  </g>
  <g id="Company">
    <path id="Path_133" data-name="Path 133" d="m82.06,79.61H14.56c-6.21,0-11.25,3.78-11.25,8.44v81.56h90v-81.56c-.02-.12-.05-.23-11.25-8.44Zm-41.25,84.38v-16.87h15v16.87h-15Zm45,0h-22.5v-19.69c0-1.55-1.68-2.81-3.75-2.81h-22.5c-2.07,0-3.75,1.26-3.75,2.81v19.69H10.81v-75.94c0-1.55,1.68-2.81,3.75-2.81h67.5c2.07,0,3.75,1.26,3.75,2.81v75.94ZM25.81,96.49h15v11.25h-15v-11.25Zm30,0h15v11.25h-15v-11.25Zm-30,22.5h15v11.25h-15v-11.25Zm30,0h15v11.25h-15v-11.25Z"/>
  </g>
  <g id="Store">
    <path d="m89,248.55h-15.89l-21.15-25.4c-1.73-1.91-4.67-2.06-6.58-.34-.12.11-.23.22-.34.34l-21.15,25.4H8c-2.48,0-4.5,2.02-4.5,4.5v54.06c0,2.49,2.01,4.5,4.5,4.5h81c2.48,0,4.5-2.02,4.5-4.5v-54.06c0-2.49-2.01-4.5-4.5-4.5Zm-40.52-15.47l12.89,15.47h-25.77l12.89-15.47Zm18.08,60.57H30.45c-2.15,0-4.22-1.73-4.53-3.86-.4-2.79,1.76-5.19,4.47-5.19h36.11c2.15,0,4.22,1.73,4.53,3.86.4,2.79-1.76,5.19-4.47,5.19Zm9.04-17.96H21.41c-2.15,0-4.22-1.73-4.53-3.86-.4-2.79,1.76-5.19,4.47-5.19h54.19c2.15,0,4.22,1.73,4.53,3.86.4,2.79-1.76,5.19-4.47,5.19Z"/>
  </g>
  <g id="hub2">
    <g>
      <path d="m951.27,78.11h-77.85c-3.45,0-6.15,2.7-6.15,6.15v82.35c0,.9.6,1.5,1.5,1.5h87c.9,0,1.5-.6,1.5-1.5v-82.35c0-3.45-2.7-6.15-6-6.15Zm-4.57,49.5h-68.96v-3.04h68.96v3.04h0Zm0-5.96h-68.96v-3.04h68.96v3.04h0Zm-68.96,9h68.96v3.04h-68.96v-3.04Zm70.54-21.04h-72v-5.96h72v5.96h0Zm-1.46,3.04v3.04h-68.96v-3.04h68.96Zm-63.04,49.46c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3Zm12,3c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Zm26.96-20.96h3.04v3.04h-3.04v-3.04Zm-1.43,5.96h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v9h-14.96v-9h3.04v4.46c0,.83.67,1.5,1.5,1.5Zm10.43,5.96h3.04v3.04h-3.04v-3.04Zm-16.48,0h1.52v3.04h-3.04v-3.04h1.52Zm-2.94,6.08h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v8.89h-14.96v-8.89h3.04v4.46c0,.83.67,1.5,1.5,1.5Zm13.46,2.93v-9h3.04v4.46c0,.83.67,1.5,1.5,1.5h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v9h-14.96Zm18,0v-10.43c0-.83-.67-1.5-1.5-1.5h-7.5v-10.54c0-.83-.67-1.5-1.5-1.5h-18.04c-.83,0-1.5.67-1.5,1.5v10.54h-7.5c-.83,0-1.5.67-1.5,1.5v10.43h-3.81c.51-.88.81-1.91.81-3,0-3.3-2.7-5.99-6-5.99-1.79,0-3.4.79-4.5,2.04-1.1-1.25-2.71-2.04-4.5-2.04-3.3,0-6,2.7-6,5.99,0,1.09.3,2.11.81,3h-3.81v-28.46h69.08v28.46h-3.04Zm10.57.11h-4.61v-52.56c.88,0,1.46-.6,1.46-1.5v-9.01c0-.83-.67-1.5-1.5-1.5h-74.85c-.83,0-1.5.67-1.5,1.5v9c0,.9.58,1.5,1.46,1.5v52.46h-4.5v-80.77c0-1.74,1.41-3.15,3.15-3.15h77.74c1.74,0,3.15,1.41,3.15,3.15v80.89h0Z"/>
      <path d="m933.27,84.07h-42c-.83,0-1.5.67-1.5,1.5v10.5c0,.83.67,1.5,1.5,1.5h42c.83,0,1.5-.67,1.5-1.5v-10.5c0-.9-.6-1.5-1.5-1.5Zm-1.43,10.58h-39.04v-7.54h39.04v7.54h0Z"/>
    </g>
  </g>
  <g id="customs1">
    <path d="m590.73,155.05v8.36c0,2.59,1.82,4.7,4.05,4.7h29.4c2.22,0,4.05-2.12,4.05-4.7v-8.36h-37.49Z"/>
    <path d="m585.46,111.47h-1.92c-2.22,0-4.05,2.12-4.05,4.7v34.18c0,2.59,1.82,4.7,4.05,4.7h7.19v-43.58h-5.27Z"/>
    <polygon points="633.23 158.75 633.23 168.11 669.5 168.11 669.5 154.91 633.23 154.91 633.23 158.75"/>
    <polygon points="657.53 86.35 657.53 78.11 631.49 78.11 636.28 86.35 657.53 86.35"/>
    <path d="m636.51,89.61l-4.33,6.53h5.92c0,5.96,3.91,10.8,8.93,11.26,5.68.52,10.5-4.81,10.5-11.43v-6.36h-21.03Z"/>
    <path d="m669.5,149.23v-30.22c0-4.17-2.9-7.54-6.49-7.54h-.85l-13.83,21.77-10.17,15.99h31.34Z"/>
    <path d="m633.23,126.11v21.12l22.74-35.76h-24.04c-2.14,0-5.19,1.95-6.72,4.35-1.53,2.4-2.75,4.35-2.75,4.35l-13.2,20.67c-1.45,2.22-.99,5.32.92,7.01l.46.35c1.91,1.6,4.58,1.15,6.03-1.06l16.56-25.91v4.88Z"/>
  </g>
  <g id="hub1">
    <g>
      <path d="m951,365.61h-77.85c-3.45,0-6.15,2.7-6.15,6.15v82.35c0,.9.6,1.5,1.5,1.5h87c.9,0,1.5-.6,1.5-1.5v-82.35c0-3.45-2.7-6.15-6-6.15Zm-4.57,49.5h-68.96v-3.04h68.96v3.04h0Zm0-5.96h-68.96v-3.04h68.96v3.04h0Zm-68.96,9h68.96v3.04h-68.96v-3.04Zm70.54-21.04h-72v-5.96h72v5.96h0Zm-1.46,3.04v3.04h-68.96v-3.04h68.96Zm-63.04,49.46c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3Zm12,3c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Zm26.96-20.96h3.04v3.04h-3.04v-3.04Zm-1.43,5.96h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v9h-14.96v-9h3.04v4.46c0,.83.67,1.5,1.5,1.5Zm10.43,5.96h3.04v3.04h-3.04v-3.04Zm-16.48,0h1.52v3.04h-3.04v-3.04h1.52Zm-2.94,6.08h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v8.89h-14.96v-8.89h3.04v4.46c0,.83.67,1.5,1.5,1.5Zm13.46,2.92v-9h3.04v4.46c0,.83.67,1.5,1.5,1.5h6c.83,0,1.5-.67,1.5-1.5v-4.46h2.93v9h-14.96Zm18,0v-10.43c0-.83-.67-1.5-1.5-1.5h-7.5v-10.54c0-.83-.67-1.5-1.5-1.5h-18.04c-.83,0-1.5.67-1.5,1.5v10.54h-7.5c-.83,0-1.5.67-1.5,1.5v10.43h-3.81c.51-.88.81-1.91.81-3,0-3.3-2.7-5.99-6-5.99-1.79,0-3.4.79-4.5,2.04-1.1-1.25-2.71-2.04-4.5-2.04-3.3,0-6,2.7-6,5.99,0,1.09.3,2.11.81,3h-3.81v-28.46h69.08v28.46h-3.04Zm10.57.11h-4.61v-52.56c.88,0,1.46-.6,1.46-1.5v-9.01c0-.83-.67-1.5-1.5-1.5h-74.85c-.83,0-1.5.67-1.5,1.5v9c0,.9.58,1.5,1.46,1.5v52.46h-4.5v-80.77c0-1.74,1.41-3.15,3.15-3.15h77.74c1.74,0,3.15,1.41,3.15,3.15v80.89h0Z"/>
      <path d="m933,371.57h-42c-.83,0-1.5.67-1.5,1.5v10.5c0,.83.67,1.5,1.5,1.5h42c.83,0,1.5-.67,1.5-1.5v-10.5c0-.9-.6-1.5-1.5-1.5Zm-1.43,10.58h-39.04v-7.54h39.04v7.54h0Z"/>
    </g>
  </g>
  <g id="house1">
    <path d="m1205.17,154.1l8.57,8.22,21.43-20.54m-44.97-25.63v20.49m10.05-10.32h-20.1m-24.9-21.57v32.97c0,8.63,0,12.94,1.63,16.24,1.44,2.9,3.73,5.26,6.56,6.73,3.21,1.68,7.41,1.68,15.81,1.68h6m49.92-46.27l-27.17-31c-6.18-7.05-9.27-10.57-12.91-11.88-3.2-1.14-6.67-1.14-9.87,0-3.64,1.3-6.73,4.83-12.9,11.88l-27.16,31" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"/>
  </g>
  <g id="house2">
    <path d="m1212.5,440.85l8.57,8.22,21.43-20.54m-44.97-25.63v20.49m10.05-10.32h-20.1m-24.9-21.57v32.97c0,8.63,0,12.94,1.63,16.24,1.44,2.9,3.73,5.26,6.56,6.73,3.21,1.68,7.41,1.68,15.81,1.68h6m49.92-46.27l-27.17-31c-6.18-7.05-9.27-10.57-12.91-11.88-3.2-1.14-6.67-1.14-9.87,0-3.64,1.3-6.73,4.83-12.9,11.88l-27.16,31" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9"/>
  </g>
  
  <g id="rotate" className='rot'>
    <path d="m483.84,136.09c-.11-.92-.17-1.86-.17-2.81,0-12.43,10.07-22.5,22.5-22.5,7.03,0,13.31,3.23,17.44,8.28m4.89,11.41c.12.92.17,1.86.17,2.81,0,12.43-10.07,22.5-22.5,22.5-6.72,0-12.75-2.95-16.88-7.62m8.48-.83h-8.44v.84m34.26-37.38v8.27m0,0v.17h-8.44m-25.82,36.53v-7.59" fill="none" stroke="#c1272d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>
  <g id="warehouse">
    <path d="m440.82,204.83c-.52,0-1.04-.53-1.51-1.57l-39.6-92.35-39.6,91.72c-1.76,3.8-3.86.37-4.69-7.67-.83-8.04-.08-17.64,1.68-21.44l42.61-96.42,42.61,96.42c1.89,1.9,3.09,10.45,2.67,19.1-.42,8.64-2.29,14.11-4.18,12.21Zm-58.25,156.37h-20.55v93.91h20.55v-93.91Zm27.36,0h-20.55v93.91h20.55v-93.91Zm27.49,0h-20.55v93.91h20.55v-93.91Zm-13.74-125.02h-20.55v93.91h20.55v-93.91Zm-27.36,0h-20.55v93.91h20.55v-93.91Z"/>
  </g>
  <g id="rotate2" className='rot'>
    <path d="m486.67,274.92c-.11-.92-.17-1.86-.17-2.81,0-12.43,10.07-22.5,22.5-22.5,7.03,0,13.31,3.23,17.44,8.28m4.89,11.41c.12.92.17,1.86.17,2.81,0,12.43-10.07,22.5-22.5,22.5-6.72,0-12.75-2.95-16.88-7.62m8.48-.83h-8.44v.84m34.26-37.38v8.27m0,0v.17h-8.44m-25.82,36.53v-7.59" fill="none" stroke="#c1272d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>
  <g id="rotate3" className='rot'>
    <path d="m485.67,417.92c-.11-.92-.17-1.86-.17-2.81,0-12.43,10.07-22.5,22.5-22.5,7.03,0,13.31,3.23,17.44,8.28m4.89,11.41c.12.92.17,1.86.17,2.81,0,12.43-10.07,22.5-22.5,22.5-6.72,0-12.75-2.95-16.88-7.62m8.48-.83h-8.44v.84m34.26-37.38v8.27m0,0v.17h-8.44m-25.82,36.53v-7.59" fill="none" stroke="#c1272d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>
  <g id="customs2">
    <path d="m587.23,298.05v8.36c0,2.59,1.82,4.7,4.05,4.7h29.4c2.22,0,4.05-2.12,4.05-4.7v-8.36h-37.49Z"/>
    <path d="m581.96,254.47h-1.92c-2.22,0-4.05,2.12-4.05,4.7v34.18c0,2.59,1.82,4.7,4.05,4.7h7.19v-43.58h-5.27Z"/>
    <polygon points="629.73 301.75 629.73 311.11 666 311.11 666 297.91 629.73 297.91 629.73 301.75"/>
    <polygon points="654.03 229.35 654.03 221.11 627.99 221.11 632.78 229.35 654.03 229.35"/>
    <path d="m633.01,232.61l-4.33,6.53h5.92c0,5.96,3.91,10.8,8.93,11.26,5.68.52,10.5-4.81,10.5-11.43v-6.36h-21.03Z"/>
    <path d="m666,292.23v-30.22c0-4.17-2.9-7.54-6.49-7.54h-.85l-13.83,21.77-10.17,15.99h31.34Z"/>
    <path d="m629.73,269.11v21.12l22.74-35.76h-24.04c-2.14,0-5.19,1.95-6.72,4.35-1.53,2.4-2.75,4.35-2.75,4.35l-13.2,20.67c-1.45,2.22-.99,5.32.92,7.01l.46.35c1.91,1.6,4.58,1.15,6.03-1.06l16.56-25.91v4.88Z"/>
  </g>
  <g id="customs3">
    <path d="m585.23,442.05v8.36c0,2.59,1.82,4.7,4.05,4.7h29.4c2.22,0,4.05-2.12,4.05-4.7v-8.36h-37.49Z"/>
    <path d="m579.96,398.47h-1.92c-2.22,0-4.05,2.12-4.05,4.7v34.18c0,2.59,1.82,4.7,4.05,4.7h7.19v-43.58h-5.27Z"/>
    <polygon points="627.73 445.75 627.73 455.11 664 455.11 664 441.91 627.73 441.91 627.73 445.75"/>
    <polygon points="652.03 373.35 652.03 365.11 625.99 365.11 630.78 373.35 652.03 373.35"/>
    <path d="m631.01,376.61l-4.33,6.53h5.92c0,5.96,3.91,10.8,8.93,11.26,5.68.52,10.5-4.81,10.5-11.43v-6.36h-21.03Z"/>
    <path d="m664,436.23v-30.22c0-4.17-2.9-7.54-6.49-7.54h-.85l-13.83,21.77-10.17,15.99h31.34Z"/>
    <path d="m627.73,413.11v21.12l22.74-35.76h-24.04c-2.14,0-5.19,1.95-6.72,4.35-1.53,2.4-2.75,4.35-2.75,4.35l-13.2,20.67c-1.45,2.22-.99,5.32.92,7.01l.46.35c1.91,1.6,4.58,1.15,6.03-1.06l16.56-25.91v4.88Z"/>
  </g>
 
  <text transform="translate(2 22.11)" fill="#c8102e" fontFamily="Broadway, Broadway" fontSize="24"><tspan x="0" y="0">NETHERLANDS</tspan></text>
  <text transform="translate(384 20.11)" fill="#c8102e" fontFamily="Broadway, Broadway" fontSize="24"><tspan x="0" y="0">Delivery to SF WMS warehouse</tspan></text>
  <text transform="translate(858 21.11)" fill="#c8102e" fontFamily="Broadway, Broadway" fontSize="24"><tspan x="0" y="0" letterSpacing="-.06em">Transit hub in China of SF</tspan></text>
  <text  transform="translate(7 339.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0" letterSpacing="-.02em">Stores</tspan></text>
  <text  transform="translate(5 194.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">Company</tspan></text>
  <text  transform="translate(2 480.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">Consumer</tspan></text>
  <text  transform="translate(287 483.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">SF AMS Warehouse</tspan></text>
  <text  transform="translate(579 481.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">Customs Clearence</tspan></text>
  <text  transform="translate(866 198.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">China</tspan></text>
  <text  transform="translate(866 480.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">HK Hub</tspan></text>
  <text  transform="translate(1153 191.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">China Mainland</tspan></text>
  <text  transform="translate(1155 478.11)" fontFamily="Broadway, Broadway" fontSize="16"><tspan x="0" y="0">Other Countries</tspan></text>

  <path id="path1-new" d="m126,167.61h199" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path2-new" d="m124.5,312.61h199" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path3-new" d="m125.5,457.61h199" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path4-new" d="m692,167.61h146" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path5-new" d="m692.75,458.11h147.25" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path6-new" d="m983,170.11h137" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <path id="path7-new" d="m991,456.11h130" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round"/>
  <use id="car1-new" transform="translate(95.29 119.6) scale(.26 .23)" xlinkHref="#image"/>
  <use id="car2-new" transform="translate(97.11 259.28) scale(.25)" xlinkHref="#image"/>
  <use id="car3-new" transform="translate(96.43 403.78) scale(.25)" xlinkHref="#image"/>
  <use id="car5-new" transform="translate(964.14 403.33) scale(.25)" xlinkHref="#image"/>
  <use id="car4-new" transform="translate(961.27 116.53) scale(.25)" xlinkHref="#image"/>
  <use id="plane1-new" transform="translate(682.11 100.3) scale(.37 .35)" xlinkHref="#image-2"/>
  <use id="plane2-new" transform="translate(680 387.11) scale(.37 .35)" xlinkHref="#image-2"/>

</svg>

</div>
                
         
        </div>
    )
}