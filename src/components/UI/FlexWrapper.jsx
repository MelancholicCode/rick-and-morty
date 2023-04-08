import styled from 'styled-components';

const FlexWrapperEl = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
gap: ${props => props.gap || '0'};
justify-content: ${props => props.justify || 'none'};
align-items: ${props => props.align || 'none'};
`;

const FlexWrapper = (props) => {
  return <FlexWrapperEl {...props}/>
};

export default FlexWrapper;