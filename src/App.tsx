import ThemeProvider from 'assets/theme/ThemeProvider';
import router from 'Router';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, Typography } from '@mui/material';

const App = () => {
  const content = useRoutes(router);
  return (
    <ThemeProvider>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
};

export default App;
