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
const metalarningUrl = 'https://lilianweng.github.io/lil-log/2018/11/30/meta-learning.html';

export default ({styles}) =>
    <Fragment>
        <Paper style={styles.Paper}>
            <Typography variant="h4" color="text" component="p" spacing="2">
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
                Dr. Papavassiliou.
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
        <Paper style={styles.NewsPaper}>
            <Typography variant="h5" color="text" component="p" spacing="2">
                Part II/III MPhil and Summer students Project suggestions
            </Typography>
            <Typography variant="h6" color="text" component="p" spacing="2">
                1. Hardware-aware Meta-Learning [Vacant]
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Meta-learning focuses on improving the ability of learning, Lilian Weng wrote a great overview article for  <Link href={metalarningUrl}>it</Link>.
                This project will focus on developing hardware-aware meta-learning methods to enable few-shots learning with different hardware specialities.
            </Typography>
            <Typography variant="h6" color="text" component="p" spacing="2">
                2. Accelerating GNNs using FPGAs [Vacant]
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Graph neural networks are an interesting workload for custom computing, it has an irregular dataflow and might contain high sparsities.
                This project will focus on developing custom accelerators for GNNs on FPGA devices, prior experience on FPGAs or great programming experience on C++ will be a plus. I might co-supervise this project with other hardware researchers.
            </Typography>
            <Typography variant="h6" color="text" component="p" spacing="2">
                3. Tiny NAS [Vacant]
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Neural Network Architecture Search (NAS) is a technique to automatically search for network architectures given a datasets.
                This project will focus on looking at searching architectures that can run as fast as possible on small hardware platforms such as Raspberry Pis.
            </Typography>
            <Typography variant="h6" color="text" component="p" spacing="2">
                4. Low-precision language models [Vacant]
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Language models today are getting larger (GPT2 and GPT3) and having cross-domain applications (Vision transformers). This project will focus on applying some prior techniques of reducing computation costs of DNNs into large language models such as BERT. I might co-supervise this project with other NLP researchers.
            </Typography>
            <Typography variant="h6" color="text" component="p" spacing="2">
                4. Fast uncertainty measurements [Vacant]
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                It is surprising (or maybe not) that Deep Neural Networks are good at being over-confident on their predictions. Existing research has looked at developing methods that have uncertainty measurements (eg. model ensembles or bayesian neural networks). Most of these existing methods are expensive to compute, this project will investigate a further trade-off between the computation cost and the ability to provide uncertainty.
            </Typography>
        </Paper>
        <Paper style={styles.NewsPaper}>
            <Typography variant="h5" color="text" component="p" spacing="2">
                Contact
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Email: yiren.zhao@cl.cam.ac.uk
            </Typography>
            <Typography variant="body" color="textSecondary" component="p" spacing="2">
                Address: Computer Laboratory, University of Cambridge, 15 JJ Thomson Avenue, Cambridge CB3 0FD, United Kingdom
            </Typography>
        </Paper>
    </Fragment>
