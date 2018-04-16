import React, { Component } from 'react';

import Layout, { Header, Content, SideBar } from './components/Layouts'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <SideBar/>
        <Content/>
      </Layout>
    );
  }
}

export default App;
