import "../industry/industry.css"
import gdp from "../../assets/country/gdp.png"

function Industry() {
    return (
        <main class="">
            <div class="p-4 text-center  industry-banner">
                <div class="">
                    <h1 class="text-white country-banner-head mb-5">Industries</h1>

                </div>
            </div>
            <div className="col-12">
                <div className="p-5 inv-tmr text-center">
                    <h1 className="text-center text-white">Import Substitution </h1>
                    <p className="country-inves text-center mt-4 mb-0">The future of Africa's industries looks promising, with ongoing<br /> investments in infrastructure, technology, and education.<br /> These investments are expected to drive further growth and <br />development, positioning Africa as a significant player in the<br /> global economy.</p>
                </div>

            </div>
            <div className="col-12 mt-5">
                <div className="row">
                    <div className="col-3">
                        <div class="country-card ">
                            <img src={gdp} alt="Avatar" className="country-card-img w-100 border" height={250} />
                            <p className="text-center eco-card-text border">GDP</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="country-card">
                            <img src={gdp} alt="Avatar" className="country-card-img w-100" height={250} />
                            <p className="text-center eco-card-text">GDP</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="country-card">
                            <img src={gdp} alt="Avatar" className="country-card-img w-100" height={250} />
                            <p className="text-center eco-card-text">GDP</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="country-card">
                            <img src={gdp} alt="Avatar" className="country-card-img w-100" height={250} />
                            <p className="text-center eco-card-text">GDP</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="country-card">
                            <img src={gdp} alt="Avatar" className="country-card-img w-100" height={250} />
                            <p className="text-center eco-card-text">GDP</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Industry;