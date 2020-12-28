import styles from "./avatar.module.css";

const Avatar = ({ src, emoji }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={src} alt="Me!" />
      <img className={styles.emoji} src={emoji} alt="emoji" />
    </div>
  );
};

export default Avatar;
