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

  const handleDelete = () => {
    //delete goal on the database.
  };
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
          <Button onClick={handleDelete}>Delete</Button>
          <Button>Edit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GoalComponent;
