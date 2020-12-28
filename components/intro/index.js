import styles from "./intro.module.css";

const Intro = ({ name, skill }) => {
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.skill}>{skill}</span>
    </>
  );
};

export default Intro;
