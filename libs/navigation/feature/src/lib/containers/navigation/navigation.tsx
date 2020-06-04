import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { P360State } from '@p360/store';
import { connect } from 'react-redux';
import { navigationSlice } from '@p360/navigation/data-access';

const mapState = (state: P360State) => ({
    sidebarOpen: state.navigation.sidebarOpen
});

const mapDispatch = (dispatch) => ({
    openSidebar: () => dispatch(navigationSlice.actions.openSidebar()),
    closeSidebar: () => dispatch(navigationSlice.actions.closeSidebar())
})

/* eslint-disable-next-line */
export interface NavigationProps {
    sidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

const Nav = ({ sidebarOpen, openSidebar, closeSidebar }: NavigationProps) => {
  return (
    <div>
      <Header openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export const Navigation = connect(mapState, mapDispatch)(Nav);
