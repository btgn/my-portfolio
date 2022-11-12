import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
  font-size: ${theme.typography.pxToRem(50)}
`,
);

const TypographyH4 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`,
);

const Avatar = styled(Box)(
  ({ theme }) => `
  width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`,
);

const ProjectInsights = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2, pb: 4 }} variant="h1">
            Trilok Bakulapalli's Portfolio
          </TypographyH1>
          <TypographyH4
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            A Portfolio built with multi-browser compatible and powerful
            Material UI components
          </TypographyH4>
          <Button
            component={RouterLink}
            to="/portfolio/aboutme"
            size="large"
            variant="contained"
          >
            View Portfolio
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <Avatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </Avatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by MUI (Material-UI)</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A simple and customizable component library to build faster,
                  beautiful, and accessible React apps.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Avatar>
                <img
                  src="/static/images/logo/typescript.svg"
                  alt="Typescript"
                />
              </Avatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with Typescript</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  React + Typescript + Redux + Saga
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectInsights;
