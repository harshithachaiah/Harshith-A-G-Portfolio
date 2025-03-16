import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUniversity } from "@fortawesome/free-solid-svg-icons";
import "../styles/Education.css";

export default function Education() {
    return (
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="education"
        >
            <h2>Education</h2>

            {/* Master of Science Section */}
            <div className="education-item">
                <div className="education-header">
                    <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
                    <h3>Master of Science in Advanced Computer Science (MSc)</h3>
                </div>
                <p>
                    <FontAwesomeIcon icon={faUniversity} className="bullet-icon" />
                    <a href="https://le.ac.uk" target="_blank" rel="noopener noreferrer">
                        University of Leicester, United Kingdom
                    </a> (Distinction)
                </p>
                <p>Jan 2022 – Jul 2023</p>
                <div className="education-details">
                    <h4>Core Modules:</h4>
                    <ul>
                        <li>Analysis and Design of Algorithms</li>
                        <li>Mobile and Web Technologies</li>
                        <li>Software Measurement and Quality Assurance</li>
                        <li>Advanced C++ Programming</li>
                        <li>Agile Cloud Automation</li>
                        <li>Service Oriented Architecture</li>
                    </ul>
                </div>
            </div>

            {/* Bachelor of Engineering Section */}
            <div className="education-item">
                <div className="education-header">
                    <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
                    <h3>Bachelor of Engineering, Electronics and Communication</h3>
                </div>
                <p>
                    <FontAwesomeIcon icon={faUniversity} className="bullet-icon" />
                    <a href="https://citcoorg.edu.in" target="_blank" rel="noopener noreferrer">
                        Coorg Institute of Technology, Visvesvaraya Technological University, India
                    </a>
                </p>
                <p>Jul 2014 – Jun 2018</p>
            </div>
        </motion.section>
    );
}