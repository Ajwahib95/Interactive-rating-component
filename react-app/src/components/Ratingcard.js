import styles from "./Ratingcard.module.css";
import star from "../images/icon-star.svg";
import { useState } from "react";

const Ratingcard = ({ submitHandler, isSubmited }) => {
  const [isActive, setIsActive] = useState(null);
  // const [isSubmited, setIsSubmited] = useState(false);
  const ratingHandler = (index) => {
    if (index === isActive) {
      setIsActive(undefined);
    } else setIsActive(index);
  };

  return (
    <main className={styles.container}>
      <img className={styles.border} src={star} alt="" />
      {isSubmited  ? <div className={styles.alert}>Please select a rating before submiting</div> : <>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      </>
      }
      <div className={styles.rating}>
        <div
          className={
            styles.ratings + (isActive === 1 ? " " + styles.ratingActive : "")
          }
          onClick={() => ratingHandler(1)}
        >
          <span>1</span>
        </div>
        <div
          className={
            styles.ratings + (isActive === 2 ? " " + styles.ratingActive : "")
          }
          onClick={() => ratingHandler(2)}
        >
          <span>2</span>
        </div>
        <div
          className={
            styles.ratings + (isActive === 3 ? " " + styles.ratingActive : "")
          }
          onClick={() => ratingHandler(3)}
        >
          <span>3</span>
        </div>
        <div
          className={
            styles.ratings + (isActive === 4 ? " " + styles.ratingActive : "")
          }
          onClick={() => ratingHandler(4)}
        >
          <span>4</span>
        </div>
        <div
          className={
            styles.ratings + (isActive === 5 ? " " + styles.ratingActive : "")
          }
          onClick={() => ratingHandler(5)}
        >
          <span>5</span>
        </div>
      </div>
      <button onClick={() => { submitHandler(isActive)}}>SUBMIT</button>
    </main>
  );
};

export default Ratingcard;
