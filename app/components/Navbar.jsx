'use client'

import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const plane = useRef(null)
    const logo = useRef(null)

    useEffect(() => {
        ScrollTrigger.create({
            // markers: true,
            start: 'top 6%',
            trigger: '.container',
            toggleClass: {targets: 'nav', className: 'nav-active'},
            // toggleClass: {targets: 'body', className: 'nav-active'}
          })
        // gsap.set('#nav-plane', { opacity: 0, x: -400})
        // gsap.to('#nav-plane', {
        // opacity:1,
        // // scale:1.1,
        // x:0,
        // duration: 3,
        // ease: 'Power0.easeInOut'
        // })
        // gsap.set('#nav-plane', { scale: 1})
        gsap.to('#logo', {
        rotation:360,
        duration: 3,
        ease: 'Power0.easeInOut'
        })
    }, [])

    return (
        <nav
            className="fixed top-0  z-10 opacity-95 flex w-full flex-wrap items-center justify-between bg-sfprimary py-1  shadow-lg  lg:py-2 ">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div>
                <Link
                    className="mx-2 my-0 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                    href="/">
                    <Image
                        ref={logo}
                        id="logo"
                        unoptimized={true}
                        className="mr-2 mainlogo"
                        src="/SF-icon.png"
                        width={45}
                        height={45}
                        style={{width:45, height:45}}
                        alt="Logo"
                        loading="lazy" />
                        <span className="font-medium dark:text-neutral-200 navtext text-white">Home</span>
                </Link>
                </div>
                {/* <img ref={plane} id="nav-plane" className="opacity-1" src="plane.png" width="90px" height="45px"/> */}
                <Link
                     className="mx-2 my-1 flex items-center navtext text-white lg:mb-0 lg:mt-0"
                     href='/guidance' >Guidance
                </Link>
                <Link
                     className="mx-2 my-1 flex items-center navtext text-white lg:mb-0 lg:mt-0"
                     href='/profile' >Profile
                </Link>
            </div>
        </nav>    

    )
}

{/* <nav
class=" fixed top-0  z-10 opacity-90 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
<div class="flex w-full flex-wrap items-center justify-between px-3">
  <div>
    <a class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="/">
      <img  id="logo" src="/sflogo.png" width="45px" height="45px"/>
    </a>
   
        <!-- <a class="mr-2" src="/sflogo.png" width="45px" height="45px" calt="Logo">
            <span class="font-medium dark:text-neutral-200">Home</span>
        </a> -->
  </div>
  <img id="nav-plane" class="opacity-0" src="plane.png" width="120px" height="180px"/>
    <!-- <a
         class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
         href='/sfinternational/profile.html' >Profile
    </a> -->
</div>
</nav>     */}