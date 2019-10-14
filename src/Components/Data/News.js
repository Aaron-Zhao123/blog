import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Whatshot from '@material-ui/icons/Whatshot';
import Flight from '@material-ui/icons/Flight';
import Tv from '@material-ui/icons/Tv';


const focused = 'https://www.cl.cam.ac.uk/~rdm34/';

export default function InteractiveList() {
    return (
        <Fragment>

        <Typography variant="h6">
            News
        </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Automatic Generation of Multi-precision Multi-arithmetic CNN Accelerators for FPGA
                        is accepted to FPT 2019!"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our prerprint Blackbox Attacks on Reinforcement Learning Agents Using Approximated Temporal Information is now available on arxiv!"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Focused Quantization for Sparse CNNs is accepted to NeurIPS 2019!"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Flight />
                    </ListItemIcon>
                    <ListItemText
                        primary="Spending my summer at Microsoft Research New England with the AutoML research group."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Tv />
                    </ListItemIcon>
                    <ListItemText
                        primary="Gave a talk to the NLP Seminar series in the Cambridge Computer Lab."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Tv />
                    </ListItemIcon>
                    <ListItemText
                        primary="Gave a talk about To compress or not to compress at SysML 2019."
                    />
                </ListItem>
        </List>
        </Fragment>
    );
}
