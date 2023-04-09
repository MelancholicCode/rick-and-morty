import Icon from '../Icon';
import { StyledSpinner } from './index.styled';

import { spinner } from '../../../img/icons';

const Spinner = (props) => {
  return (
    <StyledSpinner {...props}>
      <Icon src={spinner} width="100px" height="100px"/>
    </StyledSpinner>
  )
};

export default Spinner;