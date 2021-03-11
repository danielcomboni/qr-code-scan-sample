import { Component } from 'react';
import ErrorBoundary from '../gotchas/ErrorBoundary';
import Header from '../header/Header';
import Main from '../main/Main';
import MainBody from '../main/MainBody';
import Sidebar from '../sidebar/Sidebar';
import TableTest from '../table/TableTest';

class HomePage extends Component {

  render() {

    return (

      <Main>

        <Header />

        <Sidebar />

        <MainBody>

          <h3>New Applications</h3>

          <ErrorBoundary >

            <TableTest />

          </ErrorBoundary>

        </MainBody>

      </Main>
    );

  }
}

export default HomePage