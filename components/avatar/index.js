import styles from "./avatar.module.scss";

const Avatar = ({ src }) => {
  return <img className={styles.img} src={src} alt="Me!" />;
};

export default Avatar;
