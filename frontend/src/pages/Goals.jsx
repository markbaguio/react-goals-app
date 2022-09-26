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

  let goalCount = 0;

  const incrementGoalCount = () => {
    goalCount++;
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box data-aos="slide-up" height="100%">
          <Typography variant="h1" gutterBottom>
            Goals
          </Typography>
          <Grid container spacing={5}>
            {goals.map((goal) => (
              <>
                {incrementGoalCount()}
                <Grid item lg={3} key={goal._id}>
                  <GoalComponent
                    goal={goal}
                    incrementGoalCount={incrementGoalCount}
                    goalCount={goalCount}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Goals;
