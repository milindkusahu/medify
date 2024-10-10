import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaAngleRight,
} from "react-icons/fa";

const FooterLink = ({ href, children }) => (
  <a href={href} className="block text-white hover:text-gray-300 mb-2">
    <FaAngleRight className="inline-block mr-2" />
    {children}
  </a>
);

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    className="bg-white text-[#2AA8FF] hover:bg-gray-200 p-2 rounded-full mr-4"
  >
    <Icon size={20} />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#1B3C74] text-white py-10 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Icons */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center text-3xl font-bold mb-4 text-[#2AA8FF]">
              <img
                src="/logo.png"
                alt="Medify Logo"
                height="36px"
                width="126.77px"
              />
            </div>
            <div className="flex mt-20">
              <SocialIcon href="#" Icon={FaFacebookF} />
              <SocialIcon href="#" Icon={FaTwitter} />
              <SocialIcon href="#" Icon={FaYoutube} />
              <SocialIcon href="#" Icon={FaPinterestP} />
            </div>
          </div>

          {/* First Link Column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Our Pricing</FooterLink>
            <FooterLink href="#">Our Gallery</FooterLink>
            <FooterLink href="#">Appointment</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </div>

          {/* Second Link Column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <FooterLink href="#">Orthology</FooterLink>
            <FooterLink href="#">Neurology</FooterLink>
            <FooterLink href="#">Dental Care</FooterLink>
            <FooterLink href="#">Ophthalmology</FooterLink>
            <FooterLink href="#">Cardiology</FooterLink>
          </div>

          {/* Third Link Column (Repeat of First) */}
          <div className="w-full md:w-1/4">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Our Pricing</FooterLink>
            <FooterLink href="#">Our Gallery</FooterLink>
            <FooterLink href="#">Appointment</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-600 my-8 mt-14"></div>

        {/* Copyright */}
        <div className="text-sm text-left">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
