'use client';

import NextLink from 'next/link';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import {
  FcBullish, FcConferenceCall, FcDocument,
  FcHome,
  FcLike, FcMenu, FcNext, FcPrevious, FcSettings,
} from 'react-icons/fc';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Avatar, Badge } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#16405c' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <FcMenu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Digicard
          </Typography>

          {/* Adding avatar and notifications to the right */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ marginRight: 2 }}>
              <Badge badgeContent={4} color="secondary">
                {' '}
                {/* Assuming 4 notifications */}
                <IoNotificationsOutline />
              </Badge>
            </IconButton>
            <Avatar alt="User Avatar" src="/path-to-your-avatar-image.jpg" />
            {' '}
            {/* Provide your avatar image path */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: '2px 0 15px rgba(0, 0, 0, 0.2)', // Adding shadow for the card effect
            borderRadius: '0 10px 10px 0', // Optional: rounded corners on the right for added touch
            backgroundColor: '#f4f4f4', // Optional: Slight change in background color
            borderRight: 0,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: '#16405c' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <FcPrevious /> : <FcNext />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NextLink href="../../dash_board/over_view">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcHome />
                </ListItemIcon>
                <ListItemText primary="Over view" />
              </ListItemButton>
            </ListItem>
          </NextLink>
          <NextLink href="../../dash_board/cards">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcDocument />
                </ListItemIcon>
                <ListItemText primary="My cards" />
              </ListItemButton>
            </ListItem>
          </NextLink>
          <NextLink href="../../dash_board/settings">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcSettings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </NextLink>
          <NextLink href="../../dash_board/analytics">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcBullish />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </ListItem>
          </NextLink>
          <NextLink href="../../dash_board/contact_manager">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcConferenceCall />
                </ListItemIcon>
                <ListItemText primary="Contact manager" />
              </ListItemButton>
            </ListItem>
          </NextLink>
          <NextLink href="../../dash_board/support">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FcLike />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </ListItem>
          </NextLink>
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
