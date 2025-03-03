import React from "react"
import   './Home.css'
import Header from "../../components/Header"
import Affiche from "../../components/Affiche"
import Block1 from "../../components/Block1"
import { li } from "framer-motion/client"
import Footer from "../../components/Footer"



export default function Home(){
    const dataBlock1= [
        {titre:'mon titre', descript:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ullam!'},
        {titre:'mon titre', descript:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ullam!'},
        {titre:'mon titre', descript:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ullam!'},
        {titre:'mon titre', descript:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ullam!'},
    ]
    return(
        <>
            <header>
                <Header />
                <Affiche />
            </header>
            <section className="section1">
                <div className="image">
                    <img style={{height:'100%',overflowX:'hidden'}}  src="https://media.istockphoto.com/id/1124478886/de/foto/collage-von-gruppen-von-jungen-studenten-die-uniform-abgestuft-uniform-%C3%BCber-isolierten.jpg?s=612x612&w=0&k=20&c=X1we8TwQmM5eQga7urUM85uAgSmPLRSukqREyIHy7bc=" alt="" />
                </div>
                <div className="divUl">
                    <ul className="ul">
                    {dataBlock1.map((el,index) =>(
                        <li key={index} style={{}}>
                            <Block1  titre={el.titre} descript={el.descript}/>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
            <section className="section2">
                    <h1>N-D-M Solution</h1>
                    <div className="laSeparante">
                        <div className="section2Gauche">
                            <p>sans souci Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus animi praesentium soluta et quo, officia aspernatur commodi delectus distinctio cumque!</p>
                        </div>
                        <hr />
                        <div className="section2Droite">
                            <p>Vos document ont pries feu ?! <br /> Vos documents ce sont perdu lors de votre voyage a dubai ?! <br /> Sans souci N-M-D est la pour vous et vous sauvegarde vos donner dans le cloud</p>
                        </div>
                    </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
