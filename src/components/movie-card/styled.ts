import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: min-content 1fr;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  grid-column-gap: 13px;
  grid-row-gap: 10px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 13px;
  grid-column-start: 2;
  grid-column-end: -1;
`;

const StyledImage = styled.img`
  height: 91px;
  width: 60px;

  @media (min-width: 421px) {
    grid-row-start: 1;
    grid-row-end: 4;
    height: 281px;
    width: 183px;
  }
`;

const StyledShortInfo = styled.div`
  flex-grow: 1;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 7px;
`;

const StyledReleaseDate = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #827e7e;
  margin-top: 0;
  margin-bottom: 7px;
`;

const StyledGenreList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;

const StyledGenreItem = styled.li`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 3px;
  background-color: #fafafa;
  display: flex;
  font-size: 12px;
  line-height: 14px;
`;

const StyledRating = styled.div<{ color: string }>`
  padding: 8px;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: calc(50% - 18px);
    border: 2px solid ${(props) => props.color};
    border-radius: 50%;
    content: '';
    width: 34px;
    height: 34px;
    font-size: 12px;
    line-height: 12px;
  }
`;

const StyledAnnotation = styled.p`
  grid-column-start: 1;
  grid-column-end: -1;
  margin: 0;

  @media (min-width: 421px) {
    grid-column-start: 2;
  }
`;

export {
  StyledCard,
  StyledInfo,
  StyledImage,
  StyledShortInfo,
  StyledTitle,
  StyledReleaseDate,
  StyledAnnotation,
  StyledGenreList,
  StyledGenreItem,
  StyledRating,
};
