/* eslint-disable jsx-a11y/img-redundant-alt */
import profileImage from "../assets/profile.jpg";

function Navbar() {

  const NavOptions = [
    {name:"Home",link:'/hero'},
    {name:"Projects",link:'/'},
    {name:"Clients",link:'/'},
    {name:"About",link:'/'},
    {name:"Contact",link:'/'},
  ]

  return (
    <div className="flex w-full bg-gray-900 flex-wrap p-3 sticky top-0 z-50"> {/* Added justify-between and p-3 */}
      <div className="text-white flex items-center space-x-2">
        <img
          className="w-20 h-30 rounded-lg"
          alt="Profile Picture"
          src={profileImage}
        />
        <span className="text-white px-11">Inzamam Yousaf</span>
      </div>

      <div className={`items-center text-white px-3 inline-grid my-3`}>
      {NavOptions.map((option, index) => (
          <a key={index} href={option.link} className={`hover:text-gray-300 flex-col `}>
            {option.name}
          </a>
        ))}
      </div>

      <div className="text-white py-3 mx-10">
        Contact Information
            <ul>
                <l1>l201121@lhr.nu.edu.pk</l1>
                <li>0316-4177827</li>
            </ul>
      </div>

    </div>
  );
}

export default Navbar;
