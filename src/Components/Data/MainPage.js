import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from "./Menu"
import MyDetails from "./MyDetails"
import ButtonAppBar from "./Menubar"
import Typography from '@material-ui/core/Typography';
import {styles, menu_styles} from "../Layouts"
import Container from '@material-ui/core/Container';

class MainPage extends Component {
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
                    <ButtonAppBar/>
                    <MyDetails styles={styles}/>
                </Grid>
                </Container>
            </Grid>
        </Fragment>
  }
}
export default MainPage
