import style from './BlocksTitle.module.css';

function BlocksTitle({ children }) {
  return (
    <>
      <h2 className={style.title}>{children}</h2>
      <div className={style.line}></div>
    </>
  );
}

export default BlocksTitle;
