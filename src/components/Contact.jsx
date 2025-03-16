import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
    const form = useRef(); // Reference to the form
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
    const [messageSent, setMessageSent] = useState(false); // Success state
    const [error, setError] = useState(""); // Error state
    const [serviceUnavailable, setServiceUnavailable] = useState(false); // Service unavailable state

    const sendMessage = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Validate inputs
        if (!name || !email || !message) {
            setError("Please fill out all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true); // Set loading state
        setError(""); // Clear any previous errors
        setServiceUnavailable(false); // Reset service unavailable state

        // Send the form data using EmailJS
        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
                form.current, // Reference to the form
                "YOUR_USER_ID" // Replace with your EmailJS User ID
            )
            .then(
                (result) => {
                    console.log("Message sent successfully!", result.text);
                    setMessageSent(true); // Set success state
                    setIsSubmitting(false); // Reset loading state
                    form.current.reset(); // Clear the form
                },
                (error) => {
                    console.error("Failed to send message:", error.text);

                    // Check if the error is related to service unavailability
                    if (error.text.includes("service unavailable") || error.text.includes("API down")) {
                        setServiceUnavailable(true); // Show the service unavailable message
                    } else {
                        setError("Failed to send message. Please try again."); // Set general error state
                    }

                    setIsSubmitting(false); // Reset loading state
                }
            );
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="contact"
            id="contact"
        >
            <h2>Contact Me</h2>
            {messageSent ? (
                <p className="success-message">Thank you! Your message has been sent.</p>
            ) : (
                <form ref={form} onSubmit={sendMessage} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {serviceUnavailable && (
                        <p className="caution-message">
                            Caution: The email service is temporarily unavailable. Please try again later.
                        </p>
                    )}
                    {/* <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button> */}
                    <p className="caution-message">
                        Caution: The email service is temporarily unavailable. Please try again later or   <a href="mailto:achaiahharshith@gmail.com">click here</a>.
                    </p>
                </form>
            )}
        </motion.section>
    );
}
