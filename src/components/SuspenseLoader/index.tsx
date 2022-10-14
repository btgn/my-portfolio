import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SuspenseLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Box>
      {loading && <CircularProgress size={64} disableShrink thickness={3} />}
    </Box>
  );
};

export default SuspenseLoader;
