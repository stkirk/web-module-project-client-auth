import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createFriend } from "../actions";
import { connect } from "react-redux";

const AddFriendForm = (props) => {
  const initialFormValues = {
    name: "",
    age: "",
    email: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const submitFriend = (e) => {
    e.preventDefault();
    props.createFriend(formValues);
    history.push("/friends");
  };

  return (
    <div className="friend-form">
      <h1>Add Friend Form</h1>
      <form onSubmit={submitFriend}>
        <div className="input-div">
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            placeholder="name of friend"
            value={formValues.name}
            onChange={handleChanges}
          />
        </div>
        <div className="input-div">
          <label htmlFor="age" />
          <input
            type="text"
            name="age"
            placeholder="age of friend"
            value={formValues.age}
            onChange={handleChanges}
          />
        </div>
        <div className="input-div">
          <label htmlFor="age" />
          <input
            type="email"
            name="email"
            placeholder="email of friend"
            value={formValues.email}
            onChange={handleChanges}
          />
        </div>
        <button>
          {props.loadingCreateFriend ? "Creating Friend" : "Add New Friend"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingCreateFriend: state.loadingCreateFriend,
  };
};

export default connect(mapStateToProps, { createFriend })(AddFriendForm);
