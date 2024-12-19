import styles from "./Feedback.module.css";

const Feedback = ({feedbackData, total, positive}) => {
  return (
    <div className={styles.container}>
     <ul>
      <li>Good: {feedbackData.good}</li>
      <li>Neutral: {feedbackData.neutral}</li>
      <li>Bad: {feedbackData.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
     </ul>
    </div>
  );
};

export default Feedback;