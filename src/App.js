import { useState } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom"; // Use HashRouter
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <Router>
      <div className="app">
        {/* Toggle Button (Always Visible) */}
        {!isSidebarOpen && (
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰ {/* Hamburger icon */}
          </button>
        )}

        {/* Sidebar Navigation */}
        <nav className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          {/* Close Button inside the Sidebar */}
          {isSidebarOpen && (
            <button className="sidebar-close" onClick={toggleSidebar}>
              ✕ {/* Close icon */}
            </button>
          )}

          <ul className="nav-list">
            <li>
              <NavLink to="/" end className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="nav-link" activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="nav-link" activeClassName="active">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className="nav-link" activeClassName="active">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className="nav-link" activeClassName="active">
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className={`main-content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}