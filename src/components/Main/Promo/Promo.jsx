import style from './Promo.module.css'
import NavTab from "../NavTab/NavTab"
function Promo() {

  return (
    <section className={style.promo}>
      <h1 className={style.title}> Учебный проект студента факультета Веб-разработки</h1>
      <p className={style.description}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <NavTab />
    </section>
  )
}

export default Promo