const getGoals = (req, res) => {
  res.status(200).json({ status: "OK" });
};

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text field is empty.");
  }

  const newGoal = req.body.text;
  res.status(200).json(newGoal);
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `${req.params.id} update goal.` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `${req.params.id} delete goal.` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
