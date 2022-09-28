import {
  Typography,
  Container,
  TextField,
  Box,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const CreateGoal = () => {
  const [newGoal, setNewGoal] = useState("");
  const [goalError, setGoalError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  //POST goal
  const postGoal = () => {
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
        console.log(
          `status: ${response.ok === true ? "success" : "unsuccessful"}`
        );
        response.json();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoalError(false);
    //check if goal textfield is empty.
    if (!newGoal) {
      setGoalError(true);
    }

    if (newGoal) {
      console.log(newGoal);
      postGoal();
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarExit = (event, reason) => {
    if (reason !== "clickaway") {
      return;
    }

    setOpenSnackbar(false);
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
          <Snackbar
            message="Goal created!"
            autoHideDuration={5000}
            open={openSnackbar}
            onClose={handleSnackbarExit}
          />
        </form>
      </Container>
    </>
  );
};

export default CreateGoal;
