import React, {Component, Fragment} from 'react';
import {styles, menu_styles} from "./Layouts"

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ButtonAppBar from "./Data/Menubar"
import Container from '@material-ui/core/Container';
import Menu from "./Data/Menu"

const ProjectList = ({ styles}) =>
    <Fragment>

      <Container maxWidth="md">
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            style = {{ height: 0, paddingTop: '26%'}}
            image={require ("../images/mayo.jpeg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mayo
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Mayo is a top-level Tensorflow wrapper for fast prototyping
              hardware efficient neural networks, supporting a vast
              range of network compression algorithms and also
              arbitrary chaining of them on different network parts.
              Our Focused Quantisation and Feature Boosting and Suppression
              are both developed using Mayo.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Code
        </Button>
          <Button size="small" color="primary">
            Paper
        </Button>
        </CardActions>
      </Card>
      </Container>

      <Container maxWidth="md">      
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            style = {{ height: 0, paddingTop: '26%'}}
            image={require ("../images/tomato.jpeg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tomato
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tomato is an automatic generation flow that translates
              CNNs defined in Python to register transistor level (RTL)
              designs on FPGAs.
              Tomato supports generation of multiple acceleration cores,
              each focusing on a particular layer of the neural network.
              Each of these cores can utilise different arithmetics
              at various precisions.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Code will be released soon
        </Button>
          <Button size="small" color="primary">
            Paper
        </Button>
        </CardActions>
      </Card>
      </Container>

      <Container maxWidth="md">      
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            style = {{ height: 0, paddingTop: '26%'}}
            image={require ("../images/sitatapatra.jpeg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sitatapatra
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sitatapatra is a behaviour level
              detection against adversarial images on neural networks.
              The final aim of Sitatapatra is to develop a scalable way of
              "keying" neural networks with minimal computation and memory
              costs.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Code
        </Button>
          <Button size="small" color="primary">
            Paper
        </Button>
        </CardActions>
      </Card>
      </Container>

    </Fragment>


class Project extends Component {

  render() {
    return <Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        {/* <Grid item xs={4}>
          <Menu styles={menu_styles} />
        </Grid> */}
        <Container maxWidth="md">
        <Grid>
          <Typography variant="h2">Aaron's Wiki</Typography>
          <ButtonAppBar />
          <ProjectList styles={styles} />
        </Grid>
        </Container>
      </Grid>
    </Fragment>
  }
}

export default Project
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
