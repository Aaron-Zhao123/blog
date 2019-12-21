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

const MenuButton = withStyles({
  root: {
    background: 'white',
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

function PaperNavigationAdv() {
  const classes = useStyles();

  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="Adversarial Attacks" to="/notes/papers/adversarial_attack" />} />
      <BottomNavigationAction component={Link} label="Robust Networks" to="/notes/papers/robust_networks" />} />
      <BottomNavigationAction component={Link} label="Certified Defense" to="/notes/papers/certified_defense" />} />
    </BottomNavigation>
  );
}

function PaperNavigationEfficient() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="Compression" to="/notes/papers/compression"/>} />
      <BottomNavigationAction component={Link} label="AutoML" to="/notes/papers/automl"/>} />
      <BottomNavigationAction component={Link} label="Efficient Training" to="/notes/papers/efficient_train"/>} />
      <BottomNavigationAction component={Link} label="Transfer/Zero Shot" to="/notes/papers/automl"/>} />
    </BottomNavigation>
  );
}

function PaperNavigationHardware() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="FPGAs" to="/notes/papers/fpgas" />} />
      <BottomNavigationAction component={Link} label="ASICs" to="/notes/papers/asic" />} />
      <BottomNavigationAction component={Link} label="Distributed Systems" to="/notes/papers/asic" />} />
    </BottomNavigation>
  );
}

function PaperNavigationOthers() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="RL" to="/notes/papers/rl"/>} />
      <BottomNavigationAction component={Link} label="Graph Networks" to="/notes/papers/gnn"/>} />
    </BottomNavigation>
  );
}

function Books() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="ML" to="/notes/papers/rl"/>} />
      <BottomNavigationAction component={Link} label="Convex Optimization" to="/notes/papers/graph"/>} />
    </BottomNavigation>
  );
}

function Talks() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="Sysml2019" to="/notes/papers/rl"/>} />
      <BottomNavigationAction component={Link} label="ICLR2019" to="/notes/papers/graph"/>} />
      <BottomNavigationAction component={Link} label="Department" to="/notes/papers/graph"/>} />
      <BottomNavigationAction component={Link} label="Others" to="/notes/papers/graph"/>} />
    </BottomNavigation>
  );
}

function PLs() {
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} label="Python" to="/notes/papers/rl"/>} />
      <BottomNavigationAction component={Link} label="JS" to="/notes/papers/graph"/>} />
      <BottomNavigationAction component={Link} label="Verilog" to="/notes/papers/graph"/>} />
      <BottomNavigationAction component={Link} label="C++" to="/notes/papers/graph"/>} />
    </BottomNavigation>
  );
}
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
          <Box m={10}>
            <Paper style={styles.NewsPaper} m={10}>
              <Typography variant="h5" color="text" component="p" spacing="2">
                Warning
              </Typography>
              <Typography variant="h7">
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
                Notes on papers I've read, mainly focusing
                on adversarial machine learning, graph neural networks,
                FPGA/ASIC neural network accelerators and so on.
              </Typography>

              <PaperNavigationAdv/>
              <PaperNavigationEfficient/>
              <PaperNavigationHardware/>
              <PaperNavigationOthers/>

            </Paper>

            <Paper style={styles.NewsPaper} m={10}>
              <Typography variant="h5" color="text" component="p" spacing="2">
                Talk Notes
              </Typography>
              <Typography component="h7">
                I try my best to keep notes for the talks that
                I've attended.
                This includes all the conferences talks I've been
                and also some casual seminar talks.
              </Typography>
              <Talks/>

            </Paper>

            <Paper style={styles.NewsPaper} m={10}>
              <Typography variant="h5" color="text" component="p" spacing="2">
                Book Notes
              </Typography>
              <Typography component="h7">
                I read a range of books, the notes are only for CS related
                matters.
                Of course, my general reading is boarder than this.
              </Typography>
              <Books/>
            </Paper>

            <Paper style={styles.NewsPaper} m={10}>
              <Typography variant="h5" color="text" component="p" spacing="2">
                Coding Notes
              </Typography>
              <Typography component="h7">
                Coding is hacking, so basically the hack tricks
                I've learnt from places.
              </Typography>
              <PLs/>
            </Paper>
          </Box>
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
