import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky lg:fixed top-0 w-full z-50 backdrop-blur-lg bg-secondary/50 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img src="src/assets/logo.png" alt="MoonEX" className="h-12 w-12" />
            <span className="text-3xl font-bold text-yellow-400 font-raleway">
              MoonEX
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
            <a
              href="#"
              className="nav-link text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="nav-link text-white hover:text-yellow-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="nav-link text-white hover:text-yellow-400 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="nav-link text-white hover:text-yellow-400 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="nav-link text-white hover:text-yellow-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black hover:from-yellow-300 hover:to-yellow-100 text-sm font-bold rounded-full px-6 py-2 shadow-md transition-transform transform hover:scale-105">
              Connect Wallet
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <a
            href="#"
            className="block text-lg font-semibold hover:text-yellow-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-lg font-semibold hover:text-yellow-400 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-lg font-semibold hover:text-yellow-400 transition-colors"
          >
            FAQs
          </a>
          <a
            href="#"
            className="block text-lg font-semibold hover:text-yellow-400 transition-colors"
          >
            Contact Us
          </a>
          <Button className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black hover:from-yellow-300 hover:to-yellow-100 text-sm font-bold rounded-full px-6 py-2 shadow-md transition-transform transform hover:scale-105">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
