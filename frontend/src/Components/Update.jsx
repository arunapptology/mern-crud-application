import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateUser } from "../Redux/UserReducer";
const Update = () => {
  const { id } = useParams();

  const userData = useSelector((state) => state.users);
  const existingUser = userData.find((user) => user.id == id);

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [urole, setRole] = useState(existingUser ? existingUser.role : "");
  const [ustatus, setStatus] = useState(
    existingUser ? existingUser.status : ""
  );
  const [uuserImage, setImage] = useState(
    existingUser ? existingUser.userImage : ""
  );
  const [udate, setDate] = useState(existingUser ? existingUser.date : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitTask = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: id,
        name: uname,
        role: urole,
        status: ustatus,
        userImage: uuserImage,
        date: udate,
      })
    );


    navigate('/')
  };

  return (
    <>
      <div className="container">
        <div className="row  d-flex align-items-center justify-content-center p-5">
          <div className="col-6">
            <form className="card" onSubmit={handleSubmitTask}>
              <div className="card-header">
                <h3>Edit User</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={uname}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>

                  <select
                    className="form-control"
                    name="role"
                    onChange={(e) => setRole(e.target.value)} defaultValue={urole}
                  >
                    <option value="Admin">
                      Admin
                    </option>
                    <option value="Publisher">
                      Publisher
                    </option>
                    <option value="Reviewer">
                      Reviewer
                    </option>
                    <option value="Moderator">
                      Moderator
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>

                  <select
                    className="form-control"
                    name="status"
                    onChange={(e) => setStatus(e.target.value)} defaultValue={ustatus}
                  >
                    <option value="Active">
                      Active
                    </option>
                    <option value="Inactive">
                      Inactive
                    </option>
                    <option value="Hold">
                      Hold
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    value={udate}
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    value={uuserImage}
                    onChange={(e) => setImage(e.target.value)}
                    name="image"
                    type="text"
                    className="form-control"
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
export default Update;
