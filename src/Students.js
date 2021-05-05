import React from "react";

const Students = (props) => {
  return (
    <div>
      <h1>All my students</h1>
      <ul>
        {props.students.map((student, index) => {
          return (
            <li key={index}>
              {student.name} {student.lastName}: {student.points}
              <button onClick={()=>props.modifyPoints('-', index)}>-1</button>
              <button onClick={()=>props.modifyPoints('+', index)}>+1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Students;
