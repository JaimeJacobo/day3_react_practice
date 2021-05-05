import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    lastName: "",
    points: 0,
  };

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = this.state;

    this.props.addStudent(newStudent);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="points">Points: </label>
          <input
            type="number"
            name="points"
            onChange={(event) => this.handleInput(event)}
          />

          <button>Crear alumno</button>
        </form>
      </div>
    );
  }
}

export default Form;
