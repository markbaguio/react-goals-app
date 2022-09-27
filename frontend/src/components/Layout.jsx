import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import goalsLogo from "../assets/images/Goalslogo.png";

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
            {/* <Typography variant="h5" flexGrow="1">
              Goals App
            </Typography> */}
            {/* <IconButton sx={{ flexGrow: 1, alignContent: "start" }}> */}
            <Box flexGrow="1">
              <IconButton disableRipple LinkComponent={Link} to="/">
                <img src={goalsLogo} alt="logo" width="50px" />
              </IconButton>
            </Box>
            {/* </IconButton> */}
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
      {/* <footer
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          // backgroundColor: "gray",
          backgroundColor: "#242526",
        }}
      >
        <Box width="100%">
          <Grid container spacing={3}>
            <Grid item lg={12} marginTop="2rem">
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  align="center"
                  gutterBottom
                  variant="h6"
                  sx={{
                    ":hover": {
                      color: "#364966",
                      transition: "0.5s all ease-in-out",
                    },
                  }}
                >
                  &copy; 2022 Mark Godwin C. Baguio
                </Typography>
              </a>
            </Grid>
            <Grid item lg={12}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                marginBottom="2rem"
              >
                Icons
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer> */}
    </>
  );
};

export default Layout;
