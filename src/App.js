import React from "react";
import "./App.css";

import Students from "./Students";
import Form from "./Form";

class App extends React.Component {
  state = {
    students: [
      { name: "Andrea", lastName: "Perez", points: 8 },
      { name: "Juan", lastName: "Arturez", points: 10 },
      { name: "Jimena", lastName: "Miranda", points: 7 },
      { name: "Jaime", lastName: "Jacobo", points: 9 },
      { name: "Alicia", lastName: "Saez", points: 9 },
    ],
  };

  modifyPoints(op, index) {
    const stateCopy = { ...this.state };
    let student = stateCopy.students[index];
    if (op === "+") {
      student.points++;
    } else if (op === "-") {
      student.points--;
    }
    this.setState(stateCopy);
  }

  addStudent(newStudent) {
    // this.setState({ students: [...this.state.students, newStudent] });

    const stateCopy = { ...this.state };
    stateCopy.students.push(newStudent);
    this.setState(stateCopy);
  }

  render() {
    return (
      <div className="App">
        <Students
          students={this.state.students}
          modifyPoints={(op, index) => this.modifyPoints(op, index)}
        />
        <Form addStudent={(newStudent) => this.addStudent(newStudent)} />
      </div>
    );
  }
}

export default App;
