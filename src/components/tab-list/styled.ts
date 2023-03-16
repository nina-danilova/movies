import styled from 'styled-components';
import { Tabs } from 'antd';

const StyledTabResult = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 421px) {
    gap: 35px;
  }
`;

const StyledTabs = styled(Tabs)`
  padding: 0 15px 20px 15px;

  @media (min-width: 421px) {
    padding: 15px 35px 20px 35px;
  }
`;

export { StyledTabs, StyledTabResult };
