import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layouts"
import {MainPage} from "./Data"
import { Link } from 'react-router-dom';

// const theme = {
//   spacing: 4,
//   palette: {
//     primary: '#007bff',
//   },
// };

class App extends Component {
  render(){
    return <Fragment>
      <Header/>
      <MainPage/>
      {/* <li>
        <Link to={/pub}></Link>
      </li> */}
      <Footer/>
    </Fragment>
  }
}


export default App
// export default props =>
//   <div>
//     <h1>Hi</h1>
//   </div>
