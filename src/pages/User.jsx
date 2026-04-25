import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import '../App'

function Us() {
  let {id} = useParams()
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!userData) return <p>No user data found.</p>;

  console.log(userData);
  return (
    <div>
      <h2>User Detail {id}</h2>
     <div className="inner">
        {[...userData].filter(user => user.index == id).map(user => (
          <div key={user.index}>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Index:</strong> {user.index}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Company:</strong> {user.company}</p>
                <p><strong>Age:</strong> {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Us;

