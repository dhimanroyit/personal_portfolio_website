import React from 'react';
import { Link } from 'react-router-dom';

function SideBarNavItem({path, title}) {
  return (
    <li className="">
      <Link className="block px-4 py-2.5 text-center border-b border-gray-800 capitalize text-white" to={path}>{title}</Link>
    </li>
  )
}

export default SideBarNavItem
