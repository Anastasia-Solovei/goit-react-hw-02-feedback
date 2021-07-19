import React, { Component } from 'react';
import Controls from './Controls';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralClick = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadClick = e => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h2 className="">Please leave feedback</h2>

        <Controls
          onGoodClick={this.onGoodClick}
          onNeutralClick={this.onNeutralClick}
          onBadClick={this.onBadClick}
        />

        <h2 className="">Statistics</h2>

        <Statistics state={this.state} />
      </>
    );
  }
}

export default Feedback;
