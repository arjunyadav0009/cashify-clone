
import React from "react";
import { MessageCircle } from "lucide-react";

import cashifyLogo from "../assets/cashify2.png";
import licence from "../assets/licence.svg";

// Social icons
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.3l5 6.6L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16 11.4a4 4 0 1 1-7.9-1.2 4 4 0 0 1 7.9 1.2z" />
    <line
      x1="17.5"
      y1="6.5"
      x2="17.5"
      y2="6.5"
      strokeLinecap="round"
    />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5V8.5L15.8 12l-6.2 3.5-6.2 3.5z" />
  </svg>
);

const servicesLinks = [
  "Sell Phone",
  "Sell Television",
  "Sell Smart Watch",
  "Sell Smart Speakers",
  "Sell DSLR Camera",
  "Sell Earbuds",
  "Repair Phone",
  "Buy Gadgets",
  "Recycle Phone",
  "Find New Phone",
  "Partner With Us",
];

const companyLinks = [
  "About Us",
  "Careers",
  "Articles",
  "Press Releases",
  "Become Cashify Partner",
  "Become Supersale Partner",
  "Corporate Information",
];

const sellDeviceLinks = [
  "Mobile Phone",
  "Laptop",
  "Tablet",
  "iMac",
  "Gaming Consoles",
];

const helpLinks = [
  "FAQ",
  "Contact Us",
  "Warranty Policy",
  "Refund Policy",
];

const moreInfoLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Terms of Use",
  "E-Waste Policy",
  "Cookie Policy",
  "What is Refurbished",
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[15px] font-semibold text-gray-800">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-[#03B5AA]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600">

      {/* Main Footer */}
      <div className="mx-auto max-w-full px-6 pb-12 pt-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

          {/* Logo + Social */}
          <div className="lg:col-span-1">

            <div className="" > 
            
              <img
                src={cashifyLogo}
                alt="Cashify"
                
              />
            </div>

            <p className="mb-3 mt-8 text-sm font-semibold text-gray-800">
              Follow us on
            </p>

            <div className="flex items-center gap-3">
              {[TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 text-gray-500 transition-colors hover:border-[#03B5AA] hover:text-[#03B5AA]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>

          </div>

          {/* Services */}
          <FooterColumn
            title="Services"
            links={servicesLinks}
            
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          {/* Sell Device */}
          <FooterColumn
            title="Sell Device"
            links={sellDeviceLinks}
          />

          {/* Help & Support */}
          <FooterColumn
            title="Help & Support"
            links={helpLinks}
          />

          {/* More Info + Chat */}
          <div className="flex flex-col justify-between">

            <FooterColumn
              title="More Info"
              links={moreInfoLinks}
            />

            <a
              href="#"
              className="mt-6 flex items-center gap-3 rounded-lg bg-[#03B5AA] px-4 py-1 text-white transition-colors hover:bg-[#029c92]"
            >
              <MessageCircle className="h-6 w-6 shrink-0" />

              <span>
                <span className="block text-sm font-semibold inline">
                  Chat with Us
                </span>

                <span className="block text-xs text-white/90">
                  Got questions? Just ask.
                </span>
              </span>
            </a>

          </div>

        </div>

      </div>

      {/* Legal / Registered Office */}
      <div className="border-t border-gray-200">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-start lg:justify-between">

          {/* Registered Office */}
          <div className="max-w-3xl text-xs leading-relaxed text-gray-500 ">

            <p className="mb-2 font-semibold text-gray-700">
              Registered Office:
            </p>

            <p className="text-left">
              Cashify Limited (formerly known as Cashify Pvt. Ltd. and Manak
              Waste Management Pvt. Ltd.) | 55, 2nd Floor, Lane-2, Westend
              Marg, Saidullajab, Near Saket Metro Station, New Delhi–110030,
              India, Support-7290068900 | CIN: U46524DL2009PLC190441
            </p>

            <p className="text-left">
              Cashify Limited (formerly known as Cashify Pvt. Ltd. and Manak
              Waste Management Pvt. Ltd.) is ISO 27001 &amp; 27701 Compliance
              Certified. Person who may be contacted in case of any compliance
              related queries or grievances: Manoj Kumar
              (grievanceofficer@cashify.in)
            </p>

            <p className="text-left">
              Cashify Limited (formerly known as Cashify Pvt. Ltd. and Manak
              Waste Management Pvt. Ltd.) is R2v3 Certified. Current
              certification scope covers Downstream Vendor Management, Logical
              Data Sanitization, and Testing &amp; Repair of Used Laptops only.
            </p>

            <p className="mt-4 text-left">
              Country of Origin: India ** All product, logos, and brands are
              property of their respective owners. All company, product and
              service names used in this website are for identification
              purposes only. Use of these names, logos, and brands does not
              imply endorsement.
            </p>

          </div>

          {/* Data Cleaning Guarantee */}
         <div className="mt-10" >
      <img
        src={licence}
        alt="Licence"
        
      />

    </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">

        <div className="mx-auto max-w-[1400px] px-6 py-5">

          <p className="text-xs text-gray-500">
            Copyright @ {new Date().getFullYear()} Cashify All rights reserved
          </p>

        </div>

      </div>

    </footer>
  );
}