import React from 'react';
import Drawer from '@material-ui/core/Drawer';

/* eslint-disable-next-line */
export interface SidebarProps {
    sidebarOpen: boolean;
    closeSidebar: () => void;
}

export const Sidebar = ({ sidebarOpen, closeSidebar }: SidebarProps) => {
  return (
    <Drawer
      anchor="left"
      open={sidebarOpen}
      onClick={closeSidebar}
      // onClose={toggleDrawer(anchor, false)}
    >
      HI THERE
    </Drawer>
  );
};

export default Sidebar;
