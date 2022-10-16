import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from './styles';

const NamePlate = () => {
  return (
    <Link to="/" style={styles.link}>
      <Typography variant="h3" sx={styles.title}>
        BTGN
      </Typography>
    </Link>
  );
};

export default NamePlate;
