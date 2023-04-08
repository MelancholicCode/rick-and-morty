import styled from "styled-components";

const StyledIcon = styled.div`
background: url(${props => props.src}) center center no-repeat;
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
transform: rotate(${props => props.rotate || '0'}deg);
`;

const Icon = (props) => {
  return <StyledIcon {...props}/>;
};

export default Icon;