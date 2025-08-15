import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const menuItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Menu", href: "/menu" },
    { id: 5, name: "Reservation", href: "/reservation" },
    { id: 6, name: "Testimonial", href: "/testimonial" },
    { id: 7, name: "Contact", href: "/contact" },
  ];

  // Split menuItems into two columns
  const half = Math.ceil(menuItems.length / 2);
  const firstCol = menuItems.slice(0, half);
  const secondCol = menuItems.slice(half);

  return (
    <footer className="bg-black bg-opacity-90 text-white pt-10 pb-6 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Logo & Description */}
        <div>
          <img src="/images/ARLogo.png" alt="logo" className="w-24 mb-4" />
          <p className="text-sm text-gray-400">
            Welcome to AR — where flavor meets elegance. Join us for unforgettable dining experiences.
          </p>
        </div>

        {/* Navigation Links in Two Columns */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-lightgold">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2">
              {firstCol.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="hover:text-lightgold transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {secondCol.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="hover:text-lightgold transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-lightgold">Stay Connected</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-trans2 border-b-2 border-gray-300 px-3 py-2 w-full outline-none text-white placeholder-white/70"
            />
            <button className="ml-2 bg-lightgold text-black px-4 py-2 font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-lightgold">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-lightgold">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-lightgold">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Email" className="hover:text-lightgold">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AR Restaurant. All rights reserved.
      </div>
    </footer>
  );
}