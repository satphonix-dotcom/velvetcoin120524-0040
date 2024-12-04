import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const footerLinks = [
    'About Us',
    'Shipping Policy',
    'Return Policy',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions'
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between">
          <Logo showText={true} />

          {/* Footer Links */}
          <div>
            <ul className="space-y-3 text-right">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;