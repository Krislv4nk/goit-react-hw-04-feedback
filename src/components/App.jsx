import React, { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? (this.state.good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section title="Please, leave feedback">
           <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.handleFeedback} 
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
  }
}

