import {useEffect, useState} from 'react'
import {sanityClient} from '../lib/sanityClient'
import './ArbeidskravListe.css'

function ArbeidskravListe() {
  const [arbeidskrav, setArbeidskrav] = useState([])
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState('')

  useEffect(() => {
    async function hentArbeidskrav() {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "arbeidskrav"] | order(_createdAt asc){
            _id,
            title,
            description
          }`
        )
        setArbeidskrav(data)
      } catch (error) {
        const melding = error instanceof Error ? error.message : 'Ukjent feil'
        setFeil(`Klarte ikke hente arbeidskrav fra Sanity. (${melding})`)
      } finally {
        setLaster(false)
      }
    }

    hentArbeidskrav()
  }, [])

  return (
    <section className="arbeidskrav-seksjon" aria-labelledby="arbeidskrav-tittel">
      <h2 id="arbeidskrav-tittel">Arbeidskrav</h2>

      {laster && <p>Laster arbeidskrav...</p>}
      {feil && <p>{feil}</p>}

      {!laster && !feil && (
        <ul className="arbeidskrav-liste">
          {arbeidskrav.map((item) => (
            <li key={item._id}>
              <article className="arbeidskrav-kort">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ArbeidskravListe
