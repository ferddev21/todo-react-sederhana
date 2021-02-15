import React from "react";
import Button from "./Button";
import "../css/FormInput.css";

class FormInput extends React.Component {
  state = {
    text: "",
  };

  change = (e) => {
    this.setState({ text: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form className="formInput" onSubmit={this.submit}>
        <input
          className="input"
          value={this.state.text}
          type="text"
          placeholder="add Task"
          onChange={this.change}
        />
        <Button text="add" variant="primary" action={this.submit} />
      </form>
    );
  }
}

export default FormInput;
