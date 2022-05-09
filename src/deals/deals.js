import { Grid, Stack, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { StyledGridImage, StyledPriceTag, StyledDealWrapper, StyledNormalPrice, StyledPrice, StyledSeeMore } from './styles';

export function Deals({ deals, hasSeeMore }) {
  return (
    <Grid container spacing={2}>
      {deals && deals.map((f, i) => {
        return (
         <Grid
            xs={12}
            sm={(i + 1) % 3 === 1 ? 6 : 3}
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <StyledDealWrapper>
              {
                hasSeeMore && (
                  <Link to={`/airports/${f.originIata}`}>
                    <StyledSeeMore>
                      See More {f.originIata}
                    </StyledSeeMore>
                  </Link>
                )
              }
              <StyledGridImage src={f.featureImageUrl} />
              <StyledPriceTag>
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <StyledNormalPrice>
                    {f.normalPrice.formatted}
                  </StyledNormalPrice>
                  <Stack
                  >
                    <StyledPrice>
                      {f.price.formatted}
                    </StyledPrice>
                    <Typography variant="overline">{f.originIata} to {f.destinationIata}</Typography>
                  </Stack>
                </Stack>
              </StyledPriceTag>
            </StyledDealWrapper>
          </Grid>
        );
      })}
    </Grid>
  );
}