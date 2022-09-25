import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import GoalComponent from "../components/GoalComponent";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  //fetching data from the backend.
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
      <Box>
        <Typography variant="h4">Goals</Typography>
        <GoalComponent goals={goals} />
      </Box>
    </>
  );
};

export default Goals;
