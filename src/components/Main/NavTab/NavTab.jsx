import style from './NavTab.module.css';

function NavTab() {
  const scrollToAboutProject = () => {
    const aboutProject = document.getElementById('aboutProject');
    aboutProject.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={style.button} type="button" onClick={scrollToAboutProject}>Узнать больше</button>
  );
}

export default NavTab;
