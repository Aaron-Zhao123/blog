import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {styles, menu_styles} from "../Layouts"
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';



const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(
  require.context(
    '../../data/notes/papers/robust_networks', false, /\.md$/))
  .sort()
  .reverse();

class RobustNetworks extends Component {
  state = {
    posts: [],
  }

  async componentWillMount() {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render(){
    const { posts } = this.state;
    return <Fragment>
      <Grid
        container
        direction="row">
        {/* justify="center"
                alignItems="center"> */}
        <Grid item xs={4}>
          {/* <Menu styles={menu_styles} /> */}
        </Grid>

        <Grid item xs={6}>
          <Box m={10}>
          <Paper
            style={styles.NewsPaper}
            m={10}>
            <div className={`container ${styles.posts}`}>
              {
              posts.map((post, idx) => (
                  <div className="card" key={idx}>
                  <div className="card-content">
                  <div className="content">
                    <ReactMarkdown source={post} />
                  </div>
                </div>
              </div>
              ))}
            </div>
          </Paper>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  }
}

export default RobustNetworks
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
