import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  // const deleteHandler = () => {
  //   // setDeleteText('(Deleted!)');
  //   props.onDelete(props.id);
  // };

  return (
    <li className="goal-item" onClick={props.onDelete.bind(this, props.id)}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
