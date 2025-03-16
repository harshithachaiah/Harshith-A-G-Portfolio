import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="about"
        >
            <h2>About Me</h2>
            <p>
                I am an experienced <strong>Test Automation Engineer</strong> with a
                passion for delivering high-quality software solutions through automated
                testing. With a background in <strong>banking, logistics, automotive, and insurance domains</strong>,
                I have built a strong foundation in both <strong>functional</strong> and{" "}
                <strong>automation testing</strong>. Over the years, I have developed
                expertise in designing and implementing automated testing frameworks,
                optimizing testing processes, and ensuring the quality and reliability of
                complex systems.
            </p>
            <p>
                I specialize in creating <strong>robust, scalable automation frameworks</strong> using a variety of tools and
                technologies, such as <strong>Selenium</strong>, <strong>Playwright</strong>, and <strong>Java</strong>. By leveraging best practices like{" "}
                <strong>Test-Driven Development (TDD)</strong> and <strong>Behavior-Driven Development (BDD)</strong>, I have successfully streamlined testing
                workflows, reduced manual effort, and enhanced test coverage.
            </p>
            <p>
                My experience spans working with <strong>UI automation</strong>, <strong>REST API testing</strong>, and developing end-to-end testing strategies. I am also skilled in writing{" "}
                <strong>Specification by Example (SBE)</strong> to ensure that business requirements are clear, testable, and aligned with development goals.
            </p>
            <p>
                As an advocate for <strong>continuous improvement</strong>, I focus on:
            </p>
            <ul>
                <li>Enhancing the <strong>efficiency</strong> of automation frameworks.</li>
                <li>Contributing to <strong>CI/CD pipelines</strong> to enable seamless software delivery.</li>
                <li>Collaborating with cross-functional teams to identify and resolve issues efficiently.</li>
            </ul>
            <p>
                I have a deep commitment to delivering high-quality software and constantly improving test coverage, process efficiency, and overall product reliability. In every project, I prioritize clear communication, collaboration, and a strong focus on customer needs to ensure that the solutions meet business expectations.
            </p>

            <h3>My Approach</h3>
            <p>
                I believe in the power of <strong>automation</strong> to improve testing efficiency and reduce human error. My approach revolves around building reliable, reusable, and maintainable test scripts, ensuring that both functional and non-functional aspects of the system are thoroughly validated. With a keen eye for detail and a focus on optimizing test processes, I am always looking for opportunities to innovate and drive efficiency in testing.
            </p>
        </motion.section>
    );
}