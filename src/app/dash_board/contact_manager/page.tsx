import {
  Button, Grid, Paper,
  Typography,
} from '@mui/material';
import ContactManagerTable from '../../../components/tables/contactManager';

export default function ContactManager(): JSX.Element {
  return (
    <Grid paddingBottom={2}>
      <Grid container>
        <Grid item xs={12} sm={8} sx={{ marginTop: 1, marginBottom: 1 }}>
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>Hi Juan Carlos,</Typography>
          <Typography sx={{ marginTop: 1, marginBottom: 2 }}>Contacts (9)</Typography>
          <Typography sx={{ marginTop: 1, marginBottom: 2 }}>
            View and manage the contacts shared
            with you from your cards.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ marginTop: 2, marginBottom: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: '#16405c',
              borderColor: '#16405c',
              width: '100%',
            }}
          >
            Export contacts
          </Button>
        </Grid>
      </Grid>
      <Grid item marginTop={2}>
        <Paper elevation={10} sx={{ padding: '10px' }}>
          <ContactManagerTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
