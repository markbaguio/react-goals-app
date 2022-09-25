import { Typography, Box, Paper } from "@mui/material";

const GoalComponent = ({ goals }) => {
  return (
    <>
      <Box width="100%" height="100%" backgroundColor="gray">
        <Paper>
          <Typography variant="h6">{goals.text}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default GoalComponent;
