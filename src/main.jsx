/** @jsx m */
import './style.css'
import {m, mount} from "umai"


const App = () => 
    <div>
        <h1>HEllo UMAI²</h1>
        <img src="dog.webp" />
    </div>

mount(document.getElementById("app"), App)