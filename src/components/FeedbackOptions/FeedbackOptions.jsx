import { Component } from "react";
import PropTypes from "prop-types";
import { ButtonList } from "./FeedbackOptions.styled"


export default class FeedbackOptions extends Component{
    render(){
        return(
            <ButtonList>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.good)}}>Good</button>
                </li>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.neutral)}}>Neutral</button>
                </li>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.bad)}}>Bad</button>
                </li>
            </ButtonList>
        )
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.shape({
        good: PropTypes.arrayOf(PropTypes.number),
        neutral: PropTypes.arrayOf(PropTypes.number),
        bad: PropTypes.arrayOf(PropTypes.number)
    })
}