import React, { useState, useEffect } from 'react';
import css from './feedbackOptions.module.css';




export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  useEffect(() => {
    if (selectedOption) {
      console.log(`User selected: ${selectedOption}`);
    }
  }, [selectedOption]);

  return (
    <div className={css.buttonContainer}>
      {options.map(option => (
        <button className={css.button} key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};


// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div className={css.buttonContainer}>
//     {options.map(option => (
//       <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>
//         {option}
//       </button>
//     ))}
//   </div>
// );