import './Mohammad.css'
import BildeAvMohammad from '../assets/Mohammad.png'

function MohammadProfil() {
  return (
    <article className="mohammad-profil">
      <section className="flip-card-container" aria-label="Profilkort for Mohammad Hussein">
        <article className="flip-card">
          <section className="card-face card-front">
            <img src={BildeAvMohammad} alt="Profilbilde av Mohammad" />
            <h2>Mohammad Hussein</h2>
          </section>

          <section className="card-face card-back">
            <h3>Kontaktinformasjon</h3>
            <p>
              E-post:{' '}
              <a href="mailto:mmhusein@hiof.no">mmhusein@hiof.no</a>
            </p>
            <p>Studie: Bachelorstudium i informasjonssystemer</p>
          </section>
        </article>
      </section>
    </article>
  )
}

export default MohammadProfil