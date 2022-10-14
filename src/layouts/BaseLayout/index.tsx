import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { BaseLayoutProps } from './types';
import PropTypes from 'prop-types';

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <Box sx={{ flex: 1, height: '100%' }}>{children || <Outlet />}</Box>;
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
