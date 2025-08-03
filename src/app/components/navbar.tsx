export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-whitefont-bold">
          My Portfolio
        </a>
        <ul className="flex space-x-4 items-center font-poppins tracking-wider">
          <li>
            <a href="/" className="text-black m-1.5">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black m-1.5">
              About Me
            </a>
          </li>
          <li>
            <a href="/projects" className="text-black m-1.5">
              Projects
            </a>
          </li>
          <li>
            <a href="/experience" className="text-black m-1.5">
              Experience
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black m-1.5">
              Contact
            </a>
          </li>
          <li>
            <button
              style={{ backgroundColor: "#FD6F00" }}
              className="px-3 py-1 rounded-sm"
            >
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
