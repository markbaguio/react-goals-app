import { Typography, Box, Paper } from "@mui/material";

const GoalComponent = ({ goal }) => {
  /**
   * this should be a card component.
   */
  return (
    <>
      <Box width="100%" height="500px">
        <Paper>
          <Typography variant="h3">{goal.text}</Typography>
          <Typography variant="caption">Goal ID: {goal._id}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default GoalComponent;
