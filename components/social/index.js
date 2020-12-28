import styles from "./social.module.css";

const Intro = ({ src }) => {
  return (
    <div className={styles.container}>
      {Object.keys(src).map((item) => (
        <a key={item} className={styles.item} href={src[item]}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Intro;
