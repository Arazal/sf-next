export default function SFEuropeSecvice() {
    return (
    <>
    <h3 className="products-services text-center text-sfprimary m-3">Products and Services</h3>
    <section className=" m-3 grid grid-cols-1 md:grid-cols-5 md:w-4/5 ml-auto mr-auto border border-sfprimary border-dashed">
      <div className="m-3">
        <div className="box-product bg-sfsecondary rounded">
          <h3 className="text-primary-50 text-center text-xl">EUROPE IMPORT</h3>
        </div>
        <p className="text-center">Economy Express ( EE )</p>
        <p className="text-center">Global Express +  (GE+)</p>
        <p className="text-center">Economy E-com products</p>
      </div>
      <div className="flex justify-center">
        <img src="/plus.svg" width="45px" height="45px"/>
      </div>
      <div className="m-3">
        <div className="box-product bg-sfsecondary rounded">
         <h3 className="text-primary-50 text-center text-xl">EUROPE EXPORT</h3> 
        </div>
        <p className="text-center">Economy Express (EE)</p>
        <p className="text-center">Economy E-com  (EXCD)</p>
      </div>
      <div className="flex justify-center">
        <img className="" src="/plus.svg" width="45px" height="45px"/>
      </div>
      <div className="m-3">
        <div className="box-product bg-sfsecondary rounded">
          <h3 className="text-primary-50 text-center text-xl">EUROPE DOMESTIC</h3>
        </div>
        <p className="text-center">Domestic Express Delivery Solution</p>
      </div>
    </section>

   
   
    </>

 
    )
}