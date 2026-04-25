import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { handlePasswordChange, login } from '../redux/slices/authSlice'
import Users from '../services/api'
import Us from './User'
import U from './UserDetails'
import About from "./Dashboard"
import BarChart from "./BarChart";
import { chartData } from "../utils/Data";
import DisplayDetails from "./displayUserDetails"
import "../App.css"

function Home() {
    const dispatch = useDispatch();
    const { isActive } = useSelector(state => state.auth);
    const navigate = useNavigate();
       const goToAbout = () => {
        if(!isActive) {
            dispatch(login());
            navigate("/dashboard", { state: { from: "Home Page" } });
        }
    };
    
    function Handler(e){
        dispatch(handlePasswordChange(e.target.value));
        console.log(e.target.value);
    }
    
    return (
    <>

    <div  id="loginPage">
      

        <div id="overallLogin">

               <div class="secondInnerDivs">
            
               </div>
        
              

                <div class="secondInnerDiv">
                    <div>
                      <h2>Welcome!</h2>
                      <p> Enter your Details and Start journey with us </p>
                      <button>SIGNUP</button>
                    </div>
                </div>

                


        </div>
        <div id="inin">

                    <div id="Logins">
                          <h1>Login Page</h1>                       
                          <input type="text" placeholder="Input your user ID or Email" class="Emailandpassword"/>
                      
                          <input type="Password"  onChange={Handler} placeholder="Input Your password" class="Emailandpassword"/>
                        <div id="Remenbermesection">
                          <input type="checkbox" />
                          <div id="Remenbermesectioninner">
                            <label htmlFor="">Remember me</label>
                            <a href="">Forget Password?</a>
                          </div>
                        </div>
                        <div>

                        <div style={{display:"flex",gap:1,justifyContent:"center"}} id="buttonss">
                          <button onClick={goToAbout}  id="LoginLoginbutton">
                          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" ></path> </g></svg>
                          LOG IN </button>
                        </div>

                        </div>
                    </div>

          </div>

          
      </div>
    </>
  );
}

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/U" element={<U />}/>
        <Route path="/users/:id" element={<Us />} />
        <Route path="/DisplayDetails" element={<DisplayDetails />} />
        <Route path="/logout" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
