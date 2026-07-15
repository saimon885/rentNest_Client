import React from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
              <Building2 className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-lg font-black text-white">
              Rent<span className="text-secondary">Nest</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Find your perfect rental home or list your property with ease.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <div className="flex flex-col gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:text-secondary transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="hover:text-secondary transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>support@rentnest.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/30 py-4 text-center text-[11px] text-slate-500">
        <p>
          © {new Date().getFullYear()} RentNest. All rights reserved. Developed
          by Saimon Hossain.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
