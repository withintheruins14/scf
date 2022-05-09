import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Deals } from '../deals';
import { StyledGrid } from './styles';
import scott from '../scott.png';

export function Airport() {
  const { id } = useParams();
  const [airport, setAirport] = useState();
  const city = airport?.nearestAirport?.city;
  const deals = airport?.deals;

  useEffect(() => {
    if (id) {
      fetch(`https://api.scottscheapflights.com/workers/recent-deals?airport_code=${id}`)
      .then((f) => f.json())
      .then((f) => {
        const airport = f?.data;
        if (airport) setAirport(airport);
      })
    }
  }, [id]);

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
            Hello, {city}.
          </Typography>
          <Typography variant="subtitle1">
            I’m sure {city} is pretty great, but wouldn’t you rather be somewhere else?
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
      <Deals deals={deals}/>
    </>
  );
}