export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide text-[#F4C430]">
          THE BRIM
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <a href="#home" className="text-[#FFF8E5] hover:text-[#F4C430] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#FFF8E5] hover:text-[#F4C430] transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-[#FFF8E5] hover:text-[#F4C430] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#footer" className="text-[#FFF8E5] hover:text-[#F4C430] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="#footer"
          className="hidden md:block bg-[#F4C430] text-[#1A1A1A] px-5 py-2 rounded-lg font-semibold hover:bg-[#E8B923] transition shadow-md"
        >
          Get in Touch
        </a>

      </div>
    </nav>
  );
}
