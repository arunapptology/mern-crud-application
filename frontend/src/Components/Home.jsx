import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Redux/UserReducer";

const Home = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDeleteTask = (taskId) => {
    console.log(taskId);
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>
                  User <b>Management</b>
                </h2>
              </div>
              <div className="col-sm-7">
                <Link to="/create" className="btn btn-secondary">
                  <i className="material-icons"></i> <span>Add New User</span>
                </Link>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((items, index) => (
                <tr key={index}>
                  <td>{items.id}</td>
                  <td>
                    <Link to="/">
                      <img
                        src={items.userImage}
                        className="avatar"
                        alt="Avatar"
                      />
                      {items.name}
                    </Link>
                  </td>
                  <td>{items.date}</td>
                  <td>{items.role}</td>
                  <td>
                    {items.status === "Active" && (
                      <span className="status text-success">•</span>
                    )}
                    {items.status === "Inactive" && (
                      <span className="status text-danger">•</span>
                    )}
                    {items.status === "Hold" && (
                      <span className="status text-warning">•</span>
                    )}

                    {items.status}
                  </td>
                  <td>
                    <Link
                      to={`update/${items.id}`}
                      className="settings"
                      title="Settings"
                      data-toggle="tooltip"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <Link
                      onClick={() => handleDeleteTask(items.id)}
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                    >
                      <i className="bi bi-archive"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="clearfix">
        <div className="hint-text">
          Showing <b>5</b> out of <b>25</b> entries
        </div>
        <ul className="pagination">
          <li className="page-item disabled">
            <Link to="/">Previous</Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item active">
            <Link to="/" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              5
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              Next
            </Link>
          </li>
        </ul>
      </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
