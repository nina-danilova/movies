import styled from 'styled-components';

export const StyledMovieList = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 421px) {
    gap: 35px;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
`;
