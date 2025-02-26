import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-4 flex justify-center gap-50 mr-80">
      <NavLink
        to="/"
        className="md:text-3xl text-2xl text-white font-bold hover:text-gray-400 transition mt-10"
      >
        Home
      </NavLink>

      <NavLink
        to="/pastes"
        className="md:text-3xl text-2xl text-white font-bold hover:text-gray-400 transition mt-10"
      >
        Pastes
      </NavLink>
    </div>
  );
};

export default Navbar;