import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faDownload } from "@fortawesome/free-solid-svg-icons";
import Harshith_AG_SDET from "../assets/Harshith_AG_SDET.pdf"; // Import the PDF file
import "../styles/Footer.css";

export default function Footer() {
    // Function to handle the download of the resume
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = Harshith_AG_SDET;
        link.download = "Harshith_AG_SDET.pdf"; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="footer"
        >
            <div className="footer-content">
                <p>&copy; 2025 HARSHITH A GANESH. All rights reserved.</p>
                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/harshith-aiyannira-ganesh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/harshithachaiah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
                    </a>
                    <a href="mailto:achaiahharshith@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                    </a>
                    <a
                        href="https://www.instagram.com/harshith_achaiah?igsh=Mms3MjkzOTJsdTY2&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram
                    </a>
                    <a href="tel:+447776631042">
                        <FontAwesomeIcon icon={faPhone} className="icon" /> +44 7776631042
                    </a>
                    <button onClick={handleDownloadResume} className="download-resume">
                        <FontAwesomeIcon icon={faDownload} className="icon" /> Download Resume
                    </button>
                </div>
            </div>
        </motion.footer>
    );
}