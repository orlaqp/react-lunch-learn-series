import React from 'react';
import Drawer from '@material-ui/core/Drawer';

/* eslint-disable-next-line */
export interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  return (
    <Drawer
      anchor="left"
      open={false}
      // onClick={closeSidebar}
      // onClose={toggleDrawer(anchor, false)}
    >
      HI THERE
    </Drawer>
  );
};

export default Sidebar;
