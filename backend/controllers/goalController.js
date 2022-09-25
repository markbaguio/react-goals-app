const expressAsyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.json(goals);
});

const setGoal = expressAsyncHandler(async (req, res) => {
  //validation: if text field is empty, throw an error.
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text field is empty.");
  }

  //validation: check if the goal already exist.
  const existingGoal = await Goal.findOne({ text: req.body.text });
  if (existingGoal) {
    res.status(400);
    throw new Error("Goal already exist in the database.");
  }

  const newGoal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(newGoal);
});

const updateGoal = expressAsyncHandler(async (req, res) => {
  const newGoal = req.body.text;
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, {
    text: newGoal,
  });

  res.status(200).json({
    message: `Goal updated to: ${newGoal}`,
    updatedGoal: updatedGoal,
  });
});

const deleteGoal = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  //check if the specified goal is in the database.
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found.");
  }

  //delete goal.
  await goal.remove();
  res.status(200).json({
    message: `The goal '${goal.text}' with the ID of ${req.params.id} has been deleted`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
