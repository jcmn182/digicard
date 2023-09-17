/* eslint-disable import/no-extraneous-dependencies */

'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import NextLink from 'next/link';
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Drawer, Box,
} from '@mui/material';
import {
  FcConferenceCall, FcBullish, FcDocument, FcHome, FcLike, FcSettings,
} from 'react-icons/fc';

export default function TopMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
          && ((event as React.KeyboardEvent).key === 'Tab'
            || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: '100px' }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#16405c' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Button onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
                <MenuIcon />
              </Button>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              DigiCard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
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
        </Box>
      </Drawer>

    </>
  );
}
