import "../styles/hero.css"
import two from "../assets/two.png"
import Background from "./rotate";
import GlassBox from "./glassbox";

export default function Hero() {


    return (
        <>
        <hr />
            <div className="maincontent">

                <div className="orbitcontent">
                    <Background/>
                </div>
                <div id="textcontent">

                    <div id="itemone">
                        <h6>NEW</h6>
                        <p>Latest integration just arrived</p>
                    </div>

                    <div id="itemtwo">
                        <h1 id="ww">Boost your</h1>
                        <h1 id="two">ranking with AI.</h1>
                    </div>
                
                    <p id="conetenpara">
                        Elevate your site's visibility effortlessly with AI, where <br />
                        smart technology meets user-friendly SEO tools
                    </p>

                    <div id="buttoncontent">
                        <button>Start for free</button>
                    </div>
                </div>

                <div id="imagesconatiner">
                    <GlassBox/>
                </div>
            </div>

        </>
    )
}