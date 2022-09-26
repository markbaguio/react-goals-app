import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const GoalComponent = ({ goal, goalCount }) => {
  /**
   * this should be a card component.
   */
  return (
    <>
      <Card sx={{ maxWidth: "350px" }}>
        <CardContent>
          <Typography variant="h4">{goalCount}</Typography>
          <Typography variant="h5" gutterBottom>
            {goal.text}
          </Typography>
          <Typography variant="caption">Goal ID: {goal._id}</Typography>
        </CardContent>
        <CardActions>
          <Button>Delete</Button>
          <Button>Edit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GoalComponent;
