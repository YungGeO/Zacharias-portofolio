import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container} >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out to me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link} >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:zachariasg7@hotmail.com">zachariasg7@hotmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LikedIn icon" />
                    <a href="https://www.linkedin.com/in/georgioszacharias/">linkedin.com/in/georgioszacharias</a>
                </li>
                <li className={styles.link} >
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/GeorgiosZacharias">github.com/GeorgiosZacharias</a>
                </li>
            </ul>
        </footer>
    );
}