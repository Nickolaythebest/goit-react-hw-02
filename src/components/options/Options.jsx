import styles from "./Options.module.css";

const Options = ({onOptionClick, onReset, hasFeedback}) => {
  return (
    <div className={styles.container}>
     <button onClick={() => onOptionClick ('good')}>Good</button>
     <button onClick={() => onOptionClick('neutral')}>Neutral</button>
     <button onClick={() => onOptionClick('bad')}>Bad</button>
     {hasFeedback 
     ? <button onClick={onReset}>Reset</button>
     : null
}
    </div>
  );
};

export default Options;