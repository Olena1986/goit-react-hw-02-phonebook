import styled from 'styled-components'

const StyleBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyleButton = styled.button`
  background-color: lightblue;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }
`;

export const FeedbackStyle = {
    StyleBtnContainer,
    StyleButton

}