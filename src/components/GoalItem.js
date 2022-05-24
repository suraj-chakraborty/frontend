import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  // const [edit, setEdit] = useState("");

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      {/* <input
        type="text"
        name="text"
        id="'text"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      /> */}
      {/* <button
        onClick={() => dispatch(updateGoal(goal._id, (goal.text = edit)))}
        className="close"
      >
        update
      </button> */}
    </div>
  );
}

export default GoalItem;
