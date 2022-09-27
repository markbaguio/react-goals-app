import { Typography, Container, TextField, Box } from "@mui/material";

const createGoal = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1">Create Goal</Typography>
        <form noValidate>
          <TextField
            size="large"
            variant="outlined"
            label="Goal"
            fullWidth
            multiline
            rows={5}
            required
          />
        </form>
      </Container>
    </>
  );
};

export default createGoal;
