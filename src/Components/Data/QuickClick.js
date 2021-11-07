import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
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
    <React.Fragment>
      <Link variant="outlined" href={scholarUrl}>
        <Button variant="outlined">Scholar</Button>
      </Link>
      <Link variant="outlined" href={githubUrl}>
        {/* <Code className={classes.icon} /> */}
        <Button variant="outlined">Github</Button>
      </Link>
      <Link variant="outlined" href={linkdinUrl}>
        {/* <Contacts className={classes.icon} /> */}
        <Button variant="outlined">LinkedIn</Button>
      </Link>
    </React.Fragment>
  );
}
