import styles from "./Options.module.css";

const Options = ({onOptionClick, onReset, hasFeedBack}) => {
  return (
    <div className={styles.container}>
     <button onClick={() => onOptionClick ('Good')}>Good</button>
     <button onClick={() => onOptionClick('Neutral')}>Neutral</button>
     <button onClick={() => onOptionClick('Bad')}>Bad</button>
     {hasFeedBack ?
     <button onClick={onReset}>Reset</button>
     :
     <p>No Feedback yet</p>
}
    </div>
  );
};

export default Options;