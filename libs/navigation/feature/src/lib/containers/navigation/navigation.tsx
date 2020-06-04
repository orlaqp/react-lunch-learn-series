import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { P360State } from '@p360/store';
import { connect } from 'react-redux';

const mapState = (state: P360State) => ({
    sidebarOpen: state.navigation.sidebarOpen
});

const connector = connect(mapState);


/* eslint-disable-next-line */
export interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Navigation;
