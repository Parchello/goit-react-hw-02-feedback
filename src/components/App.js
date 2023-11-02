import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  countBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  // countPositiveFeedbackPercentage()

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={this.countGoodFeedback}>good</button>
        <button onClick={this.countNeutralFeedback}>neutral</button>
        <button onClick={this.countBadFeedback}>bad</button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total:</span>
        <span>Percentage: %</span>
      </div>
    );
  }
}
