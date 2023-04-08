import styled from "styled-components";
import spinner from "../../img/spinner.svg";
import Icon from './Icon';

const SpinnerWrapper = styled.div`
margin: 0 auto;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Icon src={spinner} width="100px" height="100px"/>
    </SpinnerWrapper>
  )
};

export default Spinner;