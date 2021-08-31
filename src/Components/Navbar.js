import React from 'react';
import Button from '@material-ui/core/Button';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="ButtonsContainer">
          <Link to="/home">
            <Button> Home </Button>
          </Link>
          <Link to="/team">
            <Button> Team </Button>
          </Link>
          <Link to="/services">
            <Button>
              Services
          </Button>
          </Link>
          <Link to="/currentProjects">
            <Button>
              Current Projects
            </Button>
          </Link>
          <Link to="/meetings">
            <Button>
              Meetings/Seminars
            </Button>
          </Link>
          <Link to="/resources">
            <Button>
              Resources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;