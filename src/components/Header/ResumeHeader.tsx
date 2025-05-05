import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ScrollTop } from '../Scroll/Scroll';
import { drawerWidth, navItems } from './constants/constants';
import { Props } from '../../constants/constants';

export default function ResumeHeader(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.displayValue} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={(e) => props.handleMenuClick({ event: e, querySelector: item.querySelector })}
            >
              <ListItemText primary={item.displayValue} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar component='nav' sx={{ backgroundColor: 'rgba(31, 31, 31, 0.57)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'center' } }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.displayValue}
                onClick={(e) => props.handleMenuClick({ event: e, querySelector: item.querySelector })}
                sx={{ color: '#fff' }}
              >
                {item.displayValue}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'rgba(31, 31, 31, 0.57)',
              backdropFilter: 'blur(10px)',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <ScrollTop handleMenuClick={props.handleMenuClick} window={props.window}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
