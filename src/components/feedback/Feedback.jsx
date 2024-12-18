import styles from "./Feedback.module.css";

const Feedback = ({feedbackData, total, positive}) => {
  return (
    <div className={styles.container}>
     <ul>
      <li>Good: {feedbackData.Good}</li>
      <li>Neutral: {feedbackData.Neutral}</li>
      <li>Bad: {feedbackData.Bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
     </ul>
    </div>
  );
};

export default Feedback;