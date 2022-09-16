import { Component } from "react";
import Section from "./Section/Section";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  chageState = (chageKey) => {
    this.setState((prevState) => {
      return({
        [chageKey]: prevState[chageKey] + 1
      })
    }) 
  }

  countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage(){
    return Math.ceil(this.state.good * 100 / this.countTotalFeedback());
  }

  render(){
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.chageState}/>
        </Section>
        <Section title={"Statictick"}>
        {this.countTotalFeedback() ?
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          :
          <Notification message="There is no feedback"/>
        }
        </Section>
      </div>
    );  
  }
};
  

