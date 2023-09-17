// import styles from './page.module.css';

import {
  Grid, Typography, Button, Paper,
} from '@mui/material';

import CardsTable from '../../../components/tables/cards';
import MostViewed from '../../../components/tables/MostViewed';
import MostSaved from '../../../components/tables/mostSaved';
import Charts from '../../../components/tables/charts';

export default function OverView(): JSX.Element {
  return (
    <Grid container spacing={3}>
      {/* First Row */}
      <Grid item xs={12} sm={8} sx={{ marginTop: 2, marginBottom: 1 }}>
        <Typography variant="h5">Hi Juan Carlos,</Typography>
        <Typography>Here is a summary of your card</Typography>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ marginTop: 2, marginBottom: 1 }}>
        <Button
          variant="outlined"
          sx={{
            color: '#16405c',
            borderColor: '#16405c',
            width: '100%',
          }}
        >
          + card

        </Button>
      </Grid>

      {/* Second Row */}
      {/* Table 1 */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={10} sx={{ padding: '10px' }}>
          <CardsTable />
        </Paper>
      </Grid>

      {/* Table 2 */}
      <Grid item xs={12} sm={3}>
        <Paper elevation={10} sx={{ padding: '10px' }}>
          <MostViewed />
        </Paper>
      </Grid>

      {/* Table 3 */}
      <Grid item xs={12} sm={3}>
        <Paper elevation={10} sx={{ padding: '10px' }}>
          <MostSaved />
        </Paper>
      </Grid>

      {/* Third Row */}
      <Grid item xs={12}>
        <Paper elevation={10} sx={{ padding: '15px' }}>
          <Charts />
        </Paper>
      </Grid>
    </Grid>
  );
}
