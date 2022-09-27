import { Typography, Box, Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
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

  /**
   * deleting an entry from the database
   * should be executed on the component where the local state is.
   */

  const handleDelete = (id) => {
    fetch(`api/goals/${id}`, {
      method: "delete",
    }).then(() => console.log(`deleted: ${id}`));

    //filter is a higher order array function that filters out data based on the given condition.
    setGoals(goals.filter((goal) => goal._id !== id));
  };

  let goalCount = 0;

  const incrementGoalCount = () => {
    goalCount++;
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "5rem",
        }}
      >
        <Box data-aos="slide-left" minHeight="100vh">
          <Typography variant="h1" gutterBottom>
            Goals
          </Typography>
          <Grid container spacing={5}>
            {goals.map((goal) => (
              <React.Fragment key={goal._id}>
                {incrementGoalCount()}
                <Grid item lg={12}>
                  <GoalComponent
                    goal={goal}
                    // incrementGoalCount={incrementGoalCount}
                    goalCount={goalCount}
                    handleDelete={handleDelete}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Goals;
