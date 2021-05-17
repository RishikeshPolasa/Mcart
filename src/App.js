import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  let User = user;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (!User && loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
        type: actionTypes.SET_USER,
        user: foundUser,
      });
      User = foundUser;
    }
  });
  return (
    <div className="App">
      {!User ? (
        <Login />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
