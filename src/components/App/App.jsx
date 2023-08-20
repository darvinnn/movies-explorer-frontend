import '../../vendor/normalize.css';
import style from './App.module.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className={style.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
