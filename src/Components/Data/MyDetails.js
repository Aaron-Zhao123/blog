import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';



import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import News from "./News"

import { View, Image} from 'react';


const dudUrl = 'https://www.cl.cam.ac.uk/~rdm34/';

export default ({styles}) =>
    <Fragment>
        <Grid container
            direction="column"
            // justify="center"
            alignItems="center"
            spacing={0}
        >
            <Grid>
                <Paper style={styles.Paper}>
                    <Typography variant="h5" color="text" component="p" spacing="2">
                        About Me
                    </Typography>
                    <img src={require('../../images/aaron_zhao.png')} hspace="0" vspace="10" width="200" height="200" />
                    <Typography variant="body" color="textSecondary" component="p" spacing="2">
                        Hello, thanks for visiting my personal wiki.
                        My name is Aaron Zhao.
                        I am currently a Phd student, suprversided by <Link href={dudUrl}>
                        Dr. Robert Mullins
                        </Link>
                        , at the Computer Lab of University of Cambridge.
                    </Typography>
                    <Typography variant="body" color="textSecondary" component="p">
                        My research focuses on efficient machine learning, secure machine learning and machine learning hardware designs.
                    </Typography>
                </Paper>
            </Grid>
            <Grid>
                <Paper style={styles.NewsPaper}>
                    <News/>
                </Paper>
            </Grid>
        </Grid>
    </Fragment>
