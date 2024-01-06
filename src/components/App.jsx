import React, { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';
import css from './App.module.css';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? (good / total) * 100 : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage.toFixed(2)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};



// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const feedbackFunctions = {
//     good: setGood,
//     neutral: setNeutral,
//     bad: setBad,
//   };

//   const handleFeedback = (type) => {
//     const feedbackFunction = feedbackFunctions[type];
//     if (feedbackFunction) {
//       feedbackFunction((prevValue) => prevValue + 1);
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total ? (good / total) * 100 : 0;
//   };

//   const totalFeedback = countTotalFeedback();
//   const positivePercentage = countPositiveFeedbackPercentage();

//   return (
//     <div className={css.container}>
//       <Section title="Please, leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={handleFeedback}
//         />
//       </Section>

//       <Section title="Statistics">
//         {totalFeedback > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             positivePercentage={positivePercentage.toFixed(2)}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// };

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = (type) => {
//     this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return total ? (this.state.good / total) * 100 : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <Section title="Please, leave feedback">
//            <FeedbackOptions 
//             options={Object.keys(this.state)} 
//             onLeaveFeedback={this.handleFeedback} 
//           />
//         </Section>

//         <Section title="Statistics">
//           {totalFeedback > 0 ? (
//             <Statistics 
//               good={good} 
//               neutral={neutral} 
//               bad={bad} 
//               total={totalFeedback} 
//               positivePercentage={positivePercentage.toFixed(2)} 
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

