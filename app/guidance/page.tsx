// 'use client'


import Link from 'next/link'

import Slide3 from '../components/guidance/slide3'
import Slide2 from '../components/guidance/slide2';
import Slide4 from '../components/guidance/Slide4';
import Slide5 from '../components/guidance/Slide5';



export default function Guidance() {
   
    return (
        
    <div className='overflow-x-hidden'>  
       <div className="flex flex-col justify-center h-[70vh] w-screen bg-gradient-to-tr from-sfprimary to-sfprimary-new1-600">
            <h3 className="text-center text-white m-3">Using Guidance of Economy Express (International) from Netherlands</h3>
        </div>
        <div className="h-3 bg-sfsecondary w-screen"></div>

        <section className=' m-3 bg-white max-w-max px-4 py-2 mx-auto rounded shadow-md text-center  grid grid-cols-1 gap-3 md:grid-cols-4'>
                    <Link href='#'>01 Definitions</Link>
                    <Link href='#'>02 Coverage and Zone Area</Link>
                    <Link href='#'>03 Product Selling points and Rates Policy</Link>
                    <Link href='#'>04 SOP of Using Guidance</Link>
        </section>
         
            <Slide2 />   
            <Slide3 />
            <Slide5 />
            <Slide4 />
            
    </div>
    )
}