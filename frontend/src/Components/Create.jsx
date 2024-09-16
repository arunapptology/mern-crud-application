import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "../Redux/UserReducer";

import { useNavigate } from "react-router-dom";

import userData from "../Data";

const Create = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [userImage, setImage] = useState("");
  const [date, setDate] = useState("");

  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        id: userData[userData.length - 1].id + 1,
        name,
        role,
        status,
        userImage,
        date
      })
    );

    navigate("/");

    console.log(userData);
  };

  return (
    <>
      <div className="container">
        <div className="row  d-flex align-items-center justify-content-center p-5">
          <div className="col-6">
            <form className="card" onSubmit={handleFormSubmit}>
              <div className="card-header">
                <h3>Create new User</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    name="role"
                    className="form-control"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select option</option>
                    <option value="Admin">Admin</option>
                    <option value="Publisher">Publisher</option>
                    <option value="Reviewer">Reviewer</option>
                    <option value="Moderator">Moderator</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-control"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select option</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Hold">Hold</option>
                  </select>
                </div>


                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    name="date"
                    type="text"
                    className="form-control"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    name="image"
                    type="text"
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
