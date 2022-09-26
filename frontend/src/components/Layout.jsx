import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Box flexGrow="1">
        <AppBar
          position="static"
          sx={{
            marginBottom: "1rem",
          }}
        >
          <Toolbar>
            <Typography variant="h5" flexGrow="1">
              Goals App
            </Typography>
            <Box
              //   backgroundColor="gray"
              width="300px"
              display="flex"
              justifyContent="space-evenly"
            >
              <Button color="inherit" LinkComponent={Link} to="/">
                Dashboard
              </Button>
              <Button color="inherit" LinkComponent={Link} to="/creategoal">
                Add Goals
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      <footer
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "red",
          maxHeight: "500px",
        }}
      >
        <Box width="100%">
          <Grid container>
            <Grid item>hello</Grid>
            <Grid item>hello</Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Layout;
