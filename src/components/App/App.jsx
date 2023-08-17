import '../../vendor/normalize.css'
import style from './App.module.css';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';

function App() {

  return (
    <div className={style.page}>
      <Header />
      <Promo />
    </div>
  );
}

export default App;
