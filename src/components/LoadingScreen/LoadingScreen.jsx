import Preloader from '../Preloader/Preloader.jsx';

import style from './LoadingScreen.module.css';

function LoadingScreen() {
  return (
    <main className={style.loadingScreen}>
      <Preloader />
    </main>
  );
}

export default LoadingScreen;
