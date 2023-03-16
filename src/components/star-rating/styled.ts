import styled from 'styled-components';
import { Rate } from 'antd';

const StyledRate = styled(Rate)`
  grid-column-start: 1;
  grid-column-end: -1;
  margin-left: auto;

  @media (min-width: 421px) {
    grid-column-start: 2;
  }
`;

export default StyledRate;
