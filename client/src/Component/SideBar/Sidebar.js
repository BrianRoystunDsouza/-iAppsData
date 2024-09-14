
import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import { Link } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RepeatIcon from '@mui/icons-material/Repeat';
import CalculateIcon from '@mui/icons-material/Calculate';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [poOpen, setPoOpen] = useState(false);
  const [InvStatus, setInvStatus] = useState(false);
  const [status, setStatus] = useState(false);
  const [ticket, setTicket] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ backgroundColor: '#fdfdfd', height: 65, boxShadow: 'none', borderBottom: '1px solid #ebebeb' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon style={{ color: 'black' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader >
            <Link to="/home">
              <img src="/compname.png" width="180" alt="tatapower" style={{ backgroundColor: 'white', marginRight: '0px', height: '7.5vh' }} />
            </Link>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List style={{ backgroundColor: '#2a3042', height: '100%', color: 'white', }}>
            <Link exact to="/home" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }}>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <HomeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>Dashboard</span>} />
              </ListItemButton>
            </Link>
            <Divider />
            <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }} onClick={() => { setPoOpen(!poOpen); setTicket(false); setStatus(false); setInvStatus(false) }}>
              <ListItemIcon style={{ minWidth: 40 }}>
                <PeopleIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<span style={{ fontSize: '0.8rem' }}>Employees</span>} />

              {poOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={poOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link exact to="/AllEmployees" style={{ textDecoration: 'none' }}>
                  <ListItemButton sx={{ pl: 4, '&:hover': { backgroundColor: "rgb(61 72 104)" } }}>
                    <ListItemIcon style={{ minWidth: 40 }}>
                      <KeyboardArrowRightIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>All Employees</span>} />
                  </ListItemButton>
                </Link>
                <Link exact to="/AddEmployee" style={{ textDecoration: 'none' }}>
                  <ListItemButton sx={{ pl: 4, '&:hover': { backgroundColor: "rgb(61 72 104)" } }}>
                    <ListItemIcon style={{ minWidth: 40 }}>
                      <KeyboardArrowRightIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>Add Employee</span>} />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <Link exact to="/AllDepartment" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }}>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <ChromeReaderModeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>All Department</span>} />
              </ListItemButton>
            </Link>
            <Divider />
            <Link exact to="/Attendance" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }} >
                <ListItemIcon style={{ minWidth: 40 }}>
                  <PersonAddAlt1Icon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>Attendance</span>} />
              </ListItemButton>
            </Link>
            <Link exact to="/payroll" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }} >
                <ListItemIcon style={{ minWidth: 40 }}>
                  <ReceiptIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>payroll</span>} />
              </ListItemButton>
            </Link>
            <Link exact to="/Jobs" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }}>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <WorkIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>Jobs</span>} />
              </ListItemButton>
            </Link>
            <Link exact to="/Candidates" style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ '&:hover': { backgroundColor: "rgb(61 72 104)" } }} >
                <ListItemIcon style={{ minWidth: 40 }}>
                  <AccountCircleIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontSize: '0.8rem', color: 'white' }}>Candidates</span>} />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
      </Box>
    </>
  )
}

export default Sidebar
