import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const GoalComponent = ({ goal, goalCount, handleDelete }) => {
  /**
   * this should be a card component.
   */

  let date = new Date();

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          // borderBottom: "3px solid #7b1fa2",
          // borderRight: "3px solid #7b1fa2",
          display: "block",
        }}
      >
        <CardContent>
          <Typography variant="h4">{goalCount}</Typography>
          <Typography variant="h5" gutterBottom>
            {goal.text}
          </Typography>
          <Typography variant="body2">Goal ID: {goal._id}</Typography>
          <Typography variant="body2">Created at: {goal.createdAt}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleDelete(goal._id)}>Delete</Button>
          <Button>Edit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default GoalComponent;
