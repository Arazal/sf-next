export default function Table() {
    return (
        <>
    <h3 className="text-center m-3">Current Service Coverage</h3>
    <h4 className="text-center m-3">23 Countries and Regions, from Europe to Asia/North America etc.</h4>
    <h4 className="text-center m-3">SF Economy Express (International) Coverage</h4>

    <section className="grid grid-cols-3 gap-1 m-3 md:w-4/5 ml-auto mr-auto">
      <div className="text-center bg-secondary-800 text-primary-50">Zone Area</div>
      <div className="text-center bg-secondary-800 text-primary-50">Destinations(ex AMS)</div>
      <div className="text-center bg-secondary-800 text-primary-50">Ttransit Time(working days)</div>
      <div className="text-center bg-danger-500">A</div>
      <div className="text-center bg-danger-500">
          <p>China mainland</p>
          <p>Hong Kong</p>
          <p>Macao</p>
      </div>
      <div className="text-center bg-danger-500">3-5</div>

      <div className="text-center bg-warning-200">B</div>
      <div className="text-center bg-warning-200">
        <p>Singapore</p>
        <p>Thailand</p>
        <p>Taiwan</p>
        <p>Vietnam</p>
        <p>Philippines</p>
        <p>Japan</p>
        <p>Korea</p>
      </div>
      <div className="text-center bg-warning-200">3-6</div>

      <div className="text-center bg-success-200">C</div>
      <div className="text-center bg-success-200">
        <p>India</p>
        <p>Bangladesh</p>
        <p>Malaysia</p>
        <p>United Arab Emirates</p>
        <p>Indonesia</p>
        <p>Sri Lanka</p>
        <p>Australia</p>
        <p>New Zealand</p>
      </div>
      <div className="text-center bg-success-200">4-7</div>

      <div className="text-center bg-success-600 text-secondary-200">D</div>
      <div className="text-center bg-success-600 text-secondary-200">
        <p>Nepal</p>
        <p>Pakistan</p>
        <p>Canada</p>
        <p>America</p>
      </div>
      <div className="text-center bg-success-600 text-secondary-200">4-8</div>

      <div className="text-center bg-warning-500">E</div>
      <div className="text-center bg-warning-500">
        <p>South Africa</p>
      </div>
      <div className="text-center bg-warning-500 ">5-9</div>

    </section>
        </>
    )
}