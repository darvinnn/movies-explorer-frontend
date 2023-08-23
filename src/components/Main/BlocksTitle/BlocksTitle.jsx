import style from './BlocksTitle.module.css';

function BlocksTitle({ children }) {
  return (
    <>
      <h2 className={style.blocksTitle__title}>{children}</h2>
      <div className={style.blocksTitle__line}></div>
    </>
  );
}

export default BlocksTitle;
