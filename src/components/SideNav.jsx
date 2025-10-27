import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ✅ 페이지별 색상 테마 정의
  const themeMap = {
    "/people": "from-green-800 to-green-600",
    "/research": "from-blue-800 to-blue-600",
    "/publications": "from-yellow-700 to-yellow-500",
    "/tools": "from-purple-800 to-purple-600",
    "/contact": "from-pink-800 to-pink-600",
    "/": "from-blue-900 to-blue-700", // default fallback
  };

  const themeClass = themeMap[location.pathname] || themeMap["/"];

  const navItems = [
    { title: "Home", link: "/" },
    { title: "People", link: "/people" },
    { title: "Research", link: "/research" },
    { title: "Publications", link: "/publications" },
    { title: "Tools", link: "/tools" },
    { title: "Contact", link: "/contact" },
  ];

  // Close menu when route changes
  useEffect(() => setOpen(false), [location]);

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-blue-700 text-white rounded-lg shadow-lg"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-screen w-56 bg-gradient-to-b ${themeClass} text-white flex flex-col justify-center shadow-2xl transform transition-transform duration-500 z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h1 className="text-xl font-bold mb-10 text-center leading-tight px-2">
          Smart<br />Microbial Factory<br />& Biofoundry Lab
        </h1>
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                `text-2xl font-medium transition-all duration-200 hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 scale-110" : "text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Background overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30"
        ></div>
      )}
    </>
  );
}