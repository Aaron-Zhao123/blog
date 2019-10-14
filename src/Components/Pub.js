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

var mypaperdata = require('../data/my_papers/paper.json')

function AuthorList(props) {
  const authors = props.authors
  return authors.join(", ")
}

function MyPaperList(){
  return mypaperdata.map(
    (paper) =>
      <ListItem>
        <ListItemText
          primary={paper.name}
          secondary={
            <div>
              <div><AuthorList authors={paper.authors}/></div>
              <div>
                {paper.pub}
                {'    '}
                <Link href={paper.link}>
                  pdf
                </Link>
              </div>
            </div>
          }
        />
      </ListItem>
  )
}

const PublicationList = ({ styles }) =>
    <Fragment>
      <Box
        m={10}
      >
      <Paper
        style={styles.NewsPaper}
        m={10}
        >
        <Typography variant="h5" color="text" component="p" spacing="2">
          List of Publications
        </Typography>
        <Typography component="p">
        * indicates equal contribution.
        </Typography>
        <List>
          <MyPaperList/>
        </List>
      </Paper>
      </Box>
    </Fragment>


class Pub extends Component {
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
          <PublicationList styles={styles} />
        </Grid>
      </Grid>
    </Fragment>
  }
}


export default Pub
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
