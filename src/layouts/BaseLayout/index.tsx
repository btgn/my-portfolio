import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';
import { ChildrenProps } from 'types/types';

const BaseLayout: FC<ChildrenProps> = ({ children }) => {
  return <Box sx={{ flex: 1, height: '100%' }}>{children || <Outlet />}</Box>;
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
