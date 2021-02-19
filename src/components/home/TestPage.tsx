import React, { Component } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import MainBody from '../main/MainBody';
import Sidebar from '../sidebar/Sidebar';

class TestPage extends Component {

  render() {
    return (
      <Main>

        <Header />

        <Sidebar />

        <MainBody>
          scan ...
      </MainBody>

      </Main>
    );
  }
}

export default TestPage