import React from 'react';
import './header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header" onClick={() => {{navigate(`/`)}}}>
      <h1>LEARN. GROW. SHINE</h1>
    </div>
  );
}

export default Header;