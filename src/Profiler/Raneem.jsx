import './Raneem.css'
import Raneem from '../assets/Raneem.png'

function RaneemComponent() {
  return (
    <article className="raneemKort">
      <img src={Raneem} alt="bilde av Raneem" />
      <h2>Raneem Hussein</h2>
      <hr className={'divider'}/>
      <section>
        <p>
          <span>E-post: </span>
          <a href="mailto:raneem.a.husein@hiof.no" className={"emailLink"}>raneem.a.husein@hiof.no</a>
        </p>
        <p>Bachelorstudium i Informasjonsteknologi, årsstudium</p>
      </section>
    </article>
  )
}

export default RaneemComponent