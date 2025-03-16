import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct import for LinkedIn icon
import "../styles/Certifications.css";

export default function Certifications() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="certifications"
        >
            <h2>Certifications & Awards</h2>

            {/* Certifications Section */}
            <div className="certifications-item">
                <div className="certifications-header">
                    <FontAwesomeIcon icon={faCertificate} className="certifications-icon" />
                    <h3>Certifications</h3>
                </div>
                <ul>
                    <li>ISQI Selenium Certification</li>
                    <li>Agile Methodology Certification</li>
                    <li>Core Java Certification</li>
                    <li>SQL Certification</li>
                    <li>ITIL Foundation Certification in IT Service Management</li>
                    <li>Capgemini Certified in Selenium Level 1 & 2, Agile</li>
                    <li>Capgemini Automation Engineer Foundation Certified</li>
                </ul>
                <div className="certification-link">
                    <a
                        href="https://www.linkedin.com/in/harshith-aiyannira-ganesh/details/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
                        <span>Check out my certifications</span>
                    </a>
                </div>
            </div>

            {/* Awards Section */}
            <div className="certifications-item">
                <div className="certifications-header">
                    <FontAwesomeIcon icon={faAward} className="certifications-icon" />
                    <h3>Awards</h3>
                </div>
                <ul>
                    <li>
                        <strong>NORDICS India All-Star Award (September 2021):</strong> Honored for exceptional skills and significant contributions to the project.
                    </li>
                    <li>
                        <strong>CapStar Award from Capgemini:</strong> Recognized for outstanding mimicry performance.
                    </li>
                </ul>
            </div>
        </motion.section>
    );
}