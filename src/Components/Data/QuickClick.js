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

const scholarUrl = 'https://scholar.google.com/citations?user=lOOmgEgAAAAJ&hl=en';
const githubUrl = 'https://github.com/Aaron-Zhao123/';
const linkdinUrl = 'https://www.linkedin.com/in/yiren-aaron-zhao-baa8b5116/';

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}
export default function QuickClick() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb" separator=" ">
        <Link color="inherit" href={scholarUrl}>
          <Print className={classes.icon} />
          Scholar
        </Link>
        <Link color="inherit" href={githubUrl}>
          <Code className={classes.icon} />
          Github
        </Link>
        <Link color="inherit" href={linkdinUrl}>
          <Contacts className={classes.icon} />
          LinkedIn
        </Link>

      </Breadcrumbs>
    </Paper>
  );
}
