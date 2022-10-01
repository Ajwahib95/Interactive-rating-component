import Ratingcard from "./components/Ratingcard";
import Submited from "./components/Submited";
import styles from "./App.module.css";
import { useState } from "react";

let selectedRating;

function App() {
  const [toggleView, setToggleView] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);

  const submitHandler = (rating) => {
    if (rating > 0) {
      selectedRating = rating;
      setToggleView(false);
    } else 
      setIsSubmited(true);
  }

  return (
    <div className={styles.container}>
      {toggleView ? (
        <Ratingcard submitHandler={submitHandler} isSubmited={isSubmited} />
      ) : (
        <Submited rated={selectedRating} />
      )}
    </div>
  );
}

export default App;
