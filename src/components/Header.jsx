import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import jasmineLogo from '../img/jasmine.png';

const Header = () => {
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

  const headerClasses = isSticky
    ? 'bg-white py-4 px-8 absolute w-full flex justify-center items-center sticky top-0 shadow-lg'
    : 'bg-white py-4 px-8 absolute w-full flex justify-center items-center';

  const navbarStyle = 'flex justify-between items-center relative';
  const dropdownMenuStyle = 'mt-2 py-2 bg-white border rounded shadow-md';

  const menuItems = [
    { id: 'layanan', text: 'Layanan', subMenu: ['Rawat Inap', 'Rawat Jalan'] },
    { id: 'dokter', text: 'Dokter' },
    { id: 'informasi', text: 'Informasi' },
    {
      id: 'jasmine',
      text: 'Jasmine',
      subMenu: ['Tentang Kami', 'Manajemen Kami'],
    },
    { id: 'kontak', text: 'Kontak' },
  ];

  return (
    <header className={headerClasses}>
      <nav className={navbarStyle}>
        <img src={jasmineLogo} alt="JasmineLogo" className="h-10 mr-4" />
        <ul className="flex">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="relative rounded-md group">
              <Link
                to={menuItem.id}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-color-pr  hover:text-color-sc  px-4 py-6 font-semibold cursor-pointer  group-hover:text-color-sc "
              >
                {menuItem.text}
              </Link>
              {menuItem.subMenu && (
                <ul
                  className={`${dropdownMenuStyle
                    } absolute left-0 mt-2 w-40 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  {menuItem.subMenu.map((subMenuItem) => (
                    <li key={subMenuItem} className="px-4 py-2">
                      <Link
                        to={subMenuItem.toLowerCase().replace(' ', '-')}
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="text-color-pr hover:text-color-sc   cursor-pointer"
                      >
                        {subMenuItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
