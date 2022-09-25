import { Box, Typography, Paper, Button } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h1">Hmmmm.</Typography>
        <Typography variant="h3" gutterBottom>
          Page not found <SentimentVeryDissatisfiedIcon fontSize="large" />
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          LinkComponent={Link}
          to={"/"}
        >
          Go back
        </Button>
      </Box>
    </>
  );
};

export default Page404;
