import React from 'react';

import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from 'services/authServices';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Grid, CircularProgress } from '@material-ui/core';
import imageLogo from '../rdi-logo.png';


import { DrawerRoutes } from 'components';
import { Home, DispatchImports, Sites, WasteTransferNotes, Uploads } from 'pages';

const toastTime = {
  autoClose: 2500,
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  large: {
    width: 75,
    height: 75,
  },
  toolbarIcon: {
    paddingLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  heightLoader: {
    minHeight: 500,
  },
  imgStyle: {
    width: 118,
    height: 35,
  },
}));

const AuthRoutes = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [loader, setLoader] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Logout Dropdown

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    confirmAlert({
      title: 'Confirmation Message',
      message: 'Are you sure to logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await logout();
            toast.info('You have successfully logged out', toastTime);
            props.setIsloggedin(false);
          },
        },
        {
          label: 'No',
          onClick: () => { },
        },
      ],
    });
  };

  const handleClose = () => {
    props.afterLogout();
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}>
            Basic Application
          </Typography>
          <IconButton
            color="inherit"
            aria-haspopup="true"
            onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <img
            alt="RDI Solutions"
            variant="square"
            src={imageLogo}
            className={classes.imgStyle}
          />

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <DrawerRoutes />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {loader ? (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.heightLoader}>
              <CircularProgress />
            </Grid>
          ) : (
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dispatch-imports" exact component={DispatchImports} />
                <Route path="/sites" exact component={Sites} />
                <Route path="/waste-transfer-notes" exact component={WasteTransferNotes} />
                <Route path="/uploads" exact component={Uploads} />
              </Switch>
            )}
        </Container>
      </main>
    </div>
  );
};

export default AuthRoutes;
