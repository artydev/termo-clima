/** @jsx m */
import './style.css'
import { m, mount } from "umai"
import '@master/css';
import '../master.css'
import { Hero } from "./components/hero"
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';



const Card = () =>
    <div class="d:block w:320px h:300px min-width:320px">
        <h1 class="f:bold bg:green">Header</h1>
        <div class="bg:beryl-70 h:100%">
            Content
        </div>
    </div>
 

const App = () =>
  <div class="container">
        <Navbar />
        <Hero />
        <h1 class="text-align:center">PRODUCT</h1>
        <div class="main">
            { [...Array(10)].map(() => <Card />) }
        </div>
        <Footer />
  </div>

mount(document.getElementById("app"), App)