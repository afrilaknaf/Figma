import "../styles/glassbox.css"
import two from "../assets/two.png"
export default function GlassBox(){


    return(
        <>
        <div className="combineimg">
       <div class="glow-box"></div>
       <img id="photo" src={two} alt="" />
       </div>
        </>
    )
}