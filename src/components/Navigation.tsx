import React from 'react';

const Navigation = () => {
  const navItems = ['NEW', 'Stores', 'Designer', 'Clothing', 'Shoes', 'Bags', 'Jewlery', 'Accessories'];
  
  return (
    <nav className="border-t border-gray-800">
      <ul className="flex items-center justify-between px-16 py-4">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="font-body text-[0.9rem] tracking-[0.15em] hover:text-gray-300 transition-colors uppercase"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;