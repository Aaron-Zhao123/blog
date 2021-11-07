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
import ButtonAppBar from "./Data/Menubar"
import Container from '@material-ui/core/Container';



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
                    secondary="PhD in Computer Science, Expected Grad late 2020 or early 2021"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="University of Cambridge"
                    secondary="MPhil in Advanced Computer Science, Grad. 2017"
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
                    primary="St John's College, University of Cambridge, Research Fellow"
                    secondary="Oct 2021 - Now"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Microsoft Research New England, Part-time Contractor"
                    secondary="Nov 2019 - Mar 2020, Supervised by Dr. Nicolo Fusi"
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

const AwardsList = ({ styles }) =>
    <Fragment>
        <Paper
            style={styles.NewsPaper}
        >
            <Typography variant="h5" color="text" component="p" spacing="2">
                Selected Awards
        </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Junior Research Fellowship at St John's College University of Cambridge"
                        secondary="Receive support from St John's College for my research for three years."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Apple Fellowship"
                        secondary="Receive support from Apple for my research and academic travel for two years. (2020)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="EPSRC International Doctoral Studentship joint University of Cambridge Computer Laboratory Qualcomm Premium Scholarship"
                        secondary="Fully funded phd scholarship for 3.5 years. (2017)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Willis Jackson Medal and Prize"
                        secondary="For excellence in undergraduate academic performance. (2016)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Dean's List"
                        secondary="For top students in the department. (2016)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Faculty of Engineering UROP Award"
                        secondary="For students with excellence in research projects. (2015)"
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
        direction="row"
        justify="center"
        alignItems="center">
            <Container maxWidth="md">
                <Grid>
                <Typography variant="h2">Aaron's Wiki</Typography>
                <ButtonAppBar />
                </Grid>
            </Container>
            <Container maxWidth="md">
                <EducationList styles={styles} />
                <AwardsList styles={styles} />
                <ExperienceList styles={styles} />
                <Link href={CVpdf} color="primary" variant="body3"> Download CV in PDF </Link>
                {/* <a href={CVpdf} target="_blank">Download CV in PDF</a> */}
            </Container>

      </Grid>
    </Fragment>
  }
}


export default Resume
