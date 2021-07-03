import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {styles, menu_styles} from "../Layouts"
import Button from '@material-ui/core/Button';
import Menu from "../Data/Menu"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { tsParameterProperty } from '@babel/types';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import marked from "marked";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ButtonAppBar from "../Data/Menubar"

const MenuButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    height: 24,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px blueGrey[100]',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const automlUrl = 'https://github.com/Aaron-Zhao123/paper-reading-list/tree/master/automl';
const mlsecurityUrl = 'https://github.com/Aaron-Zhao123/paper-reading-list/tree/master/ml_security';
const mlcompressionUrl = 'https://github.com/Aaron-Zhao123/paper-reading-list/tree/master/ml_compression';
const codingUrl = 'https://github.com/Aaron-Zhao123/Learn';
const conferencesUrl = 'https://github.com/Aaron-Zhao123/paper-reading-list/tree/master/conferences';

function PaperNavigation() {
  const classes = useStyles();
  return (
    <Grid container xs={24}>
      <Grid item xs={4}>
        <MenuButton
          variant="contained"
          href={automlUrl}
          className={classes.button}
        >
        AutoML
        </MenuButton>
      </Grid>
      <Grid item xs={4}>
        <MenuButton
          variant="contained"
          href={mlsecurityUrl}
          className={classes.button}
        >
          ML security 
        </MenuButton>
      </Grid>
      <Grid item xs={4}>
        <MenuButton
          variant="contained"
          href={mlcompressionUrl}
          className={classes.button}
        >
          ML Compression 
        </MenuButton>
      </Grid>

    </Grid>
  )
}

class Notes extends Component {
  render(){
    return <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        {/* <Grid item xs={4}>
          <Menu styles={menu_styles} />
        </Grid>
 */}
        <Grid item xs={6}>
          <Typography variant="h2">Aaron's Wiki</Typography>
          <ButtonAppBar />
          <Paper style={styles.NewsPaper} m={10}>
            <Typography variant="h5" color="text" component="p" spacing="2">
              Warning
            </Typography>
            <Typography variant="h7" spacing="2">
              This is a collection of my random notes.
              Mostly serving as reminders for myself, the writeup is
              therefore casual and subjective.
            </Typography>
          </Paper>
          <Paper style={styles.NewsPaper} m={10}>
            <Typography variant="h5" color="text" component="p" spacing="2">
              Paper Notes
            </Typography>
            <Typography>
              Notes on papers I've read, hosted on github in markdown formats.
            </Typography>

            <PaperNavigation/>
          </Paper>

          <Paper style={styles.NewsPaper} m={10}>
            <Typography variant="h5" color="text" component="p" spacing="2">
              Talk Notes
            </Typography>
            <Typography component="h7">
              I try my best to keep notes for the conferences that
              I've attended.
              This includes all the conferences talks I've been
              and also some casual seminar talks.
            </Typography>
            <Grid item xs={24}>
              <MenuButton
                variant="contained"
                href={conferencesUrl}
              >
                Conferences notes
              </MenuButton>
            </Grid>
          </Paper>

          <Paper style={styles.NewsPaper} m={10}>
            <Typography variant="h5" color="text" component="p" spacing="2">
              Coding Notes
            </Typography>
            <Typography component="h7">
              Coding is hacking, so basically the hack tricks
              I've learnt from places. This is hosted in a private repo.
            </Typography>
            <Grid item xs={24}>
              <MenuButton
                variant="contained"
                href={codingUrl}
              >
                Coding notes
              </MenuButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  }
}


export default Notes
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
