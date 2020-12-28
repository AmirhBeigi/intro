import styles from "./avatar.module.css";

const Avatar = ({ src }) => {
  return <img className={styles.img} src={src} alt="Me!" />;
};

export default Avatar;
