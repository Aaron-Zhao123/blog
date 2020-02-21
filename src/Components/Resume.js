import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CVpdf from '../data/cv.pdf';

import Menu from "./Data/Menu"
import {styles, menu_styles} from "./Layouts"



const EducationList = ({ styles }) =>
    <Fragment>
      <Paper
        style={styles.NewsPaper}
        >
        <Typography variant="h5" color="text" component="p" spacing="2">
            Education
        </Typography>
        <List>
            <ListItem>
                <ListItemText
                    primary="University of Cambridge"
                    secondary="PhD in Computer Science, Expected Grad 2020"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="University of Cambridge"
                    secondary="Mphil in Advanced Computer Science, Grad. 2017"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Imperial College London"
                    secondary="BEng in Electrical and Electronic Engineering, Grad. 2016"
                />
            </ListItem>
        </List>
      </Paper>
    </Fragment>


const ExperienceList = ({ styles }) =>
    <Fragment>
      <Paper
        style={styles.NewsPaper}
        >
        <Typography variant="h5" color="text" component="p" spacing="2">
            Work Experience
        </Typography>
        <List>
            <ListItem>
                <ListItemText
                    primary="Microsoft Research New England, Part-time Contractor"
                    secondary="Nov 2019 - Now, Supervised by Dr. Nicolo Fusi"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Microsoft Research New England, Research Intern"
                    secondary="June 2019 - Oct 2019, Supervised by Dr. Nicolo Fusi"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Microsoft Research Redmond, Research Intern"
                    secondary="June 2018 - Oct 2018, Supervised by Dr. Daniel Lo and Dr. Eric Chung"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Microsoft Research Cambridge, Research Intern"
                    secondary="June 2017 - Oct 2017, Supervised by Dr. Hitesh Ballani"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Ocado Technology 10x, ML Research Intern"
                    secondary="June 2016 - Oct 2016"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Tangi0, ML Consultant"
                    secondary="June 2016 - Sep 2016"
                />
            </ListItem>
        </List>
      </Paper>
    </Fragment>


class Resume extends Component {
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
                <Grid>
                    <EducationList styles={styles} />
                </Grid>
                <Grid>
                    <ExperienceList styles={styles} />
                </Grid>
                <Grid>
                    <Link href={CVpdf} color="primary" variant="body3"> Download CV in PDF </Link>
                    {/* <a href={CVpdf} target="_blank">Download CV in PDF</a> */}
                </Grid>
            </Box>
        </Grid>

      </Grid>
    </Fragment>
  }
}


export default Resume
