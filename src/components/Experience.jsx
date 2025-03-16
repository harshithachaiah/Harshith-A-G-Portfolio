import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faBug,
    faCogs,
    faTools,
    faCode,
    faDatabase,
    faCloud,
    faUsers,
    faChartLine,
    faBuilding,
    faTruck,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
    faJava,
    faJenkins,
    faDocker,
    faAws,
    faMicrosoft,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons
import "../styles/Experience.css";

export default function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="experience"
        >
            <h2>Experience</h2>

            {/* Barclays Experience */}
            <div className="experience-item">
                <div className="experience-header">
                    <FontAwesomeIcon icon={faBuilding} className="experience-icon" /> {/* Banking icon */}
                    <h3>Software Engineer – Test Automation - Barclays (Knutsford, UK)</h3>
                </div>
                <p>Present</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCode} className="bullet-icon" />
                        Spearheaded the development and maintenance of automated test scripts using Playwright with Java within the MAF framework.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBug} className="bullet-icon" />
                        Designed and executed <strong>REST API tests</strong> using{" "}
                        <strong>Java BDD (Behavior-Driven Development)</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCogs} className="bullet-icon" />
                        Authored and maintained <strong>SBEs (Specification by Example)</strong> to align
                        business requirements with testable criteria.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className="bullet-icon" />
                        Collaborated closely with <strong>developers, business analysts, and stakeholders</strong>{" "}
                        to identify, troubleshoot, and resolve issues.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartLine} className="bullet-icon" />
                        Enhanced <strong>test coverage</strong> by <strong>15%</strong> through advanced
                        automation strategies.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCloud} className="bullet-icon" />
                        Contributed to the <strong>CI/CD pipeline</strong>, reducing deployment time by{" "}
                        <strong>20%</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTools} className="bullet-icon" />
                        Improved the <strong>automation framework</strong>, resulting in a{" "}
                        <strong>10% reduction in test execution time</strong>.
                    </li>
                </ul>
            </div>

            {/* Royal Mail Experience */}
            <div className="experience-item">
                <div className="experience-header">
                    <FontAwesomeIcon icon={faTruck} className="experience-icon" /> {/* Logistics icon */}
                    <h3>MFCO/QA - Royal Mail (Northampton, UK)</h3>
                </div>
                <p>Sept 2022 – Current</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBug} className="bullet-icon" />
                        Implemented quality checks and quality assurance processes, reducing misrouting errors by{" "}
                        <strong>10%</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCogs} className="bullet-icon" />
                        Conducted <strong>Sanity and Regression testing</strong> to maintain environment
                        stability.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className="bullet-icon" />
                        Performed <strong>Requirement Analysis, Planning, Execution, Defect Reporting & Tracking,
                            Defect Triaging, Root Cause Analysis</strong>.
                    </li>
                </ul>
            </div>

            {/* Capgemini Experience */}
            <div className="experience-item">
                <div className="experience-header">
                    <FontAwesomeIcon icon={faHandshake} className="experience-icon" /> {/* Consultancy icon */}
                    <h3>Senior Software QA Engineer - Capgemini (Bengaluru, IN)</h3>
                </div>
                <p>Jan 2020 – Dec 2021</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCode} className="bullet-icon" />
                        Designed and implemented a <strong>Component-Based Framework (CBF)</strong>, reducing
                        testing time by <strong>12%</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className="bullet-icon" />
                        Led <strong>defect triage meetings</strong>, engaging stakeholders to address issues.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartLine} className="bullet-icon" />
                        Crafted targeted <strong>Test Scenarios</strong>, reducing issue-related delays by{" "}
                        <strong>5%</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBug} className="bullet-icon" />
                        Executed <strong>650+ regression tests</strong>, identifying <strong>40+ minor</strong>{" "}
                        and <strong>35 major defects</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCloud} className="bullet-icon" />
                        Established <strong>CI/CD Pipeline Integration</strong> using <strong>Jenkins</strong>.
                    </li>
                </ul>
            </div>

            {/* Capgemini (Mumbai) Experience */}
            <div className="experience-item">
                <div className="experience-header">
                    <FontAwesomeIcon icon={faHandshake} className="experience-icon" /> {/* Consultancy icon */}
                    <h3>Software QA Engineer - Capgemini (Mumbai, IN)</h3>
                </div>
                <p>Nov 2018 – Dec 2019</p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCode} className="bullet-icon" />
                        Developed and evaluated <strong>4000+ manual and automated tests</strong>, improving
                        testing efficiency.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className="bullet-icon" />
                        Communicated testing progress to stakeholders and tracked software defects.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTools} className="bullet-icon" />
                        Pioneered an <strong>end-to-end automation test strategy</strong> using{" "}
                        <strong>Selenium WebDriver</strong>.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDatabase} className="bullet-icon" />
                        Demonstrated expertise in{""}
                        <strong>Functional Testing, System Testing, Integration Testing, Regression Testing, User Acceptance Testing, Exploratory Testing, Performance Testing, Restful API Testing, and End-to-End Testing</strong>
                        .
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChartLine} className="bullet-icon" />
                        Enhanced the performance of the regression suite by <strong>12%</strong> using{" "}
                        <strong>TestNG</strong>.
                    </li>
                </ul>
            </div>
        </motion.section>
    );
}