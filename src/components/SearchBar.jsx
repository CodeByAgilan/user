import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from '../redux/slices/usersSlice';
import { setSearch, setDebouncedSearch, setCurrentPage } from '../redux/slices/searchSlice';
import { setNewUser, setFormErrors, clearFormError, setIsSubmitting, resetNewUserForm } from '../redux/slices/formSlice';

function UserDetails() {
  const dispatch = useDispatch();
  
  // Redux selectors
  const { userData, loading, error } = useSelector(state => state.users);
  const { search, debouncedSearch, currentPage, itemsPerPage } = useSelector(state => state.search);
  const { newUser, formErrors, isSubmitting } = useSelector(state => state.form);

  // Fetch initial data
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Debounce logic for search
  useEffect(() => {
    const timer = setTimeout(() => dispatch(setDebouncedSearch(search)), 500);
    return () => clearTimeout(timer);
  }, [search, dispatch]);

  // Reset pagination when search changes
  useEffect(() => {
    if (debouncedSearch) dispatch(setCurrentPage(1));
  }, [debouncedSearch, dispatch]);

  // Validation function
  const validate = () => {
    let errors = {};
    if (!newUser.name || newUser.name.length < 3) errors.name = "Name must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(newUser.email)) errors.email = "Invalid email format.";
    if (!/^\d{10,15}$/.test(newUser.phone.replace(/\D/g, ""))) errors.phone = "Invalid phone number.";
    if (Number(newUser.age) <= 18) errors.age = "Age must be greater than 18.";
    if (isNaN(newUser.latitude) || newUser.latitude === "") errors.latitude = "Invalid Latitude.";
    if (isNaN(newUser.longitude) || newUser.longitude === "") errors.longitude = "Invalid Longitude.";
    
    dispatch(setFormErrors(errors));
    return Object.keys(errors).length === 0;
  };

  // Add User Handlers
  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUser({ [name]: value }));
    if (formErrors[name]) dispatch(clearFormError(name));
  };

  const handleAddUserSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(setIsSubmitting(true));
    try {
      const payload = {
        ...newUser,
        id: Date.now().toString(),
        age: Number(newUser.age),
        latitude: parseFloat(newUser.latitude),
        longitude: parseFloat(newUser.longitude),
        tags: newUser.tags.split(",").map(t => t.trim()),
        friends: newUser.friends.split(",").map((f, i) => ({ id: i, name: f.trim() }))
      };

      const result = await dispatch(addUser(payload));
      if (result.payload) {
        alert("User added successfully!");
        dispatch(resetNewUserForm());
      }
    } catch (err) {
      alert("Error adding user: " + err.message);
    } finally {
      dispatch(setIsSubmitting(false));
    }
  };

  // List Handlers
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSortByAge = () => {
    const sorted = [...userData].sort((a, b) => a.age - b.age);
    dispatch({ type: 'users/setUserData', payload: sorted });
  };

  const handleSortByCompany = () => {
    const sorted = [...userData].sort((a, b) => a.company.localeCompare(b.company));
    dispatch({ type: 'users/setUserData', payload: sorted });
  };

  const handleSortByName = () => {
    const sorted = [...userData].sort((a, b) => a.name.localeCompare(b.name));
    dispatch({ type: 'users/setUserData', payload: sorted });
  };

  const handleGenderFilter = (e) => {
    const val = e.target.value;
    if (!val || val === "All") {
      dispatch(fetchUsers());
    } else {
      const filtered = userData.filter(u => u.gender.toLowerCase() === val.toLowerCase());
      dispatch({ type: 'users/setFilteredData', payload: filtered });
    }
  };

  const handleReset = () => {
    dispatch(fetchUsers());
    dispatch(setSearch(""));
  };

  // Pagination Logic
  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* ADD USER FORM */}
      <section style={{ border: "2px solid #007bff", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <h3 style={{ marginTop: 0 }}>Add New User</h3>
        <form onSubmit={handleAddUserSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <input style={{width: "90%"}} name="name" placeholder="Name" value={newUser.name} onChange={handleAddUserChange} />
            {formErrors.name && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.name}</p>}
          </div>
          <div>
            <input style={{width: "90%"}} name="email" placeholder="Email" value={newUser.email} onChange={handleAddUserChange} />
            {formErrors.email && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.email}</p>}
          </div>
          <div>
            <input style={{width: "90%"}} name="phone" placeholder="Phone" value={newUser.phone} onChange={handleAddUserChange} />
            {formErrors.phone && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.phone}</p>}
          </div>
          <div>
            <input style={{width: "90%"}} name="age" type="number" placeholder="Age" value={newUser.age} onChange={handleAddUserChange} />
            {formErrors.age && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.age}</p>}
          </div>
          <input style={{width: "90%"}} name="company" placeholder="Company" value={newUser.company} onChange={handleAddUserChange} />
          <select style={{width: "95%"}} name="gender" value={newUser.gender} onChange={handleAddUserChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input style={{width: "90%"}} name="address" placeholder="Address" value={newUser.address} onChange={handleAddUserChange} />
          <input style={{width: "90%"}} name="favoriteFruit" placeholder="Favorite Fruit" value={newUser.favoriteFruit} onChange={handleAddUserChange} />
          <div>
            <input style={{width: "90%"}} name="latitude" placeholder="Latitude" value={newUser.latitude} onChange={handleAddUserChange} />
            {formErrors.latitude && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.latitude}</p>}
          </div>
          <div>
            <input style={{width: "90%"}} name="longitude" placeholder="Longitude" value={newUser.longitude} onChange={handleAddUserChange} />
            {formErrors.longitude && <p style={{ color: "red", fontSize: "11px", margin: "4px 0" }}>{formErrors.longitude}</p>}
          </div>
          <input style={{width: "90%"}} name="tags" placeholder="Tags (comma separated)" value={newUser.tags} onChange={handleAddUserChange} />
          <input style={{width: "90%"}} name="friends" placeholder="Friends (comma separated)" value={newUser.friends} onChange={handleAddUserChange} />
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ 
                gridColumn: "span 2", 
                padding: "12px", 
                background: isSubmitting ? "#ccc" : "#007bff", 
                color: "#fff", 
                border: "none", 
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer"
            }}
          >
            {isSubmitting ? "Adding User..." : "Add User"}
          </button>
        </form>
      </section>

      <hr />

      {/* SEARCH AND FILTERS */}
      <h2>User List</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          style={{ padding: "8px", flex: "1" }}
        />
        <button onClick={handleSortByAge}>Sort Age</button>
        <button onClick={handleSortByCompany}>Sort Company</button>
        <button onClick={handleSortByName}>Sort Name</button>
        <select onChange={handleGenderFilter} style={{ padding: "8px" }}>
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button onClick={handleReset} style={{ background: "#f8f9fa", border: "1px solid #ccc" }}>Reset</button>
      </div>

      {/* USER LIST CARDS */}
      {currentItems.map((element) => (
        <div key={element.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", margin: "10px 0", background: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: "0 0 5px 0" }}><strong>{element.name}</strong> ({element.age}) — {element.gender}</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{element.email} | {element.company}</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => handleDelete(element.id)} style={{ padding: "5px 10px", color: "red" }}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      {/* PAGINATION */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "5px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            onClick={() => dispatch(setCurrentPage(i + 1))} 
            style={{ 
                padding: "8px 12px", 
                background: currentPage === i + 1 ? "#007bff" : "#fff",
                color: currentPage === i + 1 ? "#fff" : "#000",
                border: "1px solid #ccc"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;

