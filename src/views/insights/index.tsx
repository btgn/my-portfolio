import { Box, Card, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import ProjectInsights from './ProjectInsights';

const InsightsWrapper = styled(Box)(
  () => `
    overflow: auto;
    felx: 1;
    overflow-x: hidden;
    align-items: center;
  `,
);

const Insights = () => {
  return (
    <InsightsWrapper>
      <Helmet>
        <title> Portfolio </title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={2} alignItems="center">
          <Card sx={{ p: 10, mb: 10, borderRadius: 5 }}>
            <ProjectInsights />
          </Card>
        </Box>
      </Container>
    </InsightsWrapper>
  );
};

export default Insights;
