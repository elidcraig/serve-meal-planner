import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bannerLogo from "./assets/SERVE-full.png";

function Banner() {
  const [currentUser, setCurrentUser] = useState({ id: 1 });
  const navigate = useNavigate();

  return (
    <div className="banner">
      <Link to="/">
        <img className="banner-logo" alt="Serve logo" src={bannerLogo} />
      </Link>
      <div className="banner-button-group">
        {currentUser.id ? (
          <>
            <Link to="/lists/new">New List</Link>
            <Link to="/plans/new">New Meal Plan</Link>
            <Link to="/meals/new">New Meal</Link>
            <Link to="/account">Account</Link>
            <span className="logout">Log out</span>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Banner;
