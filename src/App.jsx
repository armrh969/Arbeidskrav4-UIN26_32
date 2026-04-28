import Header from './Oppsett/Header'
import MohammadProfil from './Profiler/MohammadProfil'
import RaneemComponent from './Profiler/Raneem'
import ArbeidskravListe from './Arbeidskrav/ArbeidskravListe'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="innhold">
        <section aria-label="Gruppemedlemmer">
          <MohammadProfil />
          <RaneemComponent />
        </section>
        <ArbeidskravListe />
      </main>
    </>
  )
}

export default App
