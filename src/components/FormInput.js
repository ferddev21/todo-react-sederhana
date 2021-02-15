import React from "react";
import Button from "./Button";
import "../css/FormInput.css";

class FormInput extends React.Component {
  render() {
    return (
      <form className="formInput">
        <input className="input" type="text" placeholder="add Task" />
        <Button />
      </form>
    );
  }
}

export default FormInput;
