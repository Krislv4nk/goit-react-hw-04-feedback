import React from 'react';
import css from './feedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonContainer}>
    {options.map(option => (
      <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);