import { useEffect } from "react";
import { StyledModal, StyledModalContent } from "./index.styled";

const Modal = ({active, setActive, children, ...props}) => {
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'visible';
  }, [active])
  return (
    <StyledModal onClick={() => setActive(false)} active={active} {...props}>
      <StyledModalContent onClick={e => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;