import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const CustomNavbar = () => {
  let location = useLocation();

  const onClick = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    console.log("clickkk");
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <Navbar style={{ position: 'sticky', top: '0', zIndex: '1' }} bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="0" style={{ color: 'white' }}>
        CLOUDNOTES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ml-auto">
          <Nav.Item className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">
              About
            </Link>
          </Nav.Item>
          {localStorage.getItem('name') && localStorage.getItem('token') ? (
            <>
              <h3  style={{textAlign:"center", color: 'white' ,marginLeft:"400px" }}>Welcome {localStorage.getItem('name')}</h3>
              <button  onClick={onClick} type="submit" className="btn btn-dark" style={{marginLeft:"400px"}}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link style={{ marginLeft: '1000px' }} className="btn btn-primary mx-6" to="/Login" role="button">
                Log In
              </Link>
              <Link style={{ marginLeft: '8px' }} className="btn btn-primary" to="/Signup" role="button">
                Sign up
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
