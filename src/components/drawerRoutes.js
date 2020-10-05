import React, { useState } from 'react';

import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import PeopleIcon from '@material-ui/icons/People';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ForumIcon from '@material-ui/icons/Forum';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  textDecorationDisable: {
    textDecoration: 'none',
    color: '#868e96'
  },
  text: {
    color: '#6777ef'
  },
}));

export default () => {
  const classes = useStyles();
  const [dashboardFlag, setDashboardFlag] = useState(true);
  const [clientsFlag, setclientsFlag] = useState(false);
  const [incomeReportFlag, setIncomeReportFlag] = useState(false);
  const [messagesFlag, setMessagesFlag] = useState(false);
  const [calendarFlag, setCalendarFlag] = useState(false);


  const handleSelectedOption = id => {
    if (id === 1) {
      setDashboardFlag(true)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(false)
    } else if (id === 2) {
      setDashboardFlag(false)
      setclientsFlag(true)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(false)
    } else if (id === 3) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(true)
      setMessagesFlag(false)
      setCalendarFlag(false)
    } else if (id === 4) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(true)
      setCalendarFlag(false)
    } else if (id === 5) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(true)
    } else if (id === 6) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(false)
    } else if (id === 7) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(false)
    } else if (id === 8) {
      setDashboardFlag(false)
      setclientsFlag(false)
      setIncomeReportFlag(false)
      setMessagesFlag(false)
      setCalendarFlag(false)
    }
  };

  return (
    <div>
      <Link
        to="/"
        className={classes.textDecorationDisable}
        onClick={() => handleSelectedOption(1)}>
        <ListItem button>
          <ListItemIcon>
            {dashboardFlag ? <DonutSmallIcon color="primary" /> : <DonutSmallIcon />}
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary={
            dashboardFlag ?
              (<Typography className={classes.text}>
                Home
              </Typography>) : (<Typography>
                Home
              </Typography>)
          } color="primary" />
        </ListItem>
      </Link>
      <Link
        to="/sites"
        className={classes.textDecorationDisable}
        onClick={() => handleSelectedOption(2)}>
        <ListItem button>
          <ListItemIcon>
            {clientsFlag ? <PeopleIcon color="primary" /> : <PeopleIcon />}
          </ListItemIcon>
          <ListItemText primary={
            clientsFlag ?
              (<Typography className={classes.text}>
                Sites
              </Typography>) : (<Typography>
                Sites
              </Typography>)
          } />
        </ListItem>
      </Link>
      <Link
        to="/waste-transfer-notes"
        className={classes.textDecorationDisable}
        onClick={() => handleSelectedOption(3)}>
        <ListItem button>
          <ListItemIcon>
            {incomeReportFlag ? <LocalAtmIcon color="primary" /> : <LocalAtmIcon />}
          </ListItemIcon>
          <ListItemText primary={
            incomeReportFlag ?
              (<Typography className={classes.text}>
                Waste Transfer Notes
              </Typography>) : (<Typography>
                Waste Transfer Notes
              </Typography>)
          } />
        </ListItem>
      </Link>
      <Link
        to="/dispatch-imports"
        className={classes.textDecorationDisable}
        onClick={() => handleSelectedOption(4)}>
        <ListItem button>
          <ListItemIcon>
            {messagesFlag ? <ForumIcon color="primary" /> : <ForumIcon />}
          </ListItemIcon>
          <ListItemText primary={
            messagesFlag ?
              (<Typography className={classes.text}>
                Dispatches Imports
              </Typography>) : (<Typography>
                Dispatches Imports
              </Typography>)
          } />
        </ListItem>
      </Link>
      <Link
        to="/uploads"
        className={classes.textDecorationDisable}
        onClick={() => handleSelectedOption(5)}>
        <ListItem button>
          <ListItemIcon>
            {calendarFlag ? <DateRangeIcon color="primary" /> : <DateRangeIcon />}
          </ListItemIcon>
          <ListItemText primary={
            calendarFlag ?
              (<Typography className={classes.text}>
                Uploads
              </Typography>) : (<Typography>
                Uploads
              </Typography>)
          } />
        </ListItem>
      </Link>
    </div>
  );
};
