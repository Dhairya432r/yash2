// import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//     const [user, setUser] = useState(null); // Initialize user as null
//     const [profile, setProfile] = useState([]);
    
//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => {
//             setUser(codeResponse);
//             // Store the user data in a cookie
//             Cookies.set('user', JSON.stringify(codeResponse));
//         },
//         onError: (error) => console.log('Login Failed:', error)
//     });

//     // ... rest of the code remains unchanged
//     useEffect(() => {
//         // Check if the 'user' cookie exists
//         const storedUser = Cookies.get('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     useEffect(() => {
//         if (user) {
//             axios
//                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                     headers: {
//                         Authorization: `Bearer ${user.access_token}`,
//                         Accept: 'application/json'
//                     }
//                 })
//                 .then((res) => {
//                     setProfile(res.data);

//                     // Send user data to the backend API using Axios POST request
//                     const userData = {
//                         name: res.data.name,
//                         email: res.data.email,
//                         picture:res.data.picture
//                     };
                    
//                     axios.post('https://dhiru-sever2.vercel.app/api/user', userData) // Replace '/api/user' with your backend endpoint
//                         .then(response => {
//                             console.log('User data sent successfully:', response.data);
//                         })
//                         .catch(error => {
//                             console.error('Error sending user data:', error);
//                         });
//                 })
//                 .catch((err) => console.log(err));
//         }
//     }, [user]);

//     const logOut = () => {
//         // Remove the 'user' cookie and log the user out
//         Cookies.remove('user');
//         googleLogout();
//         setUser(null);
//         setProfile(null);
//     };

//     return (
        
//         <div>
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             {user ? (
//                 <div>
//                     <img src={profile.picture} alt="user image" />
//                     <h3>User Logged in</h3>
//                     <p>Name: {profile.name}</p>
//                     <p>Email Address: {profile.email}</p>
//                     <br />
//                     <br />
//                     <button onClick={logOut}>Log out</button>
//                 </div>
//             ) : (
//                 <button onClick={() => login()}>Sign in with Google 🚀 </button>
//             )}
//         </div>
//     );
// }

// export default App;





// // import React, { useState, useEffect } from 'react';
// // import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// // import axios from 'axios';

// // function App() {
// //     const [user, setUser] = useState(null);
// //     const [profile, setProfile] = useState(null);

// //     const login = useGoogleLogin({
// //         onSuccess: (codeResponse) => {
// //             setUser(codeResponse);
// //             const { profileObj } = codeResponse;
// //             setProfile(profileObj);
// //             sendUserDataToAPI(profileObj);
// //         },
// //         onError: (error) => console.log('Login Failed:', error)
// //     });

// //     const sendUserDataToAPI = (userData) => {
// //         // Send user data to the backend API using Axios POST request
// //         axios.post('http://localhost:5000/api/user', userData)
// //             .then(response => {
// //                 console.log('User data sent successfully:', response.data);
// //             })
// //             .catch(error => {
// //                 console.error('Error sending user data:', error);
// //             });
// //     };

// //     const logOut = () => {
// //         googleLogout();
// //         setUser(null);
// //         setProfile(null);
// //     };

// //     return (
//         // <div>
//         //     <h2>React Google Login</h2>
//         //     <br />
//         //     <br />
//         //     {user ? (
//         //         <div>
//         //             <img src={profile?.imageUrl} alt="user image" />
//         //             <h3>User Logged in</h3>
//         //             <p>Name: {profile?.name}</p>
//         //             <p>Email Address: {profile?.email}</p>
//         //             <br />
//         //             <br />
//         //             <button onClick={logOut}>Log out</button>
//         //         </div>
//         //     ) : (
//         //         <button onClick={() => login()}>Sign in with Google 🚀 </button>
//         //     )}
//         // </div>
// //     );
// // }

// // export default App;


// // import React, { useState, useEffect } from 'react';
// // import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// // import axios from 'axios';

// // function App() {
// //     const [user, setUser] = useState([]);
// //     const [profile, setProfile] = useState([]);

// //     const login = useGoogleLogin({
// //         onSuccess: (codeResponse) => setUser(codeResponse),
// //         onError: (error) => console.log('Login Failed:', error)
// //     });

// //     const fetchUserData = async () => {
// //         try {
// //             const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
// //                 headers: {
// //                     Authorization: `Bearer ${user.access_token}`,
// //                     Accept: 'application/json'
// //                 }
// //             });
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching user data:', error);
// //             throw error;
// //         }
// //     };

// //     const sendUserDataToAPI = async (userData) => {
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/user', userData);
// //             const { name, email, picture } = response.data;
// //             console.log('User data sent successfully:', response.data);
// //             setUser({ name, email, picture });
// //         } catch (error) {
// //             console.error('Error sending user data:', error);
// //         }
// //     };

// //     useEffect(() => {
// //         if (user) {
// //             fetchUserData()
// //                 .then(userData => sendUserDataToAPI(userData))
// //                 .catch(error => console.error('Error:', error));
// //         }
// //     }, [user]);

// //     const logOut = () => {
// //         googleLogout();
// //         setUser(null);
// //         setProfile(null);
// //     };

// //     return (
// //         <div>
// //             {/* Your UI components */}
// //             <div>
// //             <h2>React Google Login</h2>
// //             <br />
// //             <br />
// //             {user ? (
// //                 <div>
// //                     <img src={profile?.imageUrl} alt="user image" />
// //                     <h3>User Logged in</h3>
// //                     <p>Name: {profile?.name}</p>
// //                     <p>Email Address: {profile?.email}</p>
// //                     <br />
// //                     <br />
// //                     <button onClick={logOut}>Log out</button>
// //                 </div>
// //             ) : (
// //                 <button onClick={() => login()}>Sign in with Google 🚀 </button>
// //             )}
// //         </div>
// //         </div>
// //     );
// // }

// // export default App;






import React, { createContext, useReducer } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Login from './Components/Login'
import Changeexpense from './Components/Changeexpense'
import ManageExpense from './Components/ManageExpense'
import Profile from './Components/Profile'
import Logout from './Components/Logout'
import Reset from './Components/Reset'
import { initialState, reducer } from './Reducer/UserReducer'
export const UserContext = createContext()
const Routnig = () => {
  return (
    <BrowserRouter basename='/yash'>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/yash" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Changeexpense" element={<Changeexpense />} />
        <Route path="/ManageExpense" element={<ManageExpense />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Reset" element={<Reset />} />

      </Routes>
    </BrowserRouter>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }} >
      
        <Routnig />
      </UserContext.Provider>




    </>
  )
}

export default App
