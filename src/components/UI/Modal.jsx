import { useEffect } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
z-index: 99;
pointer-events: ${props => props.active ? 'all' : 'none'};
opacity: ${props => props.active ? '1' : '0'};
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
`;

const ModalContent = styled.div`
padding: 0 15px;
`;

const Modal = ({active, setActive, children, ...props}) => {
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'visible';
  }, [active])
  return (
    <StyledModal onClick={() => setActive(false)} active={active} {...props}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;