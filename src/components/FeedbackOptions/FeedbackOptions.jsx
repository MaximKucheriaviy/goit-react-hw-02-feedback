import PropTypes from "prop-types";
import { ButtonList } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <ButtonList>
            <li>
                <button type="button" onClick={() => {onLeaveFeedback(options[0])}}>Good</button>
            </li>
            <li>
                <button type="button" onClick={() => {onLeaveFeedback(options[1])}}>Neutral</button>
            </li>
            <li>
                <button type="button" onClick={() => {onLeaveFeedback(options[2])}}>Bad</button>
            </li>
        </ButtonList>
    )
}


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}