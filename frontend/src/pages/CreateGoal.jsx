import { Typography, Container, TextField, Box, Button } from "@mui/material";
import { useState } from "react";

const CreateGoal = () => {
  const [newGoal, setNewGoal] = useState("");
  const [goalError, setGoalError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoalError(false);
    //check if goal textfield is empty.
    if (!newGoal) {
      setGoalError(true);
    }

    if (newGoal) {
      console.log(newGoal);
      fetch("api/goals", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //database fieldname should be specified.
          text: newGoal,
        }),
      })
        .then((response) => {
          console.log(`status: ${response.ok}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" marginBottom="2rem">
          Create Goal
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            size="large"
            variant="outlined"
            label="Goal"
            fullWidth
            multiline
            rows={5}
            required
            onChange={(e) => setNewGoal(e.target.value)}
            error={goalError}
            sx={{
              display: "block",
              marginBottom: "2rem",
            }}
          />
          <Button type="submit" variant="outlined" size="large">
            Create Goal
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CreateGoal;
