/* eslint-disable react/no-array-index-key */

'use client';

import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function MostViewed(): JSX.Element {
  const cardsData = [];
  for (let i = 0; i < 5; i += 1) {
    cardsData.push({
      name: `Card ${i + 1}`,
      views: Math.floor(Math.random() * 1000),
    });
  }
  return (
    <TableContainer sx={{ maxHeight: '255px', overflow: 'auto' }}>
      <Typography
        sx={{ padding: '10px 0px 0px 15px' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Most Viewed Cards
      </Typography>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: 120 }}>Cards</TableCell>
            <TableCell style={{ minWidth: 120 }}>Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ maxHeight: '144px', overflow: 'auto' }}>
          {cardsData.map((card) => (
            <TableRow
              key={1 + Math.random()}
              sx={{
                '&:last-child td': { borderBottom: 0, maxHeight: '144px', overflow: 'auto' },
              }}
            >
              <TableCell>{card.name}</TableCell>
              <TableCell>{card.views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
