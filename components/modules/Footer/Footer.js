import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-15 pb-5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#da9f5b]">Follow Us</h3>
          <div className="flex gap-7 text-white text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#da9f5b]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#da9f5b]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#da9f5b]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#da9f5b]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#da9f5b]">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <a href="/menu" className="hover:text-[#da9f5b]">
                Menu
              </a>
            </li>
            <li>
              <a href="/reservation" className="hover:text-[#da9f5b]">
                Reservation
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#da9f5b]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#da9f5b]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#da9f5b]">Contact Us</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <strong>Address:</strong> Calle Mayor 10, Alcalá de Henares,
              Madrid
            </li>
            <li>
              <strong>Phone:</strong> +34 912 345 678
            </li>
            <li>
              <strong>Email:</strong> contact@yourrestaurant.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-white/60 text-sm border-t-1 pt-4 mx-20">
        &copy; {new Date().getFullYear()} Ariana Restaurant. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
