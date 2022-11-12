import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ justifyContent: 'center' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
          placeat distinctio aut inventore omnis molestias corporis? Hic illum
          architecto, nam quaerat animi repellendus earum ipsam sit in ullam
          nesciunt numquam? Neque animi totam ab in eius? Quam sint aut nulla
          nihil quae! Reprehenderit expedita beatae pariatur earum sapiente
          maxime molestiae, consequatur, tempora aliquam rem at architecto
          quidem? Aperiam, repellendus accusantium. Alias, illum. Rerum officia
          omnis in libero! Recusandae tenetur quod accusamus nobis. Voluptatibus
          soluta dolores dolor accusamus deleniti ipsa tempora excepturi
          numquam! Odit eius atque, non ratione repudiandae impedit laborum!
          Nostrum facilis velit, quisquam repellat perspiciatis consectetur quod
          sequi rem cum numquam minus, placeat expedita consequuntur recusandae
          laborum? Recusandae distinctio labore architecto dolorem autem,
          accusamus hic soluta blanditiis debitis quaerat? Facere, similique a.
          Asperiores, libero! Tempora a, impedit eos numquam expedita similique
          molestias deserunt iure nulla possimus voluptatum magni, sunt quo
          culpa soluta quis cum reiciendis officiis! Nam, libero corporis!
          Consequatur, quas officiis ullam, tempora magni quam vel maiores
          expedita facilis consectetur voluptatem! Optio quo, laudantium
          commodi, eaque doloribus, autem officia sequi dicta recusandae
          voluptatum ipsa hic corrupti quaerat est. Incidunt quisquam autem
          voluptas architecto quam? Laudantium voluptate repellendus ducimus
          similique numquam expedita facilis ad quod! Quae similique quibusdam
          eaque amet suscipit laborum, fugiat, nesciunt voluptas, accusamus
          obcaecati quidem facilis. Rerum veniam reprehenderit labore quaerat
          accusamus distinctio iure assumenda harum asperiores inventore porro,
          exercitationem nulla odio, delectus pariatur nesciunt dolores quam
          error voluptates nisi enim! Praesentium exercitationem aliquid soluta
          quaerat. Pariatur ipsam officia inventore ratione asperiores corporis
          consequatur necessitatibus quam tenetur, unde autem esse eveniet
          distinctio voluptas minima natus, incidunt repudiandae saepe dolores
          reprehenderit molestias illo cumque dolore. Consequuntur,
          perspiciatis. Voluptatibus ipsam nam repellat ad impedit ducimus a?
          Dolores, voluptatum aperiam? Ad culpa maiores maxime libero mollitia
          inventore nulla, quibusdam accusantium sint suscipit reprehenderit
          fugiat natus explicabo quis laborum eligendi?
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://avatars.githubusercontent.com/u/29417588?v=4"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default LandingPage;
