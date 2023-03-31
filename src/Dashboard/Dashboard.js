import { auth } from "../firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../components/Home/isAuth";
import './ProfileCard.css';
import Navbar from "../Navbar/Navbar";

function Dashboard(props) {


  //   const [ setUser] = useState(null);
  //   var user = auth().currentUser;

  //   useEffect(() => {
  //     const currentUser = firebase.auth().currentUser;
  //     if (currentUser) {
  //       setUser({
  //         email: currentUser.email,
  //         displayName: currentUser.displayName,
  //         uid: currentUser.uid,
  //       });
  //     }
  //   }, []);

  //   const [userName, setUserName] = useState("");

  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setUserName(user.displayName);
  //       } else setUserName("");
  //     });
  //   }, []);
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in.
  //       const uid = user.uid;
  //       console.log("User is authenticated. UID:", uid);
  //     } else {
  //       // User is signed out.
  //       console.log("User is not authenticated.");
  //     }
  //   });

  //   return (
  // //     // check if user is authenticated or not

  //   <h1>Hellooooooo</h1>

  // // //     <div>
  // // //       <h1>Welcome to the dashboard, {user?.displayName}!</h1>
  // // //       <p>Your email is: {user?.email}</p>
  // // //       <p>Your UID is: {user?.uid}</p>
  // // //     </div>
  //   );
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(null);
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);


  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else setUser("");
    });
  }, []);



  return (
    <div className="dashboardMain">

      {/* <div className="card-container">
        <header>
          <img src={user.photoURL} alt={user.displayName} />
        </header>
        <h1 className="bold-text">
          {user.displayName}
        </h1>

        <div className="social-container">
          <div className="followers">
            <h1 className="bold-text">{user.uid}</h1>
            <h2 className="smaller-text">User ID</h2>
          </div>
          <div className="likes">
            <h1 className="bold-text">{user.displayName}</h1>
            <h2 className="smaller-text">Likes</h2>
          </div>
          <div className="photos">
            <h1 className="bold-text"><p>Profile picture: <img src={user.photoURL} alt="Profile" /></p></h1>
            <h2 className="smaller-text">Profile</h2>
          </div>
        </div>
      </div> 
       <h2>{user.uid}</h2>
<h2>{user.email}</h2>
<h2>{user.displayName}</h2>
<p>Profile picture: <img src={user.photoURL} alt="Profile"/></p> 


 */}



      <div class="card">
        <div class="lines"></div>
        <div class="imgBox">
          <img src={user.photoURL} alt="Image" />
        </div>
        <div class="content">
          <div class="details neonText">
            <h2>
              {user.displayName} <br />
              <span></span>
            </h2>
            <div class="data">

              <h3>
                {user.email}
                 <br />
                <span>Email</span>
              </h3>
            </div>
            <div class="actionBtn">
              <button><Link to="/learn">BUY</Link></button>
              <button><Link to="/learn">SELL</Link></button>


              <div class="act">
        <button><Link to="/">HOME</Link></button>
        </div>
            </div>

          </div>
        </div>


      </div>

      </div>

      );


}

      export default Dashboard;

