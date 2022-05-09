import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Deals, StyledGrid } from '../deals';
import { Typography } from '@mui/material';
import scott from '../scott.png';

export function Home() {
  const [deals, setDeals] = useState();
  useEffect(() => {
    fetch('https://api.scottscheapflights.com/workers/recent-deals')
      .then((f) => f.json())
      .then((f) => {
        const deals = f?.data?.deals;
        if (deals) setDeals(deals);
      })
  }, []);

  return (
    <>
      <StyledGrid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          sm={6}
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3">
            Vacation, found.
          </Typography>
          <Typography variant="subtitle1">
            Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ textAlign: 'center' }}
        >
          <img src={scott} />
        </Grid>
      </StyledGrid>
      <Deals deals={deals} hasSeeMore />
    </>
  );
}