import styles from "./Descriptions.module.css";

const Descriptions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café
      </h1>
      <p className={styles.text}>Please leave your feedback about our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default Descriptions;