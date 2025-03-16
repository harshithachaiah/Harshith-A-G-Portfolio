import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDownload, faLink, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import hag5_final_Report from "../assets/hag5_final_Report.pdf"; // Import the PDF file
import "../styles/Projects.css";

export default function Projects() {
    // Function to handle the download of the PDF file
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = hag5_final_Report;
        link.download = "hag5_final_Report.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="projects"
        >
            <h2>Projects</h2>

            {/* Barclays Life Moment Mortgage Project */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>Barclays Life Moment Mortgage</h3>
                </div>
                <p>
                    As a Software Engineer – Test Automation at Barclays, I work on a mortgage application project, ensuring the reliability and quality of the system through automation testing.
                </p>
                <ul>
                    <li>
                        Implementing and maintaining automated test scripts using Playwright with Java within the MAF framework to validate UI functionality and user workflows.
                    </li>
                    <li>
                        Designing and executing automated REST API tests using Java BDD (Behavior-Driven Development) to verify backend services.
                    </li>
                    <li>
                        Writing and maintaining SBEs to ensure clear, testable requirements aligned with business expectations.
                    </li>
                    <li>
                        Working closely with developers, business analysts, and other stakeholders to identify and resolve issues efficiently.
                    </li>
                    <li>
                        Enhancing test coverage, improving automation frameworks, and contributing to CI/CD pipelines for seamless software delivery.
                    </li>
                </ul>
            </div>

            {/* Volvo/Renault Project */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>Volvo/Renault</h3>
                </div>
                <p>
                    Automated cross-browser testing using Selenium WebDriver and TestNG using JAVA for IE, Chromium, and Firefox, guaranteeing consistent performance across major browsers.
                </p>
                <ul>
                    <li>Created reusable and generic code components, improving efficiency and maintainability across projects.</li>
                    <li>Executed manual test cases, automated tests, and API testing with Postman and Swagger UI.</li>
                    <li>Performed regular code reviews to ensure the quality and efficiency of automation scripts.</li>
                </ul>
            </div>

            {/* Länsförsäkringar Project */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>Länsförsäkringar</h3>
                </div>
                <p>
                    Incorporated Agile methodologies, adapting manual and automation testing approaches across the SDLC using Selenium WebDriver, BDD, and TestNG.
                </p>
                <ul>
                    <li>Conducted regression testing by executing scripts and logged identified defects for further analysis.</li>
                    <li>Implemented an automation testing tool for cross-functional teams, saving 300+ hours of testing time.</li>
                    <li>Involved in Sprint Planning, coding, debugging, and defect reporting.</li>
                </ul>
            </div>

            {/* Telia Project */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>Telia (Telecom)</h3>
                </div>
                <p>
                    Collaborated with designers, creating the basic template structure used throughout the module.
                </p>
                <ul>
                    <li>Contributed to web projects, troubleshooted issues, and reduced technical debts through bug fixes.</li>
                    <li>Implemented best practices for Product Quality Assurance.</li>
                </ul>
            </div>

            {/* Academic Projects */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>Academic Projects</h3>
                </div>
                <div className="project-subitem">
                    <h4>iGSE - An Energy Tool (React, MongoDB)</h4>
                    <p>
                        Developed a web interface and REST API for an energy tool, streamlining bill payments and providing open access to energy consumption data.
                    </p>
                    <a
                        href="https://github.com/harshithachaiah/iGSE-Energy-Tool"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} className="icon" /> View on GitHub
                    </a>
                </div>
                <div className="project-subitem">
                    <h4>Web Application for Group Allocation (React, MongoDB)</h4>
                    <p>
                        An intuitive web application that automates the allocation of groups for students, topics, and supervisors, enhancing collaboration and productivity.
                    </p>
                    <a
                        href="https://github.com/harshithachaiah/Group-Allocation-Web-App"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} className="icon" /> View on GitHub
                    </a>
                    <button className="download-button" onClick={handleDownload}>
                        <FontAwesomeIcon icon={faDownload} className="icon" /> Download Report
                    </button>
                </div>
                <div className="project-subitem">
                    <h4>ENVIRON - The Smart Horn (Arduino, C++)</h4>
                    <p>
                        A revolutionized automobile noise pollution solution with a wireless horn system, showcasing an eco-friendly driving solution.
                    </p>
                    <a
                        href="https://github.com/harshithachaiah/ENVIRON-Smart-Horn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} className="icon" /> View on GitHub
                    </a>
                </div>
            </div>

            {/* GitHub Repositories Section */}
            <div className="project-item">
                <div className="project-header">
                    <FontAwesomeIcon icon={faCode} className="project-icon" />
                    <h3>GitHub Repositories</h3>
                </div>
                <p>
                    Explore all my projects and repositories on GitHub.
                </p>
                <a
                    href="https://github.com/harshithachaiah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" /> Visit My GitHub Profile
                </a>
            </div>
        </motion.section>
    );
}