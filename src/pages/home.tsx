import './home.scss'
import headerBg from '../images/header.png'
import {Chart1} from '../components/char-1'
import {Chart2} from '../components/char-2'
import { Chart3 } from '../components/char-3'
import { Chart4 } from '../components/char-4'

export const Home = () =>{
    
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}></header>
            <main>
                <section className="bordered section1">                   
                     <Chart1/>   
                     <Chart2/>
                </section>
                <section className="bordered section2">
                    <Chart3/>
                    <Chart4/>
                </section>
                
                <section className="bordered section3">

                </section>
                <section className="bordered section4">

                </section>
                <section className="bordered section5">

                </section>
            </main>

            <footer>
                hi
            </footer>
        </div>
    )
}