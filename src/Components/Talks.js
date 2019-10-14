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


function MyTalkList(){
  return mypaperdata.map(
    (talk) =>
      <ListItem>
        <ListItemText
          primary={talk.name}
          secondary={
            <div>
              <div>
                {talk.pub}
                {'    '}
                <Link href={talk.link}>
                  slides
                </Link>
              </div>
            </div>
          }
        />
      </ListItem>
  )
}

const TalkList = ({ styles }) =>
    <Fragment>
      <Box
        m={10}
      >
      <Paper
        style={styles.NewsPaper}
        m={10}
        >
        <Typography variant="h5" color="text" component="p" spacing="2">
          Talks
        </Typography>
        <List>
          <MyTalkList/>
        </List>
      </Paper>
      </Box>
    </Fragment>


class Talks extends Component {
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
          <TalkList styles={styles} />
        </Grid>
      </Grid>
    </Fragment>
  }
}


export default Talks
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
