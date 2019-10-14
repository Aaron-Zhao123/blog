import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {styles, menu_styles} from "./Layouts"
import Menu from "./Data/Menu"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { tsParameterProperty } from '@babel/types';
import Link from '@material-ui/core/Link';

var mypaperdata = require('../data/my_talks/talk.json')


const NoteList = ({ styles }) =>
    <Fragment>
      <Box
        m={10}
      >
      <Paper
        style={styles.NewsPaper}
        m={10}
        >
        <Typography color="text" component="p" spacing="1">
          This is a collection of my random notes on
          things I've seen.
          Mostly serving as reminders for myself.
        </Typography>
      </Paper>
      </Box>
    </Fragment>


class Notes extends Component {
  render(){
    return <Fragment>
      <Grid
        container
        direction="row">
        {/* justify="center"
                alignItems="center"> */}
        <Grid item xs={4}>
          <Menu styles={menu_styles} />
        </Grid>
        <Grid item xs={6}>
          <NoteList styles={styles} />
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
