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
import ButtonAppBar from "./Data/Menubar"
import Container from '@material-ui/core/Container';

var paper2021 = require('../data/my_papers/paper2021.json')
var paper2020 = require('../data/my_papers/paper2020.json')
var paper2019 = require('../data/my_papers/paper2019.json')
var paper2018 = require('../data/my_papers/paper2018.json')

function AuthorList(props) {
  const authors = props.authors
  return authors.join(", ")
}

function PaperList2018() {
  return paper2018.map(
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
function PaperList2019() {
  return paper2019.map(
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

function PaperList2020() {
  return paper2020.map(
    (paper) =>
      <ListItem>
        <ListItemText
          primary={paper.name}
          secondary={
            <div>
              <div><AuthorList authors={paper.authors} /></div>
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


function PaperList2021() {
  return paper2021.map(
    (paper) =>
      <ListItem>
        <ListItemText
          primary={paper.name}
          secondary={
            <div>
              <div><AuthorList authors={paper.authors} /></div>
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
      <Paper style={styles.NewsPaper} m={10}>
        <Typography variant="h5" color="text" component="p" spacing="2">
          List of Publications
        </Typography>
        <Typography component="h7">
        * indicates equal contribution.
        </Typography>
        <Typography variant="h6" color="text" component="p" spacing="2">
        2021
        </Typography>
        <List>
          <PaperList2021/>
        </List>
        <Typography variant="h6" color="text" component="p" spacing="2">
        2020
        </Typography>
        <List>
          <PaperList2020/>
        </List>
        <Typography variant="h6" color="text" component="p" spacing="2">
        2019
        </Typography>
        <List>
          <PaperList2019/>
        </List>
      </Paper>
      <Paper style={styles.NewsPaper} m={10}>
        <Typography variant="h6" color="text" component="p" spacing="2">
        2018 and Earlier
        </Typography>
        <List>
          <PaperList2018/>
        </List>
      </Paper>
    </Fragment>


class Pub extends Component {
  render(){
    return <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Container maxWidth="md">
        <Grid>
          <Typography variant="h2">Aaron's Wiki</Typography>
          <ButtonAppBar />
          <PublicationList styles={styles} />
        </Grid>
        </Container>
      </Grid>
    </Fragment>
  }
}


export default Pub
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
