import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-white w-full border-t">
      <div className="max-w-[1440px] mx-auto px-8 ">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
          {/* First Column */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-xs uppercase hover:text-readMoreHoverTextColor">
                Find a Store
              </Link>
              <Link href="#" className="text-xs uppercase hover:text-readMoreHoverTextColor">
                Become a Member
              </Link>
              <Link href="#" className="text-xs uppercase hover:text-readMoreHoverTextColor">
                Sign Up for Email
              </Link>
              <Link href="#" className="text-xs hover:text-readMoreHoverTextColor">
                Send Us Feedback
              </Link>
              <Link href="#" className="text-[9px] uppercase hover:text-readMoreHoverTextColor">
                Student Discounts
              </Link>
            </nav>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider">Get Help</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Order Status
              </Link>
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Delivery
              </Link>
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Returns
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Payment Options
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Contact Us On Nike.com Inquiries
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Contact Us On All Other Inquiries
              </Link>
            </nav>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider">About Nike</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                News
              </Link>
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Careers
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Investors
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Sustainability
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaTwitter className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaFacebookF className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <TfiYoutube className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaInstagram className="w-[30px] h-[30px] text-white " />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-readMoreHoverTextColor py-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-xs">India</span>
              </div>
              <p className="text-[11px] text-[#eeeeee]">© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mt-4 lg:mt-0">
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Guides
              </Link>
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Terms of Sale
              </Link>
              <Link href="#" className="text-xs text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Terms of Use
              </Link>
              <Link href="#" className="text-[11px] text-[#eeeeee] hover:text-readMoreHoverTextColor">
                Nike Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
