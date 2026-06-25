import Dither from './components/Dither'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <Navbar />

      <main className="content">
        <section className="about">
          <p className="about-eyebrow">Chi siamo</p>
          <div className="about-cards">

            <div className="glass-card">
              <div className="glass-card-avatar">N</div>
              <h3>Nicola</h3>
              <p className="glass-card-role">Develoter</p>
            </div>

            <div className="glass-card">
              <div className="glass-card-avatar">M</div>
              <h3>Matteo</h3>
              <p className="glass-card-role">Lead Developer</p>
              <div className="glass-card-bio"><img src='../public/stack.png'/></div>
            </div>

            <div className="glass-card">
              <div className="glass-card-avatar">K</div>
              <h3>Kevin</h3>
              <p className="glass-card-role">Developer & Security</p>
              <p className="glass-card-bio">Connette utenti e prodotto con ricerca e intuizione.</p>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
