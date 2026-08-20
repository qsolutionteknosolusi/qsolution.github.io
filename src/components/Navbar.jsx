export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <a href="#top" className="font-bold text-xl text-gray-900">
            QSolution
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-blue-600">
                Products
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-black"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}