import React from "react";
import profileImage from "../assets/profile.jpg";

function Navbar() {

  const NavOptions = [
    {name:"Home",link:'/'},
    {name:"Projects",link:'/'},
    {name:"Clients",link:'/'},
    {name:"About",link:'/'},
    {name:"Contact",link:'/'},
  ]

  return (
    <div className="flex w-full bg-gray-900 justify-between p-3"> {/* Added justify-between and p-3 */}
      <div className="text-white flex items-center space-x-2">
        <img
          className="w-10 h-10 rounded-full"
          alt="Profile Picture"
          src={profileImage}
        />
        <span className="text-white">Inzamam Yousaf</span>
      </div>
      <div className="flex items-center space-x-2 text-white px-3 ">
      {NavOptions.map((option, index) => (
          <a key={index} href={option.link} className="hover:text-gray-300">
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
