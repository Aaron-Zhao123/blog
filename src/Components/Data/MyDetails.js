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


const robertUrl = 'https://www.cl.cam.ac.uk/~rdm34/';
const georgeUrl = 'http://cas.ee.ic.ac.uk/people/gac1/';
const papaUrl = 'https://www.imperial.ac.uk/people/c.papavas';

export default ({styles}) =>
    <Fragment>
        <Paper style={styles.Paper}>
            <Typography variant="h5" color="text" component="p" spacing="2">
                About Me
            </Typography>
            <img src={require('../../images/aaron_zhao.png')} hspace="0" vspace="10" width="200" height="200" />
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Hello, thanks for visiting my personal wiki.
                My name is Yiren (Aaron) Zhao.
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                I am currently a PhD student
                at the Computer Lab of University of Cambridge,
                supervised by <Link href={robertUrl}>
                Dr. Robert Mullins
                </Link>.
                I finished my MPhil degree from
                Cambridge and was
                supervised by Dr. Robert Mullins as well.
                Prior to that,
                I obtained my Electrical and Electronic Engineering
                BEng degree
                from the Imperial College London with my final two
                years supervised by <Link href={georgeUrl}>
                Prof. George Constantinides
                </Link>.
                During my BEng studies, I was tutored by <Link href={papaUrl}>
                Dr. Papavassiliou
                </Link>.
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                I review for a number of hardware, system and machine learning conferences, including ICLR, ICML, NeurIPS, CVPR, etc.
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                My current research focuses on efficient machine learning, secure machine learning and machine learning hardware designs.
            </Typography>
        </Paper>
        <Paper style={styles.NewsPaper}>
            <News/>
        </Paper>
    </Fragment>
