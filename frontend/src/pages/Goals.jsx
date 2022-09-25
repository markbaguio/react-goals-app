import { Typography, Box, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import GoalComponent from "../components/GoalComponent";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  //fetching data from the backend.
  /**
   * the api is asychronous, therefore, we can't render the data on mount.
   * It has to be saved or passed to a child component.
   */
  useEffect(() => {
    fetch("/api/goals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGoals(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" gutterBottom>
            Goals
          </Typography>
          <Grid container spacing={5}>
            {goals.map((goal) => (
              <Grid item lg={3} key={goal._id}>
                <GoalComponent goal={goal} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Goals;
