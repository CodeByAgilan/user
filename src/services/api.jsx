import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import About from '../pages/Dashboard';

function UserDetails() {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

 
  const isActive = useMemo(() => {
    return userData.filter((element) => element.isActive).length;
  }, [userData]);


  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!userData) return <p>No user data found.</p>;


  return (
    <div>
        <About total={userData.length} ISS={isActive} t={true} username="ad"/>
    </div>
  );
}


export default UserDetails;

