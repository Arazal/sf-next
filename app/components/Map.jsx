'use client'

import Image from 'next/image';
// import SvgMap from '@/public/images/YandexMap.jpg'
import { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Map() {

// const comp = useRef();
 const svgRef = useRef(null);

  useEffect(() => {
    

    const svgElement = svgRef.current;
     const plane = svgElement.getElementById('plane1'); 
     const pathElement = svgElement.getElementById('path1'); 

        gsap.to(plane1, {
        duration: 72, 
        repeat: -1,
        repeatDelay: 5,
        //   yoyo: true,
        //   ease: "power1.inOut",
        ease: 'none',
        motionPath:{
            path: path1,
            align: path1,
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
  }, []);

// useLayoutEffect(() => {
//     const svgElement = svgRef.current;
//      const pinElement = svgElement.getElementById('path1'); 
    
//     // gsap.to('#path1', { rotation: 360 });
//     gsap.to(svgElement, {
//     motionPath: {
//         path: pinElement,
//         align: pinElement,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true
//     },
//     duration: 5,
//     ease: "power1.inOut"
// });
// })



//   const handleButtonClick = () => {
//     const svgElement = svgRef.current;
//     const pinElement = svgElement.getElementById('path1'); // Replace with your actual ID

//     if (pinElement) {
//       console.log(pinElement);
//     }
//   };

    return (
      <div>
         {/* <Image 
                src={SvgMap}
                alt='map'
                width={1736}
                height={926}
            /> */}
        <svg ref={svgRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1057.8 555.6">
            <image width="1763" height="926" transform="scale(.6)" href="/images/YandexMap.jpg"/>
           
            <g id="SVGRepo_iconCarrier" data-name="SVGRepo iconCarrier">
                <path d="m125.6,103.33c-8.43,0-15.43,6.84-15.27,15.27.06,3.16,1.44,5.65,2.7,8.05.48.92,12.53,20.66,12.53,20.66v.02s0,0,0-.01h0s0,0,0,0l13.06-20.75c.81-1.41,1.59-3.54,1.59-3.54,2.44-8.07-2.12-16.59-10.19-19.03-1.44-.43-2.93-.66-4.43-.65Zm0,22.04c-4.3,0-7.79-3.49-7.79-7.79,0,0,0,0,0,0,0-4.31,3.49-7.8,7.79-7.8,4.31,0,7.8,3.49,7.8,7.79,0,4.31-3.49,7.8-7.79,7.8h0Z" fill="red" stroke="red" strokeMiterlimit="8" strokeWidth="0"/>
            </g>
            <g id="SVGRepo_iconCarrier-2" data-name="SVGRepo iconCarrier">
                <path d="m798.94,306c-8.43,0-15.43,6.84-15.27,15.27.06,3.16,1.44,5.65,2.7,8.05.48.92,12.53,20.66,12.53,20.66v.02h0s0,0,0,0v-.02l13.06-20.75c.81-1.41,1.59-3.54,1.59-3.54,2.44-8.07-2.12-16.59-10.19-19.03-1.44-.43-2.93-.66-4.43-.65Zm0,22.04c-4.3,0-7.79-3.49-7.79-7.79,0,0,0,0,0,0,0-4.31,3.49-7.8,7.79-7.8,4.31,0,7.8,3.49,7.8,7.79,0,4.31-3.49,7.8-7.79,7.8h0Z" fill="red" stroke="red" strokeMiterlimit="8" strokeWidth="0"/>
            </g>
            <path id="path1" d="m126.33,155.33c-.05-2.43,164.69-39.22,356,16,195.29,56.37,316.69,179.31,315.33,181.33-1.34,1.99-120.7-113.54-318-170.67-193.67-56.07-353.28-24.27-353.33-26.67Z" fill="none" stroke="red" strokeMiterlimit="8" strokeWidth="0"/>
            <g id="SVGRepo_iconCarrier-3" data-name="SVGRepo iconCarrier" className='animate-pulse'>
                <path className='' id="plane1" d="m141.55,159.15h-.07s.99,1.6-10.78,2.2l-3.05,4.47h.49c.74,0,1.33.6,1.33,1.33s-.6,1.33-1.33,1.33h-2.38l-1.47,2h.18c.74,0,1.33.6,1.33,1.33s-.6,1.33-1.33,1.33h-2.24c-1.73,2.16-3.32,3.93-4.43,4.67,0,0-2.33,0-2.33-1.33,0,0,5.42-9.94,7.34-14.94-12,.1-12-.73-12-.73,0,0-2.67,5-5.33,5l2-6.67h.08l-2-6.67c2.67,0,5.33,5,5.33,5,0,0,0-.83,12-.73-1.92-5-7.34-14.94-7.34-14.94,0-1.33,2.33-1.33,2.33-1.33,1.11.74,2.7,2.5,4.43,4.67h2.24c.74,0,1.33.6,1.33,1.33s-.6,1.33-1.33,1.33h-.18l1.47,2h2.38c.74,0,1.33.6,1.33,1.33s-.6,1.33-1.33,1.33h-.49l3.05,4.47c11.77.6,10.78,2.2,10.78,2.2Z" fill="red" stroke="#000" strokeLinejoin="round" strokeWidth=".96"/>
            </g>
        </svg>
    </div>
    )
}