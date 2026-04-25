
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import { setCurrentPage } from '../redux/slices/searchSlice';
import "../App";

function UserDetails() {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector(state => state.users);
  const { currentPage, itemsPerPage } = useSelector(state => state.search);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredData = userData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!userData.length) return <p>No user data found.</p>;

  return (
    <div>
      <h2>Users Lists</h2>

      {currentItems.length > 0 ? (
        currentItems.map((element) => (
          <div
          key={element.id}
          className="inners"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "5px",
          }}
          >
                <p><strong>Name:</strong> {element.name}</p>
                <p><strong>Email:</strong> {element.email}</p>
                <p><strong>Phone:</strong> {element.phone}</p>
                <p><strong>Company:</strong> {element.company}</p>
                <p><strong>Age:</strong> {element.age}</p>
                <p><strong>Address:</strong> {element.address}</p>
                <p><strong>About:</strong> {element.about}</p>
                <label><strong>Friends List:</strong></label>
                <div className="innerinner">
                   {element.friends && element.friends.map((ele)=>
                     <p key={ele.id}><strong>Friend{ele.id+1}:</strong>{ele.name}</p>
                  )}
               </div>
               <label><strong>Tags List:</strong></label>
               <div className="innerinner">
                   {element.tags && element.tags.map((ele,cur)=>
                     <p key={cur}><strong>Index{cur+1}:</strong>#{ele}</p>
                  )}
               </div>
        </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
      <div style={{ marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => dispatch(setCurrentPage(i + 1))}
            disabled={currentPage === i + 1}
            style={{ margin: "2px" }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
