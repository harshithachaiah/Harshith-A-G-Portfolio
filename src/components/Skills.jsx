import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJava,
    faJs,
    faHtml5,
    faCss3,
    faGitAlt,
    faAws,
    faDocker,
    faJenkins,
    faMicrosoft,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons
import {
    faDatabase,
    faCode,
    faBug,
    faTools,
    faServer,
    faCloud,
    faCogs,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons
import "../styles/Skills.css";

const skills = [
    {
        name: "Java",
        description:
            "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        link: "https://docs.oracle.com/javase/tutorial/",
        icon: faJava, // Java icon
    },
    {
        name: "JavaScript",
        description:
            "JavaScript is a programming language that enables interactive web pages. It is an essential part of web development.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: faJs, // JavaScript icon
    },
    {
        name: "HTML",
        description:
            "HTML is the standard markup language for documents designed to be displayed in a web browser.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: faHtml5, // HTML icon
    },
    {
        name: "CSS",
        description:
            "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: faCss3, // CSS icon
    },
    {
        name: "Selenium",
        description:
            "Selenium is an open-source tool for automating web browsers. It is widely used for testing web applications.",
        link: "https://www.selenium.dev/documentation/",
        icon: faTools, // Selenium icon
    },
    {
        name: "Cypress",
        description:
            "Cypress is a modern end-to-end testing framework for web applications. It is known for its simplicity and speed.",
        link: "https://docs.cypress.io/",
        icon: faBug, // Cypress icon
    },
    {
        name: "TestNG",
        description:
            "TestNG is a testing framework inspired by JUnit and NUnit, but it introduces new functionalities to make testing more powerful and easier.",
        link: "https://testng.org/doc/",
        icon: faCode, // TestNG icon
    },
    {
        name: "Maven",
        description:
            "Maven is a build automation tool used primarily for Java projects. It simplifies the build process and manages dependencies.",
        link: "https://maven.apache.org/",
        icon: faTools, // Maven icon
    },
    {
        name: "Page Object Model",
        description:
            "The Page Object Model is a design pattern used in test automation to create an object repository for web UI elements.",
        link: "https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/",
        icon: faCogs, // Page Object Model icon
    },
    {
        name: "Behaviour Driven Development (BDD)",
        description:
            "BDD is a software development process that encourages collaboration among developers, QA, and non-technical participants.",
        link: "https://cucumber.io/docs/bdd/",
        icon: faCogs, // BDD icon
    },
    {
        name: "Test Driven Development (TDD)",
        description:
            "TDD is a software development approach where tests are written before the actual code, ensuring better code quality.",
        link: "https://en.wikipedia.org/wiki/Test-driven_development",
        icon: faCogs, // TDD icon
    },
    {
        name: "Cucumber",
        description:
            "Cucumber is a tool that supports Behavior-Driven Development (BDD) and allows writing tests in plain language.",
        link: "https://cucumber.io/",
        icon: faBug, // Cucumber icon
    },
    {
        name: "WebDriverIO",
        description:
            "WebdriverIO is a test automation framework for Node.js that provides a simple and concise API for writing tests.",
        link: "https://webdriver.io/",
        icon: faTools, // WebDriverIO icon
    },
    {
        name: "JIRA",
        description:
            "JIRA is a project management tool used for issue tracking, bug tracking, and agile project management.",
        link: "https://www.atlassian.com/software/jira",
        icon: faTools, // JIRA icon
    },
    {
        name: "Azure DevOps",
        description:
            "Azure DevOps provides developer services for supporting teams to plan work, collaborate on code development, and build and deploy applications.",
        link: "https://azure.microsoft.com/en-us/services/devops/",
        icon: faMicrosoft, // Azure DevOps icon
    },
    {
        name: "GIT",
        description:
            "Git is a distributed version control system used to track changes in source code during software development.",
        link: "https://git-scm.com/doc",
        icon: faGitAlt, // Git icon
    },
    {
        name: "JSON",
        description:
            "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write.",
        link: "https://www.json.org/json-en.html",
        icon: faCode, // JSON icon
    },
    {
        name: "RESTful APIs",
        description:
            "RESTful APIs are a type of web service that uses HTTP requests to interact with resources, following REST principles.",
        link: "https://restfulapi.net/",
        icon: faServer, // RESTful APIs icon
    },
    {
        name: "SOAP",
        description:
            "SOAP is a protocol for exchanging structured information in web services, often using XML.",
        link: "https://www.w3.org/TR/soap/",
        icon: faServer, // SOAP icon
    },
    {
        name: "Swagger",
        description:
            "Swagger is a framework for designing and documenting RESTful APIs, providing tools for API development.",
        link: "https://swagger.io/",
        icon: faTools, // Swagger icon
    },
    {
        name: "Postman",
        description:
            "Postman is a collaboration platform for API development. It simplifies the process of developing, testing, and documenting APIs.",
        link: "https://learning.postman.com/",
        icon: faTools, // Postman icon
    },
    {
        name: "SQL",
        description:
            "SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases.",
        link: "https://www.w3schools.com/sql/",
        icon: faDatabase, // SQL icon
    },
    {
        name: "MongoDB",
        description:
            "MongoDB is a NoSQL database that uses a document-oriented data model, making it flexible and scalable.",
        link: "https://www.mongodb.com/",
        icon: faDatabase, // MongoDB icon
    },
    {
        name: "SVN",
        description:
            "SVN (Apache Subversion) is a version control system used to manage files and directories over time.",
        link: "https://subversion.apache.org/",
        icon: faTools, // SVN icon
    },
    {
        name: "Eclipse",
        description:
            "Eclipse is an integrated development environment (IDE) used for Java and other programming languages.",
        link: "https://www.eclipse.org/",
        icon: faCode, // Eclipse icon
    },
    {
        name: "Visual Studio Code",
        description:
            "Visual Studio Code is a source-code editor developed by Microsoft, supporting multiple programming languages.",
        link: "https://code.visualstudio.com/",
        icon: faCode, // Visual Studio Code icon
    },
    {
        name: "Test Automation",
        description:
            "Test automation involves using tools and scripts to automate the execution of tests, improving efficiency and accuracy.",
        link: "https://en.wikipedia.org/wiki/Test_automation",
        icon: faBug, // Test Automation icon
    },
    {
        name: "Manual Testing",
        description:
            "Manual testing involves manually executing test cases without using automation tools, ensuring software quality.",
        link: "https://en.wikipedia.org/wiki/Manual_testing",
        icon: faTools, // Manual Testing icon
    },
    {
        name: "Test Management",
        description:
            "Test management involves planning, organizing, and controlling the testing process to ensure software quality.",
        link: "https://en.wikipedia.org/wiki/Test_management",
        icon: faTools, // Test Management icon
    },
    {
        name: "Test Estimation",
        description:
            "Test estimation involves predicting the effort, time, and resources required for testing activities.",
        link: "https://www.guru99.com/test-estimation.html",
        icon: faTools, // Test Estimation icon
    },
    {
        name: "Testing Strategies",
        description:
            "Testing strategies define the approach and methodology for testing software to ensure quality and reliability.",
        link: "https://www.guru99.com/testing-strategies.html",
        icon: faTools, // Testing Strategies icon
    },
    {
        name: "Test Plans",
        description:
            "A test plan is a document that outlines the scope, approach, resources, and schedule for testing activities.",
        link: "https://www.guru99.com/what-everybody-ought-to-know-about-test-planing.html",
        icon: faTools, // Test Plans icon
    },
    {
        name: "Test Scripts",
        description:
            "Test scripts are sets of instructions used to verify the functionality of software applications.",
        link: "https://www.guru99.com/test-script.html",
        icon: faCode, // Test Scripts icon
    },
    {
        name: "Agile Methodology (Scrum/Kanban)",
        description:
            "Agile methodologies like Scrum and Kanban focus on iterative development, collaboration, and continuous improvement.",
        link: "https://www.atlassian.com/agile",
        icon: faCogs, // Agile Methodology icon
    },
    {
        name: "JUnit",
        description:
            "JUnit is a unit testing framework for Java, used to write and run repeatable tests.",
        link: "https://junit.org/junit5/",
        icon: faCode, // JUnit icon
    },
    {
        name: "Gerkin",
        description:
            "Gerkin is a language used to write test cases in a human-readable format, often used in BDD.",
        link: "https://cucumber.io/docs/gherkin/",
        icon: faCode, // Gerkin icon
    },
    {
        name: "STLC",
        description:
            "STLC (Software Testing Life Cycle) is a sequence of activities performed during the testing process.",
        link: "https://www.guru99.com/software-testing-life-cycle.html",
        icon: faTools, // STLC icon
    },
    {
        name: "SDLC",
        description:
            "SDLC (Software Development Life Cycle) is a process used to design, develop, and test software.",
        link: "https://www.guru99.com/software-development-life-cycle-tutorial.html",
        icon: faTools, // SDLC icon
    },
    {
        name: "AWS",
        description:
            "AWS (Amazon Web Services) is a cloud computing platform that provides on-demand computing resources and services.",
        link: "https://aws.amazon.com/",
        icon: faAws, // AWS icon
    },
    {
        name: "Project Management",
        description:
            "Project management involves planning, organizing, and managing resources to achieve specific goals.",
        link: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management",
        icon: faTools, // Project Management icon
    },
    {
        name: "Object-Oriented Programming",
        description:
            "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects and classes.",
        link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
        icon: faCode, // OOP icon
    },
    // {
    //     name: "Docker",
    //     description:
    //         "Docker is a platform for developing, shipping, and running applications in containers.",
    //     link: "https://www.docker.com/",
    //     icon: faDocker, // Docker icon
    // },
    {
        name: "Jenkins",
        description:
            "Jenkins is an open-source automation server used to automate parts of the software development process.",
        link: "https://www.jenkins.io/",
        icon: faJenkins, // Jenkins icon
    },
    // {
    //     name: ".NET",
    //     description:
    //         ".NET is a software framework developed by Microsoft for building and running applications on Windows.",
    //     link: "https://dotnet.microsoft.com/",
    //     icon: faMicrosoft, // .NET icon
    // },
];

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(null); // State to track the selected skill

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill); // Set the selected skill
    };

    const handleClose = () => {
        setSelectedSkill(null); // Close the modal
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="skills"
        >
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="skill-item"
                        onClick={() => handleSkillClick(skill)} // Handle skill click
                    >
                        <div>
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                            <summary>{skill.name}</summary>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for selected skill */}
            {selectedSkill && (
                <div className="skill-modal-overlay">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="skill-modal"
                    >
                        <button className="close-button" onClick={handleClose}>
                            &times; {/* Close icon */}
                        </button>
                        <h3>{selectedSkill.name}</h3>
                        <p>{selectedSkill.description}</p>
                        <a
                            href={selectedSkill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="learn-more-link"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>
            )}
        </motion.section>
    );
}