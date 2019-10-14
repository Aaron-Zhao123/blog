import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from "./Menu"
import MyDetails from "./MyDetails"
import {styles, menu_styles} from "../Layouts"


class MainPage extends Component {
  render(){
        return <Fragment>
            <Grid
            container
            direction="row">
            {/* justify="center"
            alignItems="center"> */}
                <Grid item xs={4}>
                    <Menu styles={menu_styles}/>
                </Grid>
                <Grid item xs={6}>
                    <MyDetails styles={styles}/>
                </Grid>
            </Grid>
        </Fragment>
  }
}
export default MainPage
