import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMicrophone,
    faFutbol,
    faGlassCheers,
    faPaw,
    faPlane,
    faMountain,
    faTheaterMasks, // For Performing Arts
    faCocktail, // For Bar Tendering
    faTree, // For Nature
    faGlobe, // For Traveling
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Import faInstagram
import "../styles/Header.css";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header"
        >
            <h1>HARSHITH A G</h1>
            <p>Automation Test Engineer | Software Developer Engineer in Test | Quality Analyst</p>
            <h5>
                Software Automation Engineer | A4 ISQI Certified | MERN Stack | SDET | Selenium | Automation Testing | Software Quality Assurance | React | Node.js | Software Development
            </h5>

            {/* About Me Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="about"
            >
                {/* Section 1: About Me */}
                <div className="section">
                    <div className="section-heading">



                        <p>
                            Hello! I’m Harshith, a passionate individual with a diverse range of interests and talents. While my professional life revolves around technology and test automation, I also have a flair for the creative and a love for nature. Let me take you through some fun aspects of who I am:
                        </p>
                    </div>
                </div>

                {/* Section 2: Talent & Performing Arts */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faTheaterMasks} className="section-icon" />
                        <h3>Talent & Performing Arts</h3>
                    </div>
                    <p>
                        One of the most exciting experiences in my life has been performing on <strong>Britain’s Got Talent</strong>, where I showcased my unique talent for <strong>animal, bird, and vehicle impressions</strong>. It was an exhilarating opportunity to share my creativity with the world, and I’ve since carried that passion for performance into other areas. Over the years, I've participated in numerous <strong>school events</strong> and won several competitions, further fueling my love for performing and bringing a smile to people’s faces.
                    </p>
                </div>

                {/* Section 3: Sports Enthusiast */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faFutbol} className="section-icon" />
                        <h3>Sports Enthusiast</h3>
                    </div>
                    <p>
                        When I’m not working on tech projects or impressing people with my skills, I’m likely on the field or court. I’m an avid sports lover, and I enjoy playing a variety of games. Whether it's <strong>hockey</strong>, <strong>badminton</strong>, <strong>table tennis</strong>, <strong>football</strong>, or <strong>cricket</strong>, I thrive in team environments and enjoy the competition, strategy, and camaraderie sports offer. My competitive spirit and love for active outdoor fun keep me engaged and motivated.
                    </p>
                </div>

                {/* Section 4: Bar Tendering & Hospitality */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faCocktail} className="section-icon" />
                        <h3>Bar Tendering & Hospitality</h3>
                    </div>
                    <p>
                        In addition to my love for sports and performance, I have an interest in <strong>bar tending</strong>. I enjoy experimenting with cocktails and creating the perfect drink for any occasion. Whether it’s mixing up a classic cocktail or coming up with new signature drinks, I find joy in the art of bar tending and the experience of socializing with others over a well-crafted drink.
                    </p>
                </div>

                {/* Section 5: Animal Lover & Nature Enthusiast */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faTree} className="section-icon" />
                        <h3>Animal Lover & Nature Enthusiast</h3>
                    </div>
                    <p>
                        I have a deep connection with nature and animals. I’ve always been a dog lover, and I share a special bond with my furry friends. I believe in treating animals with kindness, and I love spending time with them. My love for animals extends to all kinds, and I enjoy exploring nature whenever possible. Whether it’s hiking through the lush green forests or spending time with animals, nature is where I feel most at peace.
                    </p>
                    <div className="instagram-link">
                        <a
                            href="https://www.instagram.com/wanderwithcleo?igsh=MTN5Z3djZ3hjcmFtdg=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                            <span>Follow my dog Cleo on Instagram: Wanderwithcleo</span>
                        </a>
                    </div>
                </div>

                {/* Section 6: Traveling the World */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faGlobe} className="section-icon" />
                        <h3>Traveling the World</h3>
                    </div>
                    <p>
                        Travel is another big passion of mine. I enjoy exploring new places, experiencing diverse cultures, and learning from every journey I take. From scenic views to hidden gems, I am always eager to travel and immerse myself in the beauty the world has to offer.
                    </p>
                </div>

                {/* Section 7: A Proud Coorgi */}
                <div className="section">
                    <div className="section-heading">
                        <FontAwesomeIcon icon={faMountain} className="section-icon" />
                        <h3>A Proud Coorgi</h3>
                    </div>
                    <p>
                        I hail from the beautiful and serene region of <strong>Coorg</strong>, Karnataka. Coorg is known for its picturesque landscapes, coffee plantations, and rich cultural heritage. Growing up in such a vibrant environment has given me a deep appreciation for nature and an enduring love for the outdoors.
                    </p>
                </div>
            </motion.div>
        </motion.header>
    );
}