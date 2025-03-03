import React from 'react'
import './Store.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AsideStore from '../../components/AsideStore'
import Section1 from '../../components/Section1'


export default function Store() {
  return (
    <div className='Store'>
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <AsideStore />
        </aside>
        <section>
          <Section1 />
        </section>
      </main>
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
    </div>
  )
}
