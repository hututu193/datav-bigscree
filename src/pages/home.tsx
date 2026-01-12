import './home.scss'
import { Header } from '../components/header'
import {Chart1} from '../components/charts/char-1'
import {Chart2} from '../components/charts/char-2'
import { Chart3 } from '../components/charts/char-3'
import { Chart4 } from '../components/charts/char-4'
import { Chart5 } from '../components/charts/char-5'

export const Home = () =>{
    
    return (
        <div className="home">
            
            <Header/>
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
                    <Chart5/>
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