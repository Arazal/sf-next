import Image from "next/image"

export default function WorldwideServiceNetwork() {

    return (
        
        <div className="container mt-16">
            {/* <div className="w-full h-1 bg-sfsecondary "></div> */}
            <h2 className="m-2 mt-8">Worldwide <span className="text-sfsecondary">Service network</span></h2>
            <section className="countries-network grid grid-cols-1 md:grid-cols-6">
                <div className="countries-network-card">
                    <p>Coverage in the domestic cities: 99.4%</p>
                    <p className="text-sfsecondary text-xl font-bold">335</p>
                    <p className="text-sfsecondary">prefecture-level cities (including municipalities directly under the Central Government)</p>
                </div>
                <div className="countries-network-card">
                    <p>Coverage in the domestic counties: 97.6%</p>
                    <p className="text-sfsecondary text-xl font-bold">2,8613</p>
                    <p className="text-sfsecondary">cities of county and district level</p>
                </div>
                <div className="countries-network-card">
                    <p>Coverage of cross-border e-commerce parcels</p>
                    <p className="text-sfsecondary text-xl font-bold">208</p>
                    <p className="text-sfsecondary">countries and regions</p>
                </div>
                <div className="countries-network-card">
                    <p>Coverage of international express delivery and supply chain business</p>
                    <p className="text-sfsecondary text-xl font-bold">98</p>
                    <p className="text-sfsecondary">countries and regions</p>
                </div>
                <div className="countries-network-card">
                    <p>Revenues of 2022</p>
                    <p className="text-sfsecondary text-xl font-bold">267.5</p>
                    <p className="text-sfsecondary">billion</p>
                </div>
                <div className="countries-network-card">
                    <p>Number of Employees</p>
                    <p className="text-sfsecondary text-xl font-bold">162,823</p>
                    <p className="text-sfsecondary"></p>
                </div>
               
            </section>
            <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12">
                <div className="countries-card">
                    <h4 className=" font-bold">North America</h4>
                    <p>Canada</p>
                    <p>Mexico</p>
                    <p>The United States</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">South America</h4>
                    <p>Argentina</p>
                    <p>Colombia</p>
                    <p>Venezuela</p>
                    <p>Suriname</p>
                    <p>Ecuador</p>
                    <p>Bolivia</p>
                    <p>Uruguay</p>
                    <p>Chile</p>
                    <p>Panama</p>
                    <p>Brazil</p>
                    <p>Guatemala</p>
                    <p>Peru</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Europe</h4>
                    <p>Belgium</p>
                    <p>Czech Republic</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Netherlands</p>
                    <p>Poland</p>
                    <p>Portugal</p>
                    <p>Sweden</p>
                    <p>UK</p>
                    <p>Russia</p>
                    <p>Austria</p>
                    <p>Bulgaria</p>
                    <p>Cyprus</p>
                    <p>Denmark</p>
                    <p>Estonia</p>
                    <p>Austria</p>
                    <p>Finland</p>
                    <p>Greece</p>
                    <p>Hungary</p>
                    <p>Swiss</p>
                    <p>Ireland</p>
                    <p>Latvia</p>
                    <p>Republic of Lithuania</p>
                    <p>Luxembourg</p>
                    <p>Malta</p>
                    <p>Ukraine</p>
                    <p>France</p>
                    <p>Rumania</p>
                    <p>Slovakia</p>
                    <p>Slovenia</p>
                    <p>Spain</p>
                    <p>Norway</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Africa</h4>
                    <p>Uganda</p>
                    <p>Egypt</p>
                    <p>Mozambique</p>
                    <p>Nigeria</p>
                    <p>Republic of the Congo</p>
                    <p>Senegal</p>
                    <p>South Africa</p>
                    <p>Togo</p>
                    <p>The Democratic Republic of the Congo</p>
                    <p>Kenya</p>
                    <p>Morocco</p>
                    <p>Tanzania</p>
                    <p>Cameroon</p>
                    <p>Ghana</p>
                    <p>Ethiopia</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Caucasus</h4>
                    <p>Armenia</p>
                    <p>Azerbaijan</p>
                    <p>Georgia</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Middle East</h4>
                    <p>Bahrain</p>
                    <p>Oman</p>
                    <p>UAE</p>
                    <p>Jordan</p>
                    <p>Qatar</p>
                    <p>Israel</p>
                    <p>Turkey</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Central Asia</h4>
                    <p>Kazakhstan</p>
                    <p>Kyrgyzstan</p>
                    <p>Tajikistan</p>
                    <p>Turkmenistan</p>
                    <p>Uzbekistan</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">South Asia</h4>
                    <p>Bangladesh</p>
                    <p>India</p>
                    <p>Pakistan</p>
                    <p>Sri Lanka</p>
                    <p>Nepal</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">China</h4>
                    <p>Chinese Mainland</p>
                    <p>Hong Kong</p>
                    <p>Macau</p>
                    <p>Taiwan</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Southeast Asia</h4>
                    <p>Cambodia</p>
                    <p>Indonesia</p>
                    <p>Laos</p>
                    <p>Malaysia</p>
                    <p>Myanmar</p>
                    <p>Philippines</p>
                    <p>Singapore</p>
                    <p>Thailand</p>
                    <p>Vietnam</p>
                    <p>Brunei</p>
                </div>
                <div className="countries-card">
                    <h4 className=" font-bold">Oceania</h4>
                    <p>Australia</p>
                    <p>New Zealand</p>
                </div>
                <div className="countries-card">
                    <h4 className="font-bold">East Asia</h4>
                    <p>Japan</p>
                    <p>South Korea</p>
                    <p>Mongolia</p>
                </div>
                <div className="flex"></div>
            </div>
            <p className="text-sfsecondary m-2 p-2 text-right">Established in China  Serve the world</p>
            <Image src='/WorldwideServiceNetwork.png' width={3804} height={1191} alt='service network' />
        </div>
    )
}