import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const headerStyle = "bg-white text-teal-500 py-4 px-8 absolute w-full";
  const navbarStyle = "flex justify-between items-center relative";
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = isSticky ? `${headerStyle} sticky top-0 shadow-lg` : headerStyle;

  const menuItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "services", text: "Services" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <header id="home" className={headerClasses}>
      <nav className={navbarStyle}>
        <h1 className="text-2xl font-bold">Company Name</h1>
        <ul className="flex">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="rounded-md">
              <Link
                to={menuItem.id}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-6 font-semibold"
                style={{ cursor: 'pointer' }}
              >
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
