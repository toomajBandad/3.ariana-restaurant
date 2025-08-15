import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Menu", href: "/menu" },
    { id: 5, name: "Reservation", href: "/reservation" },
    { id: 6, name: "Testimonial", href: "/testimonial" },
    { id: 7, name: "Contact", href: "/contact" },
  ];

  const route = useRouter();
  const [searchText, setSearchText] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchHandlerWithEnter = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      route.push(`/search?q=${searchText}`);
    }
  };

  const searchHandler = () => {
    if (searchText.trim()) {
      route.push(`/search?q=${searchText}`);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 text-white bg-trans">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo and Search */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <img src="/images/ARLogo.png" className="w-22" alt="logo" />
          </Link>

          <div className="hidden md:flex items-center gap-0">
            <input
              className="outline-0 border-b-2 border-gray-300 p-2 bg-trans2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={searchHandlerWithEnter}
              type="text"
              placeholder="Search..."
              aria-label="Search input"
            />
            <FaSearch
              onClick={searchHandler}
              className="cursor-pointer bg-trans2 p-3 h-full w-full border-b-2 border-gray-300"
              aria-label="Search icon"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`hover:text-gray-400 ${
                route.pathname === item.href ? "font-bold text-lightgold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Component */}
      {isMobileMenuOpen && (
        <MobileMenu
          menuItems={menuItems}
          route={route}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

function MobileMenu({ menuItems, route, closeMenu }) {
  return (
    <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={closeMenu}
          className={`block py-2 text-lg hover:text-gray-400 ${
            route.pathname === item.href ? "font-bold underline" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
