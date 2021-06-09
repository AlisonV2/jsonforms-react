import styled from 'styled-components';

export const CustomButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top : 3rem;
`
export const CustomButton = styled.button`
background-color: black;
  color: white;
  border: none;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;