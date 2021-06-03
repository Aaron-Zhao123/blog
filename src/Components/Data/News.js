import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Whatshot from '@material-ui/icons/Whatshot';
import CastConnected from '@material-ui/icons/CastConnected';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
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
                <ListItem button component="a" href="https://icml.cc/">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Markpainting: Adversarial Machine Learning meets Inpainting is accepted to ICML 2021!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://www.euromlsys.eu/#accepted-papers">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Learned Low Precision Graph Neural Networks is accepted to EuroMLSys (EuroSys workshop) 2021!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://www.euromlsys.eu/#committees">
                    <ListItemIcon>
                        <CastConnected />
                    </ListItemIcon>
                    <ListItemText
                        primary="I am serving as a PC member for the first EuroMLSys workshop (co-located with EuroSys 2021), looking forward to hear existing talks from the speakers!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://deep-learning-graphs.bitbucket.io/dlg-aaai21/">
                    <ListItemIcon>
                        <EmojiEvents />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Probabilistic Dual Network Architecture Search on Graphs received the best student paper award at DLG-AAAI2021!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://github.com/mitre/advmlthreatmatrix/blob/master/pages/adversarial-ml-threat-matrix.md#adversarial-ml-threat-matrix">
                    <ListItemIcon>
                        <EmojiEvents />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our sponge examples have been added to the MITRE attack framework for AI security!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://machinelearning.apple.com/updates/introducing-apple-scholars-aiml">
                    <ListItemIcon>
                        <EmojiEvents />
                    </ListItemIcon>
                    <ListItemText
                        primary="I was awarded to be an Apple Scholar in AI/ML!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://www.schneier.com/blog/archives/2020/06/availability_at.html">
                    <ListItemIcon>
                        <CastConnected />
                    </ListItemIcon>
                    <ListItemText
                        primary="The Sponge Example paper is featured on Schneier's blog!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://www.theregister.com/2020/06/10/ai_sponge_attack/">
                    <ListItemIcon>
                        <CastConnected />
                    </ListItemIcon>
                    <ListItemText
                        primary="The Sponge Example paper is featured on The Register!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://arxiv.org/abs/2006.03463">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our preprint Sponge Examples: Energy-Latency Attacks on Neural Networks
                        is now on arxiv!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://arxiv.org/abs/2003.09676">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our preprint Probabilistic Dual Network Architecture Search on Graphs
                        is now on arxiv!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://arxiv.org/abs/2002.08740">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our preprint Towards Certifiable Adversarial Sample Detection
                        is now on arxiv!"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Pay Attention to Features, Transfer Learn Faster CNNs
                        is accepted to ICLR 2020!"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our paper Automatic Generation of Multi-precision Multi-arithmetic CNN Accelerators for FPGAs
                        is accepted to ICFPT 2019!"
                    />
                </ListItem>
                <ListItem button component="a" href="https://arxiv.org/abs/1909.02918">
                    <ListItemIcon>
                        <Whatshot />
                    </ListItemIcon>
                    <ListItemText
                        primary="Our preprint Blackbox Attacks on Reinforcement Learning Agents Using Approximated Temporal Information is now available on arxiv!"
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
