import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../components/Loading";
import Error from "./../components/Error";
import { deleteUser, getAllUsers } from "../actions/userActions";
import TrashIcon from "../components/icons/TrashIcon";

const UsersList = () => {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  console.log(usersstate);
  const { error, users, loading } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="text-center">
        <h4 style={{ margin: "15px" }}>Users List</h4>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className="trash-icon"
                    onClick={() => dispatch(deleteUser(user._id))}
                  >
                    <TrashIcon />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
