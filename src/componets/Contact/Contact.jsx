import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container} >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link} >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:zachariasg7@hotmail.com">zachariasg7@hotmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LikedIn icon" />
                    <a href="https://www.linkedin.com/in/yunggeo">linkedin.com/in/yunggeo</a>
                </li>
                <li className={styles.link} >
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/YungGeO">github.com/YungGeO</a>
                </li>
            </ul>
        </footer>
    );
}