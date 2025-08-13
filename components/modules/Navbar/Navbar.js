import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Menu", href: "/menu" },
    { id: 5, name: "Reservatioin", href: "/reservation" },
    { id: 6, name: "Testimonial", href: "/testimonial" },
    { id: 7, name: "Contact", href: "/contact" },
  ];

  const route = useRouter();

  const [searchText, setSearchText] = useState("");

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13) {
      if (searchText.trim()) {
        route.push(`/search?q=${searchText}`);
      }
    }
  };

  const searchHandler = () => {
    if (searchText.trim()) {
      route.push(`/search?q=${searchText}`);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex justify-start items-center gap-5">
          <div className="text-5xl">NEXT</div>
          <div className="flex justify-center items-center gap-2">
            <input
              className="outline-0 border-b-2 border-gray-300 px-2 py-1"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={searchHandlerWithEnter}
              type="text"
              placeholder="Search..."
            />
            <FaSearch onClick={searchHandler} />
          </div>
        </div>
        <div className="flex gap-5 justify-end items-center">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="hover:text-gray-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
