import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <button onClick={() => updateFeedback('good')} className={s.options_btn}>
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={s.options_btn}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className={s.options_btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={s.options_btn}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
