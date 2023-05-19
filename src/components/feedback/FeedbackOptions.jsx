import { FeedbackStyle } from './feedback.styled.js' 

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackStyle.StyleBtnContainer>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('good')}>Good</FeedbackStyle.StyleButton>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('neutral')}>Neutral</FeedbackStyle.StyleButton>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('bad')}>Bad</FeedbackStyle.StyleButton>
  </FeedbackStyle.StyleBtnContainer>
);