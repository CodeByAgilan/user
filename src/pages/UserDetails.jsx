
import React, { useState, useEffect } from "react";
import "../App";

const styles = {
  mainContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "25px 20px",
    borderRadius: "8px",
    marginBottom: "25px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  headerTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    margin: 0,
  },
  dashboardLink: {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    backgroundColor: "#0056b3",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s",
    display: "inline-block",
    width: "fit-content",
  },
  filterSection: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  searchContainer: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "14px",
  },
  searchInput: {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  buttonGroup: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "15px",
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
    transition: "background-color 0.3s",
  },
  actionBtn: {
    padding: "10px 16px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
    transition: "background-color 0.3s",
  },
  filterContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "white",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "14px",
  },
  addUserSection: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    marginBottom: "25px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    border: "2px solid #007bff",
  },
  sectionTitle: {
    color: "#007bff",
    marginTop: 0,
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginBottom: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    fontFamily: "inherit",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "12px",
    margin: "5px 0 0 0",
    fontWeight: "500",
  },
  usersContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "15px",
    marginBottom: "25px",
  },
  userCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #e0e0e0",
  },
  userCardContent: {
    padding: "18px",
  },
  userHeader: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
    alignItems: "flex-start",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #007bff",
    flexShrink: 0,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    margin: "0 0 5px 0",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  },
  statusBadge: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "11px",
    fontWeight: "bold",
    color: "white",
  },
  detailsBox: {
    backgroundColor: "#f9f9f9",
    padding: "12px",
    borderRadius: "5px",
    marginBottom: "12px",
  },
  detailItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
    fontSize: "13px",
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#555",
  },
  detailValue: {
    color: "#666",
    wordBreak: "break-word",
  },
  mapContainer: {
    marginBottom: "12px",
    borderRadius: "5px",
    overflow: "hidden",
    height: "180px",
  },
  mapFrame: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  cardActions: {
    display: "flex",
    gap: "6px",
  },
  button: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "12px",
    transition: "opacity 0.2s",
    color: "white",
  },
  editBtn: {
    backgroundColor: "#28a745",
  },
  friendsBtn: {
    backgroundColor: "#6c63ff",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
  },
  editForm: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
  },
  pagination: {
    display: "flex",
    gap: "6px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "25px",
  },
  pageBtn: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "12px",
    transition: "background-color 0.2s",
    minWidth: "35px",
    backgroundColor: "white",
  },
  noResults: {
    textAlign: "center",
    padding: "50px 20px",
    color: "#666",
    fontSize: "16px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    marginBottom: "25px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "inherit",
  },
  tableHead: {
    backgroundColor: "#007bff",
    color: "white",
  },
  tableHeaderCell: {
    padding: "12px 15px",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "13px",
    borderBottom: "1px solid #0056b3",
  },
  tableCell: {
    padding: "12px 15px",
    fontSize: "13px",
    color: "#333",
  },
  tableRow: {
    borderBottom: "1px solid #e0e0e0",
    transition: "background-color 0.2s",
  },
  tableRowHover: {
    backgroundColor: "#f9f9f9",
  },
  tableCellActions: {
    display: "flex",
    gap: "6px",
  },
  tableActionBtn: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "11px",
    transition: "opacity 0.2s",
    color: "white",
  },
};

function UserDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState([]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    age: "",
  });
 const [fil,setFil] =useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [friend, setfriend] = useState(false);
  const [need,setNeed]=useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "", email: "", phone: "", company: "", age: "",
    gender: "male", address: "", latitude: "", longitude: "",
    favoriteFruit: "", profilePicture: "", tags: "", friends: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingUserId, setEditingUserId] = useState(null);

                                                          let [tab,setTab]=useState(true);



  const itemsPerPage = 6;

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:3001/user");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setUserData(data);
          setFil(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const validate = () => {
    let errors = {};
    if (!newUser.name || newUser.name.length < 3) errors.name = "Name must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(newUser.email)) errors.email = "Invalid email format.";
    if (!/^\d{10,15}$/.test(newUser.phone.replace(/\D/g, ""))) errors.phone = "Invalid phone number.";
    if (Number(newUser.age) <= 18) errors.age = "Age must be greater than 18.";
    if (isNaN(newUser.latitude) || newUser.latitude === "") errors.latitude = "Invalid Latitude.";
    if (isNaN(newUser.longitude) || newUser.longitude === "") errors.longitude = "Invalid Longitude.";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));

    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: null }));
  };


const handleAddUserSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    if (editingUserId) {
      // Update existing user
      setUserData(
        userData.map((user) =>
          user.id === editingUserId ? { ...newUser, id: editingUserId } : user
        )
      );
      setEditingUserId(null);
      setEditId(null);
    } else {
      // Add new user
      setUserData(prev => [...prev, newUser]);
    }
    
    // Reset form
    setNewUser({
      name: "", email: "", phone: "", company: "", age: "",
      gender: "male", address: "", latitude: "", longitude: "",
      favoriteFruit: "", profilePicture: "", tags: "", friends: ""
    });
    setNeed(false);
  } catch (err) {
    alert("Error: " + err.message);
  } finally {
    setIsSubmitting(false);
  }
};

  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
      setEditId(user.id);
      setFormData(user);
      setNeed(true);
      setEditingUserId(user.id);
      setNewUser({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        company: user.company || "",
        age: user.age || "",
        gender: user.gender || "male",
        address: user.address || "",
        latitude: user.latitude || "",
        longitude: user.longitude || "",
        favoriteFruit: user.favoriteFruit || "",
        profilePicture: user.profilePicture || "",
        tags: user.tags || "",
        friends: user.friends || ""
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.company || !formData.age) {
      alert("All fields are required!");
      return;
    }

    setUserData(
      userData.map((user) =>
        user.id === editId ? { ...formData, id: editId } : user
      )
    );

    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleSortByAge = ()=> {
    setUserData([...userData].sort((a, b) => a.age - b.age));
  };

   const handleSortByCompany = ()=> {
     setUserData([...userData].sort((a, b) => a.company.localeCompare(b.company)));

  };

   const handleSortByName = ()=> {
     setUserData([...userData].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  function Reset(){
    setUserData(fil)
  }

  function handleCh(e){
    const selectedGender = e.target.value;
    Reset();
     if(selectedGender==="Male"){
       setUserData(
         [...fil].filter((user) =>
          {
            if(user.gender=="male"){
              return true;
            }
          }
        )
      )
      }
      else if(selectedGender==="Female"){
        setUserData(
          [...fil].filter((user) =>
            {
              if(user.gender=="female"){
                return true;
              }
            }
          )
        )
      }
  }

function handleChAge(e){
    const selectedGender = e.target.value;
    Reset();
     if(selectedGender==="18-25"){
       setUserData(
         [...fil].filter((user) =>
          {
            if(user.age>=18&&user.age<=25){
              return true;
            }
          }
        )
      )
      }
      else if(selectedGender==="26-35"){
        setUserData(
          [...fil].filter((user) =>
            {
              if(user.age>=26&&user.age<=35){
                return true;
              }
            }
          )
        )
      }
      else{
        setUserData(
          [...fil].filter((user) =>
            {
              if(user.age>=36&&user.age<=50){
                return true;
              }
            }
          )
        )
      }
  }



  function B(){
    setTab((tab)?false:true);
    console.log(tab);
  }


  function handleChActive(e){
    const selectedGender = e.target.value;
    Reset();
     if(selectedGender==="All"){
       setUserData(
         [...fil].filter((user) =>
          {
              return true;
          }
        )
      )
      }
      else if(selectedGender==="Active"){
        setUserData(
          [...fil].filter((user) =>
            {
              if(user.isActive){
                return true;
              }
            }
          )
        )
      }
      else{
        setUserData(
          [...fil].filter((user) =>
            {
              if(!user.isActive){
                return true;
              }
            }
          )
        )
      }
  }



  function AddUser(){
    setNeed(need?(false):true)
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return (
      <div style={styles.mainContainer}>
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ fontSize: "16px", color: "#6b7280" }}> Loading user details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.mainContainer}>
        <div style={{ backgroundColor: "#fee2e2", padding: "20px", borderRadius: "12px", color: "#dc2626" }}>
          ❌ Error: {error}
        </div>
      </div>
    );
  }

  if (!userData.length) {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.noResults}> No user data found.</div>
      </div>
    );
  }

  return (
    <div style={styles.mainContainer}>
      {/* Header */}
      <div style={{ ...styles.header, background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)" }}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}> User Management</h1>
          <p style={{ margin: "0", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>Manage and view all users</p>
        </div>
        <a href="/dashboard" style={styles.dashboardLink}>Dashboard</a>
      </div>

      {/* Search & Filters Section */}
      <div style={styles.filterSection}>
        {/* Search */}
        <div style={styles.searchContainer}>
          <label style={styles.label}> Search By Name</label>
          <input
            type="text"
            placeholder="Enter user name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          <button onClick={handleSortByName} style={{ ...styles.actionBtn }}>Sort by Name</button>
          <button onClick={handleSortByAge} style={{ ...styles.actionBtn }}>Sort by Age</button>
          <button onClick={handleSortByCompany} style={{ ...styles.actionBtn }}>Sort by Company</button>
          <button onClick={Reset} style={{ ...styles.actionBtn }}>Reset Filters</button>
          <button onClick={B} style={{ ...styles.actionBtn, backgroundColor: tab ? "#007bff" : "#8b5cf6", color: "white", borderColor: tab ? "#007bff" : "#8b5cf6" }}>{tab ? " Card View" : "Table View"} - Change Type</button>
          <button onClick={AddUser} style={styles.primaryBtn}>+ Add New User</button>
        </div>

        {/* Filters */}
        <div style={styles.filterContainer}>
          <select onChange={handleCh} style={styles.select}>
            <option value="">-- Select Gender --</option>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select onChange={handleChAge} style={styles.select}>
            <option value="">Select Age Range</option>
            <option value="18-25">18-25 years</option>
            <option value="26-35">26-35 years</option>
            <option value="36-50">36-50 years</option>
          </select>

          <select onChange={handleChActive} style={styles.select}>
            <option value="">Select Status</option>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="InActive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Add/Edit User Form */}
      {need && (
        <div style={styles.addUserSection}>
          <h2 style={styles.sectionTitle}>{editingUserId ? " Edit User" : "Add New User"}</h2>
          <form onSubmit={handleAddUserSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={newUser.name}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.name && <p style={styles.errorText}>{formErrors.name}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="user@example.com"
                  value={newUser.email}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.email && <p style={styles.errorText}>{formErrors.email}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={newUser.phone}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.phone && <p style={styles.errorText}>{formErrors.phone}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Age *</label>
                <input
                  type="number"
                  name="age"
                  placeholder="25"
                  value={newUser.age}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.age && <p style={styles.errorText}>{formErrors.age}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={newUser.company}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Gender</label>
                <select name="gender" value={newUser.gender} onChange={handleAddUserChange} style={styles.input}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={newUser.address}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Favorite Fruit</label>
                <input
                  type="text"
                  name="favoriteFruit"
                  placeholder="e.g., Apple"
                  value={newUser.favoriteFruit}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  placeholder="40.7128"
                  value={newUser.latitude}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.latitude && <p style={styles.errorText}>{formErrors.latitude}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  placeholder="-74.0060"
                  value={newUser.longitude}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
                {formErrors.longitude && <p style={styles.errorText}>{formErrors.longitude}</p>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Tags</label>
                <input
                  type="text"
                  name="tags"
                  placeholder="e.g., developer, designer"
                  value={newUser.tags}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Friends</label>
                <input
                  type="text"
                  name="friends"
                  placeholder="Friend names"
                  value={newUser.friends}
                  onChange={handleAddUserChange}
                  style={styles.input}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", paddingTop: "12px", borderTop: "1px solid #e5e7eb" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...styles.primaryBtn,
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? " Processing..." : (editingUserId ? "✓ Update User" : "✓ Add User")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setNeed(false);
                  setEditingUserId(null);
                  setEditId(null);
                  setNewUser({
                    name: "", email: "", phone: "", company: "", age: "",
                    gender: "male", address: "", latitude: "", longitude: "",
                    favoriteFruit: "", profilePicture: "", tags: "", friends: ""
                  });
                }}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users Display - Card or Table View */}
      {tab ? (
        // Card View
        <div style={styles.usersContainer}>
          {currentItems.length > 0 ? (
            currentItems.map((element) => (
            <div key={element.id} style={styles.userCard}>
              {editId === element.id ? (
                // Edit Mode - Show Friends
                <div style={styles.editForm}>
                  <h3 style={{ color: "#007bff", marginTop: 0, marginBottom: "16px" }}>👥 Friends List</h3>

                  {friend && element.friends && element.friends.length > 0 ? (
                    <div>
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        {element.friends.map((friendItem, idx) => (
                          <div key={idx} style={{ padding: "8px", backgroundColor: "white", marginBottom: "8px", borderRadius: "6px", fontSize: "13px" }}>
                            <strong>Friend {idx + 1}:</strong> {typeof friendItem === "string" ? friendItem : friendItem.name || "Unknown"}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setfriend(false);
                          setEditId(null);
                        }}
                        style={{
                          marginTop: "12px",
                          padding: "8px 16px",
                          backgroundColor: "#6b7280",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Back
                      </button>
                    </div>
                  ) : friend ? (
                    <div>
                      <p style={{ color: "#6b7280", fontSize: "13px" }}>No friends available</p>
                      <button
                        onClick={() => {
                          setfriend(false);
                          setEditId(null);
                        }}
                        style={{
                          marginTop: "12px",
                          padding: "8px 16px",
                          backgroundColor: "#6b7280",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Back
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p style={{ color: "#6b7280", fontSize: "13px" }}>Edit this user in the form above</p>
                      <button
                        onClick={() => setEditId(null)}
                        style={{
                          marginTop: "12px",
                          padding: "8px 16px",
                          backgroundColor: "#6b7280",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Back
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // View Mode
                <div style={styles.userCardContent}>
                  {/* Header with Avatar */}
                  <div style={styles.userHeader}>
                    <img
                      src={element.profilePicture || "https://randomuser.me/api/portraits/men/75.jpg"}
                      alt={element.name}
                      style={styles.avatar}
                    />
                    <div style={styles.userInfo}>
                      <h3 style={styles.userName}>{element.name}</h3>
                      <div>
                        <span
                          style={{
                            ...styles.statusBadge,
                            backgroundColor: element.isActive ? "#10b981" : "#ef4444",
                          }}
                        >
                          {element.isActive ? "● Active" : "● Inactive"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div style={styles.detailsBox}>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}> Email:</span>
                      <a href={`mailto:${element.email}`} style={{ ...styles.detailValue, textDecoration: "none", color: "#007bff" }}>
                        {element.email}
                      </a>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}> Company:</span>
                      <span style={styles.detailValue}>{element.company}</span>
                    </div>
                    <div style={styles.detailItem}>
                      <span style={styles.detailLabel}> Age:</span>
                      <span style={styles.detailValue}>{element.age} years</span>
                    </div>
                    <div style={{ ...styles.detailItem, marginBottom: 0 }}>
                      <span style={styles.detailLabel}> Gender:</span>
                      <span style={styles.detailValue}>{element.gender === "male" ? " Male" : " Female"}</span>
                    </div>
                  </div>

                  {/* Map */}
                  {element.latitude && element.longitude && (
                    <div style={styles.mapContainer}>
                      <iframe
                        title={`Map for ${element.name}`}
                        src={`https://www.google.com/maps?q=${element.latitude},${element.longitude}&z=13&output=embed`}
                        style={styles.mapFrame}
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div style={styles.cardActions}>
                    <button
                      onClick={() => {
                        setfriend(false);
                        handleEdit(element);
                      }}
                      style={{ ...styles.button, ...styles.editBtn }}
                    >
                       Edit
                    </button>
                    <button
                      onClick={() => {
                        setEditId(element.id);
                        setfriend(true);
                      }}
                      style={{ ...styles.button, ...styles.friendsBtn }}
                    >
                       Friends
                    </button>
                    <button
                      onClick={() => {
                        setfriend(false);
                        handleDelete(element.id);
                      }}
                      style={{ ...styles.button, ...styles.deleteBtn }}
                    >
                       Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
          ) : (
            <div style={styles.noResults}> No users found.</div>
          )}
        </div>
      ) : (
        // Table View
        <div style={styles.tableContainer}>
          {currentItems.length > 0 ? (
            <table style={styles.table}>
              <thead style={styles.tableHead}>
                <tr>
                  <th style={styles.tableHeaderCell}>Name</th>
                  <th style={styles.tableHeaderCell}>Email</th>
                  <th style={styles.tableHeaderCell}>Company</th>
                  <th style={styles.tableHeaderCell}>Age</th>
                  <th style={styles.tableHeaderCell}>Gender</th>
                  <th style={styles.tableHeaderCell}>Status</th>
                  <th style={styles.tableHeaderCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((element) => (
                  <tr key={element.id} style={styles.tableRow}>
                    <td style={styles.tableCell}>
                      <strong>{element.name}</strong>
                    </td>
                    <td style={styles.tableCell}>
                      <a href={`mailto:${element.email}`} style={{ color: "#007bff", textDecoration: "none" }}>
                        {element.email}
                      </a>
                    </td>
                    <td style={styles.tableCell}>{element.company}</td>
                    <td style={styles.tableCell}>{element.age}</td>
                    <td style={styles.tableCell}>{element.gender === "male" ? " Male" : " Female"}</td>
                    <td style={styles.tableCell}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "11px",
                          fontWeight: "600",
                          color: "white",
                          backgroundColor: element.isActive ? "#10b981" : "#ef4444",
                        }}
                      >
                        {element.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td style={{ ...styles.tableCell, ...styles.tableCellActions }}>
                      <button
                        onClick={() => {
                          setfriend(false);
                          handleEdit(element);
                        }}
                        style={{ ...styles.tableActionBtn, backgroundColor: "#3b82f6" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setEditId(element.id);
                          setfriend(true);
                        }}
                        style={{ ...styles.tableActionBtn, backgroundColor: "#8b5cf6" }}
                      >
                        Friends
                      </button>
                      <button
                        onClick={() => {
                          setfriend(false);
                          handleDelete(element.id);
                        }}
                        style={{ ...styles.tableActionBtn, backgroundColor: "#ef4444" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={styles.noResults}> No users found.</div>
          )}
        </div>
      )}

      {/* Pagination */}
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            disabled={currentPage === i + 1}
            style={{
              ...styles.pageBtn,
              backgroundColor: currentPage === i + 1 ? "#007bff" : "white",
              color: currentPage === i + 1 ? "white" : "#374151",
              borderColor: currentPage === i + 1 ? "#007bff" : "#d1d5db",
              opacity: currentPage === i + 1 ? 1 : 0.7,
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
