import s from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <ul className={s.feedback_container}>
      <li className={s.feedback_elem}>Good: {feedback.good}</li>
      <li className={s.feedback_elem}>Neutral: {feedback.neutral}</li>
      <li className={s.feedback_elem}>Bad: {feedback.bad}</li>
      <li className={s.feedback_elem}>Total: {totalFeedback}</li>
      <li className={s.feedback_elem}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;
