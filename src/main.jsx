/** @jsx m */
import './style.css'
import { m, mount } from "umai"
import '@master/css';
import '../master.css'
import { Hero } from "./components/hero"
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

const App = () =>
    <div>
        <Navbar />
        <div class="container">
            <main class="bg:rgba(0,108,46, 0.1) w:100vw max-width:1600px" style="margin: 0 auto">
            <Hero />
            <div class="h:100rem">HELLO</div>
            <Footer />
            </main>

        </div>
    </div>

mount(document.getElementById("app"), App)