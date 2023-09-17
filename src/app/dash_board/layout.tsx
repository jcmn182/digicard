// styles
import { Box } from '@mui/material';
import TopMenu from '../../components/topMenu';

export const metadata = {
  title: 'dashboard',
  description: 'general dashboar to handle all tasks',
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <TopMenu />
      <Box sx={{ padding: '0px 20px' }}>
        {children}
      </Box>
    </>
  );
}
