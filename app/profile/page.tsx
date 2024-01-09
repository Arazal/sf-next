import Image from 'next/image';
import WorldwideServiceNetwork from '../components/WorldwideServiceNetwork'
import LastSlide from '../components/LastSlide';

export default function Profile() {
    return (
        <div className='container my-36 mx-auto md:px-6'>
        
        <section className=''>
       <h3 className=' m-4 text-center'>COMPANY PROFILE</h3>
       <h4 className='m-2 text-center'>SF (Stock code: 002352) was established in Shunde, Guangdong Province in 1993.</h4>
            <h4 className='m-2'>SF is the largest integrated logistics service provider in China, and the fourth largest express delivery enterprise in the world, providing domestic and international end-to-end one-stop supply chain services. At the same time, relying on leading scientific and technological research and development capabilities, SF is committed to building the digital supply chain ecology and becoming a leader in the global intelligent supply chain.</h4>
            <div className=" grid grid-cols-1 md:grid-cols-3"> 
                <div className=' md:col-start-1 md:col-end-4 h-full'>
                    <Image className=' w-full h-full' src="/slede-plane-car-ship.jpg"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
            </div>
        </section>
        <br />
        <section>
            <h2 className='text-center my-4'>Industry-leading <span className='text-sfsecondary'>Service and Brand Value</span></h2>
            <h4 className='text-center my-4'>After years of dedicated operation, SF has earned considerable reputation and popularity in the industry, and has established the “rapid, punctual and safe” brand image.
            It takes the lead in multiple segments and continues to lead in the industry.</h4>
            <br />
            <div className='grid grid-cols1 md:grid-cols-3 gap-3'>
                <div className=''>
                    <Image className=' w-full h-full' src="/Ranked1.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div>
                    <Image className=' w-full h-full' src="/Fortune.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div>
                    <Image className=' w-full h-full' src="/Kantar.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div>
                    <Image className=' w-full h-full' src="/SF-freight.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div>
                    <Image className=' w-full h-full' src="/SF-coldchain.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div>
                    <Image className=' w-full h-full' src="/SF-intra-city.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
                <div className='md:col-start-2'>
                    <Image className=' w-full h-full ' src="/KLN.png"  width={440} height={139}  alt='sf-plane and car'/>
                </div>
            </div>
           
        </section>

        <WorldwideServiceNetwork />
        <LastSlide />

        {/* <section>
            <h2 className='text-center'>Express Logistics Services</h2>
            <h4 className='text-center m-1'>SF adheres to a diversified layout, continuously improves the product matrix, 
                and provides customers with comprehensive logistics services in many categories, levels, and all aspects.</h4>
                <br />
            <div className='grid grid-cols1 md:grid-cols-4 gap-3'>
                <Image className=' w-full h-full' src="/intra-city1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/express-delivery1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/freight1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/international1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/cold-chain1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/pharma1.png"  width={440} height={139}  alt='sf-plane and car'/>
                <Image className=' w-full h-full' src="/warehause1.png"  width={440} height={139}  alt='sf-plane and car'/>
            </div>
        </section> */}
        </div>
    )
}