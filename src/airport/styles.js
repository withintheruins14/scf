import styled from "@emotion/styled";
import { Stack, Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
  background-color: #ECFAF6;
`;

export const StyledDealWrapper = styled('div')`
  position: relative;
`;

export const StyledGridImage = styled('img')`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StyledSeeMore = styled('div')`
  top: 0;
  right: 0;
  position: absolute;
  background-color: #34D2AC;
  font-family: 'Arial';
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  padding: 14px;
  white-space: no-wrap;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

export const StyledPriceTag = styled('div')`
  background-color: #315577;
  height: 86px;
  position: absolute;
  color: #fff;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  bottom: -12px;
  height: 86px;
  width: 181px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 24px;
`;

export const StyledPrice = styled(Stack)`
  font-weight: 700;
  span {
    font-size: 12px;
  }
`;

export const StyledNormalPrice = styled(Stack)`
  font-weight: 400;
  text-decoration-line: line-through;
`;