import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import QuickClick from './QuickClick';
// import Pub from '../Pub'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
// import { ThemeProvider } from '@material-ui/styles';
// import { ThemeProvider } from 'styled-components'


const menu_theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        spacing: 10,
        margin: 20,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const MenuButton = withStyles({
    root: {
        background: 'white',
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        // boxShadow: '0 3px 5px 2px blueGrey[100]',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function MenuButtons() {
    // <Paper style={styles.Paper}>
    const classes = useStyles();
    return (
        // <ThemeProvider theme={menu_theme}>
        <div>
        <Container maxWidth="lg">
            <Grid
                container
                className={classes.root} spacing={5}
                direction="column"
                justify="center"
                alignItems="center"
                >
                <Grid item xs={12}>
                    <Typography variant="h2">Aaron's Wiki</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/">
                        <MenuButton
                        variant="contained"
                        href="#index"
                        className={classes.button}
                        >
                            Main Page
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/resume">
                        <MenuButton
                            variant="contained"
                            className={classes.button}
                        >
                        Resume
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/pub">
                        <MenuButton
                            variant="contained"
                            className={classes.button}
                        >
                        Publication
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/talks">
                        <MenuButton
                            variant="contained"
                            className={classes.button}
                        >
                        Talks
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/projects">
                        <MenuButton
                        variant="contained"
                        className={classes.button}
                        >
                            Projects
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/notes">
                        <MenuButton
                            variant="contained"
                            className={classes.button}
                        >
                            Notes
                        </MenuButton>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <QuickClick/>
                </Grid>
            </Grid>
        </Container>
        </div>
        // </ThemeProvider>
    )
}
    // </Paper>
