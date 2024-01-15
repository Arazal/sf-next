import Image from 'next/image'

export default function Slide6() {
    return (
       
        <div className="container my-6 mx-auto md:px-6">
     
          <section className="mb-32 text-center lg:text-left">
            {/* <style>
              @media (min-width: 992px) {
                .rotate-lg-6 {
                  transform: rotate(6deg);
                }
              }
            </style> */}
        
            <div className="py-12 md:px-6 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="flex grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div
                      className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                      <h2 className="mb-6 text-3xl font-bold text-sfsecondary">Selling Points</h2>
                      {/* <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                        neque iaculis malesuada. Aenean gravida magna orci, non
                        efficitur est porta id. Donec magna diam.
                      </p> */}
        
                      <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                              High Stability
                          </p>
                          <p>Regular and stable air Linehaul resources</p>
                        </div>
        
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Widely Coverage
                          </p>
                          <p>Cover 4 continents and 23 countries</p>
                          <p>SF service for last mile</p>
                        </div>
        
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>Market to Price
                          </p>
                          <p>Prices are in line with market</p>
                        </div>
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Short Transit time
                          </p>
                          <p>Export from Netherlands  to destination within 5-12 working days</p>
                        </div>
        
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>SF Tracking Order Visibility
                          </p>

                        </div>
        
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
                          </p>
                          <p>All data can be tracked easily in system</p>
                        </div>
                        {/* <div className="mb-6">
                          <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
                          </p>
                        </div> */}
        
                        <div className="mb-6">
                          <p className="flex items-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Perfect After-sales
                          </p>
                          <p>Perfect after-sales service guarantee system</p>
                        </div>
        
                        {/* <div className="mb-6">
                          <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                              stroke="currentColor" className="mr-3 h-5 w-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <Image width={853} height={1280}  src="/sfcars.jpeg"
                      className="rotate-lg-6 w-full rounded-lg shadow-lg" alt="sf cars" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}