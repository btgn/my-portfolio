import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { CSMainContent } from 'StyledComponents';

const UnderMaintenance = () => {
  return (
    <>
      <Helmet>
        <title>Status - Under Maintenance</title>
      </Helmet>
      <CSMainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                This site is currently down for maintenance
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                Apologize for any inconveniences caused
              </Typography>
            </Container>
            <img
              alt="Maintenance"
              height={250}
              src="/static/images/errors/maintenance.svg"
            />
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography component="span" variant="subtitle1">
                Phone:
              </Typography>
              <Typography
                component="span"
                variant="subtitle1"
                color="text.primary"
              >
                +1 323 718-1104
              </Typography>
            </Box>
            <Box>
              <Tooltip arrow placement="top" title="Github">
                <IconButton color="primary" onClick={() => window.open("https://www.github.com/btgn", "_blank")}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="Facebook">
                <IconButton color="primary" onClick={() => window.open("https://www.facebook.com/btgn93", "_blank")}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="Instagram">
                <IconButton color="primary" onClick={() => window.open("https://www.instagram.com/trilok_bakulapalli/", "_blank")}>
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </CSMainContent>
    </>
  );
};

export default UnderMaintenance;
