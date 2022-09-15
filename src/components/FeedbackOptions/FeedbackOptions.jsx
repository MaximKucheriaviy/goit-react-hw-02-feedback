import { Component } from "react";
import PropTypes from "prop-types";
export default class FeedbackOptions extends Component{
    render(){
        return(
            <ul>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.good)}}>Good</button>
                </li>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.neutral)}}>Neutral</button>
                </li>
                <li>
                    <button type="button" onClick={(event) => {this.props.onLeaveFeedback(this.props.options.bad)}}>Bad</button>
                </li>
            </ul>
        )
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
}