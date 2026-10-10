import React from "react";
import { Link } from "react-router-dom";

import footerBg from "../../../public/assests/footer.jpg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white  ">
      {/* Footer Image */}
      <div className="relative w-full min-h-[600px] md:min-h-[650px] overflow-hidden ">
        {/* Background */}
        <img
          src={footerBg}
          alt="Barbershop"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div
          dir="ltr"
          className="relative z-10 min-h-[600px] md:min-h-[650px] flex items-center py-12 sm:py-16"
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center mb-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.18em]">
                BARBER
              </h2>
            </Link>

            {/* Description */}
            <p
              dir="rtl"
              className="text-gray-200 text-sm md:text-base leading-7 max-w-md mb-8 text-left"
            >
              استایل شما، امضای شماست.
              <br />
              تجربه‌ای متفاوت از یک اصلاح حرفه‌ای.
            </p>

            {/* Information */}
            <div className="space-y-6 text-sm md:text-base">
              {/* Address */}
              <div>
                <p className="text-gray-400 text-xs tracking-[0.2em] mb-2">
                  ADDRESS
                </p>

                <p dir="rtl" className="text-gray-100 text-left">
                  تهران، میدان پونک
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-gray-400 text-xs tracking-[0.2em] mb-2">
                  PHONE
                </p>

                <a
                  href="tel:+989195756500"
                  dir="ltr"
                  className="inline-flex items-center border border-white/30 px-5 py-2 mt-1 bg-black/40 backdrop-blur-sm rounded-xl tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                >
                  09195756500
                </a>
              </div>

              {/* Working Hours */}
              <div>
                <p className="text-gray-400 text-xs tracking-[0.2em] mb-2">
                  WORKING HOURS
                </p>

                <p dir="rtl" className="text-gray-100 text-left">
                  همه روزه — ۱۰:۰۰ تا ۲۲:۰۰
                </p>
              </div>
            </div>

            {/* Booking */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-8 border border-white px-7 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              رزرو نوبت
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-white/10 px-4 sm:px-6 lg:px-8 py-5">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2026 BARBER — All Rights Reserved - AMIRREZA FEIZPOUR
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Telegram
            </a>

            <a href="#" className="hover:text-white transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
