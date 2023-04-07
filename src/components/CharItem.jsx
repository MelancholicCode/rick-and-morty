import React from 'react';
import styled from 'styled-components';

const StyledCharItem = styled.li`
display: flex;
flex-direction: column;
background-color: #eee;
border-radius: 5px;
padding: 20px 10px;
`;

const CharItem = (props) => {
  return <StyledCharItem {...props}/>
};

export default CharItem;