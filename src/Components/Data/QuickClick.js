import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Contacts from '@material-ui/icons/Contacts';
import Code from '@material-ui/icons/Code';
import Print from '@material-ui/icons/Print';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}
export default function QuickClick() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb" separator=" ">
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
          <Print className={classes.icon} />
          Scholar
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <Code className={classes.icon} />
          Github
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <Contacts className={classes.icon} />
          LinkedIn
        </Link>

      </Breadcrumbs>
    </Paper>
  );
}
