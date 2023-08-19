import '../../vendor/normalize.css';
import style from './App.module.css';
import Header from '../Header/Header.jsx';
import Promo from '../Main/Promo/Promo.jsx';

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Promo />
    </div>
  );
}

export default App;
