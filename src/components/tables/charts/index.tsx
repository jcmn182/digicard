/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import { Button, Grid, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export default function Charts(): JSX.Element {
  const yesterday = dayjs().subtract(1, 'day');
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cards',
      },
    },
  };

  function getRandomNumber(): number {
    return Math.floor(Math.random() * 1001);
  }

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Card 1',
        data: labels.map(() => getRandomNumber()),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Card 2',
        data: labels.map(() => getRandomNumber()),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <>
      <Typography variant="h6" sx={{ padding: '10px 0px 15px 0px' }}>My Cards Performance</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2} alignItems="center" justifyContent="flex-start">
          <Grid item xs={12} sm={1}>
            <Typography variant="body1">From</Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <DatePicker
              defaultValue={yesterday}
              disablePast
              views={['year', 'month', 'day']}
            />
          </Grid>

          <Grid item xs={12} sm={1}>
            <Typography variant="body1">To</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={2}
            style={{
              marginRight: '10px',
            }}
          >
            <DatePicker
              defaultValue={yesterday}
              disablePast
              views={['year', 'month', 'day']}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#16405c',
              }}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} maxHeight={400}>
          <Line options={options} data={data} />
        </Grid>
        <Grid item xs={12} sm={6} maxHeight={400}>
          <Line options={options} data={data2} />
        </Grid>
      </Grid>

    </>
  );
}
