import styles from "./Feedback.module.css";

const Feedback = ({feedbackData}) => {
  return (
    <div className={styles.container}>
     <ul>
      <li>Good: {feedbackData.Good}</li>
      <li>Neutral: {feedbackData.Neutral}</li>
      <li>Bad: {feedbackData.Bad}</li>
      <li>Total: {feedbackData.Total}</li>
      <li>Positive: {feedbackData.Positive}%</li>
     </ul>
    </div>
  );
};

export default Feedback;