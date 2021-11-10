import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  IconButton
} from '@material-ui/core';
import { ArrowBack, Delete } from '@material-ui/icons';
import Colors from 'src/utils/colors';

const IssueDetailToolbar = (props) => (
  <Box {...props}>
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        Import
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Button
        color="primary"
        variant="contained"
      >
        Add customer
      </Button>
    </Box> */}
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            {/* <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            /> */}
            <IconButton aria-label="arrow-back" onClick={props.onBackClick}>
              <ArrowBack />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default IssueDetailToolbar;
