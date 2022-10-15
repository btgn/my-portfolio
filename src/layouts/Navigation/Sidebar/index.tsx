import {useTheme} from '@mui/material';
import {SidebarContext} from 'contexts/SidebarContext';
import React, {useContext} from 'react';

const Sidebar = () => {
  const {sidebarToggle, toggleSidebar} = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  console.log('this is the theme: ', theme);

  return <div>Sidebar</div>;
};

export default Sidebar;
