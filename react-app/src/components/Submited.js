import styles from "./Submited.module.css";
import illustration from "../images/illustration-thank-you.svg";

const Submited = ({ rated }) => {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={illustration} alt="" />
      </div>

      <div className={styles.flex}>
        <span className={styles.selectedRating}>
          You selected {rated} out of 5{" "}
        </span>
        <h1 className={styles.thks}>Thank you!</h1>
        <p className={styles.para}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </main>
  );
};

export default Submited;
