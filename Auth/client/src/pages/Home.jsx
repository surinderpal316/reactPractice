import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000", // Your backend endpoint for session verification
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status === "success") {
          setUsername(user);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
        setLoggedIn(false);
      }
    };

    verifySession();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:9000/logout", {}, { withCredentials: true });
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="home_page">
      {loggedIn ? (
        <>
          <h4>
            Welcome <span>{username}</span>
          </h4>
          <button onClick={logout}>LOGOUT</button>
        </>
      ) : (
        <>
          <p>Please login or register to access the home page.</p>
          <button onClick={handleLoginClick}>LOGIN</button>
          <button onClick={handleRegisterClick}>REGISTER</button>
        </>
      )}
    </div>
  );
};

export default Home;
